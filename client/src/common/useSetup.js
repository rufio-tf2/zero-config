import { useMemo } from 'react';

import { clearSetup, setSetup } from './store';
import useStore from './useStore';
import { get } from './util';

const isValidSetup = setup => !!setup.gamePath;

function useSetup() {
  const { dispatch, state } = useStore();

  const setup = useMemo(() => get(state, ['setup'], {}), [state]);
  const hasValidSetup = useMemo(() => isValidSetup(setup), [setup]);

  return useMemo(
    () => ({
      clearSetup() {
        dispatch(clearSetup());
      },
      hasValidSetup,
      setSetup(setup) {
        dispatch(setSetup(setup));
      },
      setup,
    }),
    [dispatch, hasValidSetup, setup],
  );
}

export default useSetup;
