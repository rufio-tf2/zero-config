import produce from 'immer';

const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

const addToastMessage = createAction('toast/add', message => message);
const removeToastMessage = createAction('toast/remove');

const setSettings = createAction('settings/set', settings => settings);

const initialState = {
  settings: {
    hasSetup: true,
  },
  toast: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'settings/set':
      draft.settings = action.payload;
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
  initialState,
  reducer as default,
  removeToastMessage,
  setSettings,
};
