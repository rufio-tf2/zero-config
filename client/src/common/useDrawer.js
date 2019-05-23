import { useCallback, useMemo } from 'react';

import { setDrawerSelectedId } from './store';
import useStore from './useStore';
import { isNonNil, keyBy } from './util';

function useDrawer() {
  const { dispatch, state } = useStore();
  const { groups, items, selectedId } = state.drawer;

  const idToItem = useCallback(id => items[id], [items]);

  const sections = useMemo(() => {
    const sortedGroups = Object.values(groups).sort(group => group.sortOrder);

    const list = sortedGroups
      .map(group => ({
        ...group,
        items: group.itemIds
          .map(idToItem)
          .filter(isNonNil)
          .sort(item => item.sortOrder),
      }))
      .filter(group => group.items);

    return keyBy(list, 'id');
  }, [groups, idToItem]);

  return useMemo(
    () => ({
      sections,
      selectedId,
      setDrawerSelectedId(id) {
        dispatch(setDrawerSelectedId(id));
      },
    }),
    [dispatch, sections, selectedId],
  );
}

export default useDrawer;
