import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';
import { useCallback } from 'react';
import tempy from 'tempy';

const GH_HOSTNAME = 'github.com';

function parseGitHubPath(pathname) {
  const [username, repository, ...rest] = pathname.split('/').filter(v => !!v);

  const branchIndex =
    rest.findIndex(pathValue => pathValue === 'tree' || pathValue === 'blob') +
    1;

  return {
    branch: rest[branchIndex],
    repository,
    username,
  };
}

function parseGitHubUri(uri) {
  const { hostname, origin, pathname, protocol } = new URL(uri);

  if (hostname !== GH_HOSTNAME) {
    throw Error(`That url doesn't seem to be a GitHub link.`);
  }

  const { branch = 'master', repository, username } = parseGitHubPath(pathname);

  const archiveUrl = `${origin}/${username}/${repository}/archive/${branch}.zip`;

  return {
    archiveUrl,
    branch,
    origin,
    protocol: protocol.slice(0, -1),
    repository,
    username,
  };
}

const useGitHub = () => {
  const downloadRepo = useCallback((uri, outputDir, options = {}) => {
    const { archiveUrl, branch, repository } = parseGitHubUri(uri);
    const { givenName = repository } = options;

    const temporaryZip = tempy.file({ name: 'zero-config-tmp.zip' });
    const defaultZipName = `${repository}-${branch}/`;

    return new Promise((resolve, reject) => {
      const readStream = got.stream(archiveUrl);
      const writeStream = fs.createWriteStream(temporaryZip);

      return readStream.pipe(writeStream).on('finish', error => {
        if (error) return reject(error);

        const zip = new AdmZip(temporaryZip);

        zip.extractAllTo(outputDir, true);

        fs.renameSync(
          path.join(outputDir, defaultZipName),
          path.join(outputDir, givenName),
        );

        return resolve();
      });
    });
  }, []);

  return downloadRepo;
};

export default useGitHub;
