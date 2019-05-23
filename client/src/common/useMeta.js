import { useMemo } from 'react';

import { clearMeta, clearStore, setMeta } from './store';
import useStore from './useStore';

function useMeta() {
  const { dispatch, state } = useStore();
  const meta = state.meta;
  const { title, version } = meta;

  return useMemo(
    () => ({
      clearMeta() {
        dispatch(clearMeta());
      },
      clearStore() {
        dispatch(clearStore());
      },
      meta,
      setMeta(meta) {
        dispatch(setMeta(meta));
      },
      title,
      version,
    }),
    [dispatch, meta, title, version],
  );
}

export default useMeta;
