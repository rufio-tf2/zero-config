import fs from 'fs-extra';
import path from 'path';
import { useCallback, useMemo } from 'react';

import useGameData from './useGameData';
import useGitHub from './useGitHub';

const TEST_URL = 'https://github.com/rufio-tf2/pg-config';

const useBaseConfig = () => {
  const { game } = useGameData();
  const downloadRepo = useGitHub();

  const CUSTOM_FOLDER = useMemo(() => {
    return game.path && path.join(game.path, 'tf/custom/');
  }, [game.path]);

  const installBaseConfig = useCallback(() => {
    return CUSTOM_FOLDER
      ? fs.ensureDir(CUSTOM_FOLDER).then(() => {
          return downloadRepo(TEST_URL, CUSTOM_FOLDER, {
            givenName: 'base-config',
          })
            .then(() => {
              console.log('done!');
            })
            .catch(error => {
              console.log('Error', error);
            });
        })
      : null;
  }, [CUSTOM_FOLDER, downloadRepo]);

  return useMemo(
    () => ({
      installBaseConfig,
    }),
    [installBaseConfig],
  );
};

export default useBaseConfig;
