import produce from 'immer';

import { omitBy } from './util';

const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

export const clearStore = createAction('store/clear');

export const addDrawerItem = createAction('drawer/addItem', item => item);
export const removeItemById = createAction('drawer/removeItemById', id => id);
export const setDrawerItems = createAction('drawer/setItems', items => items);
export const setDrawerSelectedId = createAction(
  'drawer/setSelectedId',
  id => id,
);

export const clearGame = createAction('game/clear');
export const setGame = createAction('game/set', game => game);
export const clearGamePath = createAction('game/clearPath');
export const setGamePath = createAction('game/setPath', path => path);

export const clearMeta = createAction('meta/clear');
export const setMeta = createAction('meta/set', meta => meta);

export const addToastMessage = createAction('toast/add', message => message);
export const removeToastMessage = createAction('toast/remove');

const mockState = {
  drawer: {
    groups: {
      0: {
        id: 0,
        label: 'Options',
      },
      1: {
        id: 1,
        label: 'Adv. Options',
      },
    },
    items: {
      0: {
        groupId: 0,
        id: 0,
        label: 'Inbox',
        sortOrder: 0,
      },
      1: {
        groupId: 0,
        id: 1,
        label: 'Starred',
        sortOrder: 1,
      },
      2: {
        groupId: 1,
        id: 2,
        label: 'Send email',
        sortOrder: 2,
      },
      3: {
        groupId: 1,
        id: 3,
        label: 'Drafts',
        sortOrder: 3,
      },
    },
    selectedId: null,
  },
  game: {
    fullName: 'Team Fortress 2',
    path: null,
    shortName: 'TF2',
  },
};

export const initialState = {
  drawer: {
    items: {},
    sections: {},
    selectedId: null,
  },
  game: {},
  meta: {
    title: 'Zero Config',
    version: `v${process.env.REACT_APP_VERSION}`,
  },
  toast: null,
  ...mockState, // TODO: Remove
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'drawer/addItem':
      const item = action.payload;

      draft.drawer = {
        ...draft.drawer,
        [item.id]: item,
      };
      break;

    case 'drawer/removeItemById':
      draft.drawer.items = omitBy(
        draft.drawer.items,
        item => item.id === action.payload,
      );
      break;

    case 'drawer/setItems':
      draft.drawer.items = action.payload;
      break;

    case 'drawer/setSelectedId':
      draft.drawer.selectedId = action.payload;
      break;

    case 'meta/clear':
      draft.meta = {};
      break;

    case 'meta/set':
      draft.meta = action.payload;
      break;

    case 'game/clear':
      draft.game = {};
      break;

    case 'game/clearPath':
      draft.game.path = null;
      break;

    case 'game/set':
      draft.game = action.payload;
      break;

    case 'game/setPath':
      draft.game.path = action.payload;
      break;

    case 'store/clear':
      draft = initialState;
      break;

    case 'toast/add':
      // TODO: Handle toast queues
      draft.toast = action.payload;
      break;

    case 'toast/remove':
      draft.toast = null;
      break;

    default:
      return draft;
  }
});

export default reducer;
