import { createHistory, createMemorySource } from '@reach/router';
import { useMemo } from 'react';

const source = createMemorySource('/');
const history = createHistory(source);

const useRouter = () => {
  const { location, navigate } = history;

  return useMemo(
    () => ({
      ...history,
      history,
      location,
      navigate,
      source,
    }),
    [location, navigate],
  );
};

export default useRouter;
