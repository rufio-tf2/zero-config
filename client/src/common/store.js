import produce from 'immer';

// Actions
const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

const addToastMessage = createAction('toast/add', message => message);
const removeToastMessage = createAction('toast/remove');

const clearSetup = createAction('setup/clear');
const setSetup = createAction('setup/set', setup => setup);

const initialState = {
  game: {
    fullName: 'Team Fortress 2',
  },
  setup: {},
  toast: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'setup/clear':
      draft.setup = null;
      break;

    case 'setup/set':
      draft.setup = action.payload;
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

export {
  addToastMessage,
  clearSetup,
  initialState,
  reducer as default,
  removeToastMessage,
  setSetup,
};
