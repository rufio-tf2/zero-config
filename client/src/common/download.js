import AdmZip from 'adm-zip';
import contentDisposition from 'content-disposition';
import extName from 'ext-name';
import fileType from 'file-type';
import fs from 'fs-extra';
import got from 'got';
import http from 'http';
import https from 'https';
import path from 'path';
import tempy from 'tempy';
import url from 'url';

import { get } from './util';

const getAgent = protocol =>
  protocol === 'https' ? new https.Agent() : new http.Agent();

const getFilenameFromHeader = ({ headers }) => {
  const header = get(headers, ['content-disposition']);

  if (!header) return null;

  const { parameters } = contentDisposition.parse(header);

  return get(parameters, ['filename']);
};

const getExtFromMime = headers => {
  const header = get(headers, ['content-type']);
  const [headerInfo] = extName.mime(header);

  return headerInfo ? get(headerInfo, ['ext']) : null;
};

const addExtToFilename = ({ filename, headers }, data) => {
  const { ext } = data ? fileType(data) : {};
  const extension = ext || getExtFromMime(headers);

  return extension || `${filename}.${extension}`;
};

const getFilenameFromPath = (response, data) => {
  const { requestUrl } = response;
  const { pathname } = url.parse(requestUrl);

  const filename = path.basename(pathname);

  return path.extname(filename) ? filename : addExtToFilename(response, data);
};

const getFilename = (res, data) => {
  return getFilenameFromHeader(res) || getFilenameFromPath(res, data) || null;
};

const getProtocolFromUri = uri => {
  const { protocol } = url.parse(uri);

  return protocol ? protocol.slice(0, -1) : null;
};

const download = async (uri, output, options) => {
  const { encoding = 'buffer', extract, repoName } = options;

  const zipTarget = tempy.file({ name: 'master.zip ' });

  const filename = options.filename || 'tmp';
  const outputFilepath = path.join(output, filename);

  return new Promise((resolve, reject) => {
    const readStream = got.stream(uri);
    const writeStream = fs.createWriteStream(zipTarget);

    return readStream.pipe(writeStream).on('finish', error => {
      if (error) return reject(error);

      const zip = new AdmZip(zipTarget);

      zip.extractEntryTo(repoName, outputFilepath, false, true);
      return resolve();
    });
  });
};

export default download;
