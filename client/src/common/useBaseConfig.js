import fs from 'fs-extra';
import { useCallback, useMemo } from 'react';

import useGameData from './useGameData';
import useGitHub from './useGitHub';

const TEST_URL = 'https://github.com/rufio-tf2/pg-config';

const useBaseConfig = () => {
  const { customFolderPath } = useGameData();
  const downloadRepo = useGitHub();

  const installBaseConfig = useCallback(() => {
    return customFolderPath
      ? fs.ensureDir(customFolderPath).then(() => {
          return downloadRepo(TEST_URL, customFolderPath, {
            givenName: 'base-config',
          })
            .then(() => console.log('done!'))
            .catch(error => console.log('Error', error));
        })
      : null;
  }, [customFolderPath, downloadRepo]);

  return useMemo(
    () => ({
      installBaseConfig,
    }),
    [installBaseConfig],
  );
};

export default useBaseConfig;
