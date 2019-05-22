import electronSettings from 'electron-settings';
import { useEffect, useState } from 'react';

const useElectronSettings = (key, initialValue, raw) => {
  const [state, setState] = useState(() => {
    try {
      const sessionStorageValue = electronSettings.get(key);
      if (typeof sessionStorageValue !== 'string') {
        electronSettings.set(
          key,
          raw ? String(initialValue) : JSON.stringify(initialValue),
        );
        return initialValue;
      } else {
        return raw
          ? sessionStorageValue
          : JSON.parse(sessionStorageValue || 'null');
      }
    } catch {
      // If user is in private mode or has storage restriction
      // sessionStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state);
      electronSettings.set(key, serializedState);
    } catch {
      // If user is in private mode or has storage restriction
      // sessionStorage can throw. Also JSON.stringify can throw.
    }
  });

  return [state, setState];
};

export default useElectronSettings;
