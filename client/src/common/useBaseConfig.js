// import download from 'download';
import fs from 'fs-extra';
import path from 'path';
import { useCallback, useMemo } from 'react';

import download from './download';
import useGameData from './useGameData';

const GITHUB_USER = 'rufio-tf2';
const REPO_NAME = 'skeletor-config';
// const ZIP_NAME = 'base-config.zip';
const OUTPUT_NAME = 'zero-config';

const uri = 'https://github.com/rufio-tf2/skeletor-config/archive/master.zip';
const BASE_CONFIG_URL = `https://github.com/${GITHUB_USER}/${REPO_NAME}/archive/master.zip`;

const useBaseConfig = () => {
  const { game } = useGameData();

  const CUSTOM_FOLDER = useMemo(() => {
    return game.path && path.join(game.path, 'tf/custom/');
  }, [game.path]);

  const CONFIG_TARGET = useMemo(() => {
    return CUSTOM_FOLDER && path.join(CUSTOM_FOLDER, OUTPUT_NAME);
  }, [CUSTOM_FOLDER]);

  const installBaseConfig = useCallback(() => {
    return CUSTOM_FOLDER
      ? fs.ensureDir(CUSTOM_FOLDER).then(() => {
          return download(BASE_CONFIG_URL, CONFIG_TARGET, {
            extract: true,
          })
            .then(() => {
              console.log('done!');
            })
            .catch(error => {
              console.log('Error', error);
            });
        })
      : null;
  }, [CONFIG_TARGET, CUSTOM_FOLDER]);

  return useMemo(
    () => ({
      installBaseConfig,
    }),
    [installBaseConfig],
  );
};

export default useBaseConfig;
