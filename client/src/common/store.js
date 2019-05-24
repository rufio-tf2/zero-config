import produce from 'immer';

const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

export const clearStore = createAction('store/clear');

export const clearGame = createAction('game/clear');
export const setGame = createAction('game/set', game => game);
export const clearGamePath = createAction('game/clearPath');
export const setGamePath = createAction('game/setPath', path => path);

export const clearMeta = createAction('meta/clear');
export const setMeta = createAction('meta/set', meta => meta);

export const addToastMessage = createAction('toast/add', message => message);
export const removeToastMessage = createAction('toast/remove');

const mockState = {
  game: {
    fullName: 'Team Fortress 2',
    path: null,
    shortName: 'TF2',
  },
};

export const initialState = {
  drawer: {
    groups: {},
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
