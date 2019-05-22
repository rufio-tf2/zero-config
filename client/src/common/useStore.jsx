import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import useSessionStorage from 'react-use/lib/useSessionStorage';

import { createApi } from './api';
import reducer, { initialState } from './store';
import { isArray, omit } from './util';

const STORAGE_DENY_LIST = ['toast'];

const withBatchedActions = reducer => (state, action) => {
  if (isArray(action)) {
    return action.reduce(
      (prevState, action) => reducer(prevState, action),
      state,
    );
  }

  return reducer(state, action);
};

const StoreContext = createContext(null);

function useStore() {
  return useContext(StoreContext);
}

const StoreProvider = props => {
  const [storedState, storeState] = useSessionStorage('state', initialState);
  // Default any properties omitted from the session-storage due to the deny-list.
  const reducerState = {
    ...initialState,
    // Remove any stale storage of keys on the deny-list.
    ...omit(storedState, STORAGE_DENY_LIST),
  };
  const [state, dispatch] = useReducer(
    withBatchedActions(reducer),
    reducerState,
  );
  useEffect(() => {
    storeState(omit(state, STORAGE_DENY_LIST));
  }, [state, storeState]);
  const api = useMemo(() => createApi(), []);
  const value = useMemo(() => {
    api.setContext(dispatch, state.session);

    return { api, dispatch, state };
  }, [api, state]);

  return <StoreContext.Provider {...props} value={value} />;
};

export { StoreProvider, useStore as default };