import { useCallback, useEffect, useState } from 'react';

function useAsyncCall(call, deps, args) {
  const [callState, setCallState] = useState({
    error: null,
    loading: true,
    value: null,
  });
  // Include the current now to allow for the guard to be broken on a refresh call.
  const [callArgs, setCallArgs] = useState([...args, Date.now()]);

  const callback = useCallback(call, deps);

  useEffect(() => {
    let isValid = true;

    callback(...callArgs.slice(0, -1)).then(
      value => {
        if (isValid) {
          setCallState({ error: null, loading: false, value });
        }
      },
      error => {
        if (isValid) {
          setCallState({ error, loading: false, value: null });
        }
      },
    );

    return () => {
      isValid = false;
    };
  }, [callback, callArgs]);

  const fetch = (...nextArgs) => {
    // Pass the current now to break the useEffect guard.
    setCallArgs([...nextArgs, Date.now()]);
  };

  const updateValue = updater => {
    setCallState({ ...callState, value: updater(callState.value) });
  };

  return {
    error: callState.error,
    fetch,
    loading: callState.loading,
    updateValue,
    value: callState.value,
  };
}

export default useAsyncCall;
