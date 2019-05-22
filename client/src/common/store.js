import produce from 'immer';

const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

const addToastMessage = createAction('toast/add', message => message);
const removeToastMessage = createAction('toast/remove');

const initialState = {
  toast: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
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
};
