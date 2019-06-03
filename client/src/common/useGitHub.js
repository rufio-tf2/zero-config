import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import path from 'path';
import { useCallback } from 'react';
import tempy from 'tempy';

import download from './download';
import { get } from './util';

const GH_HOSTNAME = 'github.com';

// https://github.com/rufio-tf2/starter-config/archive/v1.0.0.zip

function getBranchName(rest) {
  const branchDesignatorIndex = rest.findIndex(path =>
    ['tree', 'blob'].includes(path),
  );

  return branchDesignatorIndex !== -1
    ? get(rest, [branchDesignatorIndex + 1]) // Branch name follows designator
    : undefined;
}

function parseGitHubPath(pathname) {
  const [username, repository, ...rest] = pathname.split('/').filter(v => !!v);

  const branch = getBranchName(rest);

  const archive = rest.includes('archive')
    ? pathname
    : branch
    ? `${origin}/${username}/${repository}/archive/${branch}.zip`
    : new Error(`Couldn't construct \`.zip\` archive URL from: ${pathname}`);

  return {
    archive,
    branch,
    repository,
    username,
  };
}

function parseGitHubUri(uri) {
  const { hostname, origin, pathname, protocol } = new URL(uri);

  if (hostname !== GH_HOSTNAME) {
    throw Error(
      `${uri} doesn't seem to be a GitHub link.`,
      `Received: ${hostname} but expected ${GH_HOSTNAME}`,
    );
  }

  const { archive, branch = 'master', repository, username } = parseGitHubPath(
    pathname,
  );

  return {
    archive,
    branch,
    origin,
    protocol: protocol.slice(0, -1),
    repository,
    username,
  };
}

const useGitHub = () => {
  const downloadRepo = useCallback((uri, outputDir, options = {}) => {
    const { archive, branch, repository } = parseGitHubUri(uri);
    const { givenName = repository } = options;

    const temporaryZip = tempy.file({ name: 'zero-config-tmp.zip' });
    const defaultZipName = `${repository}-${branch}/`;

    return download(archive, temporaryZip).then(() => {
      const zip = new AdmZip(temporaryZip);

      zip.extractAllTo(outputDir, true);

      const oldPath = path.join(outputDir, defaultZipName);
      const newPath = path.join(outputDir, givenName);

      const existsAlready = !!fs.statSync(newPath);
      if (existsAlready) {
      } else {
        fs.renameSync(oldPath, newPath);
      }
    });
  }, []);

  return downloadRepo;
};

export default useGitHub;
