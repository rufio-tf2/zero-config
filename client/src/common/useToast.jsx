import { useMemo } from 'react';

import { addToastMessage, removeToastMessage } from './store';
import useStore from './useStore';

function useToast() {
  const { dispatch, state } = useStore();

  return useMemo(
    () => ({
      hideMessage() {
        dispatch(removeToastMessage());
      },
      message: state.toast,
      showMessage(message) {
        dispatch(addToastMessage(message));
      },
    }),
    [dispatch, state.toast],
  );
}

export default useToast;
