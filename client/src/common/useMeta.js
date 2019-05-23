import { useMemo } from 'react';

import { clearMeta, clearStore, setMeta } from './store';
import useStore from './useStore';
import { get } from './util';

function useMeta() {
  const { dispatch, state } = useStore();

  const meta = useMemo(() => get(state, ['meta'], {}), [state]);
  const title = useMemo(() => get(meta, ['title'], ''), [meta]);
  const version = useMemo(() => get(meta, ['version'], ''), [meta]);

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
