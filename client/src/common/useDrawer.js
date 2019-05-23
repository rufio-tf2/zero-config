import { useMemo } from 'react';

import { setDrawerSelectedId } from './store';
import useStore from './useStore';
import { get, groupBy, mapValues } from './util';

function useDrawer() {
  const { dispatch, state } = useStore();

  const drawer = useMemo(() => get(state, ['drawer'], {}), [state]);
  const selectedId = useMemo(() => get(drawer, ['selectedId'], ''), [drawer]);
  const groupInfo = useMemo(() => get(drawer, ['groups'], ''), [drawer]);
  const items = useMemo(() => get(drawer, ['items'], ''), [drawer]);

  const orderedItems = useMemo(
    () => Object.values(items).sort(item => item.sortOrder),
    [items],
  );
  const sections = useMemo(() => {
    const groups = groupBy(orderedItems, item => item.groupId);

    return mapValues(groups, (value, key) => ({
      ...groupInfo[key],
      items: value,
    }));
  }, [groupInfo, orderedItems]);

  return useMemo(
    () => ({
      sections: Object.values(sections),
      selectedId: selectedId || orderedItems[0].id,
      setDrawerSelectedId(id) {
        dispatch(setDrawerSelectedId(id));
      },
    }),
    [dispatch, orderedItems, sections, selectedId],
  );
}

export default useDrawer;
