import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import reducer, { initialState } from './store';
import useElectronSettings from './useElectronSettings';
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

/* eslint-disable */
const StoreProvider = props => {
  const [storedState, storeState] = useElectronSettings('state', initialState);
  // Default any properties omitted from the session-storage due to the deny-list.
  const reducerState = {
    ...initialState,
    // Remove any stale storage of keys on the deny-list.
    // ...omit(storedState, STORAGE_DENY_LIST),
  };

  const [state, dispatch] = useReducer(
    withBatchedActions(reducer),
    reducerState,
  );

  useEffect(() => {
    storeState(omit(state, STORAGE_DENY_LIST));
  }, [state, storeState]);

  const value = useMemo(() => {
    return { dispatch, state };
  }, [state]);

  return <StoreContext.Provider {...props} value={value} />;
};

export { StoreProvider, useStore as default };
