import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';
import tempy from 'tempy';

const download = async (uri, output, options) => {
  const { repoName } = options;

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
