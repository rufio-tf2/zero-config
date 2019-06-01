// import download from 'download';
import { useMemo } from 'react';

import { download } from './util';

const useGitHub = () => {
  return useMemo(
    () => ({
      installRepo(repoUrl, dest, { name }) {
        return download(repoUrl, dest, { extract: true, name })
          .then(() => {
            console.log('done!');
          })
          .catch(error => {
            console.log('Error', error);
          });
      },
    }),
    [],
  );
};

export default useGitHub;
