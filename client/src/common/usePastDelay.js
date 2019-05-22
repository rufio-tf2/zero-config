import { useEffect, useState } from 'react';

function usePastDelay(active, delay = 200) {
  const [pastDelay, setPastDelay] = useState(false);
  useEffect(() => {
    if (active) {
      const timeout = setTimeout(() => {
        setPastDelay(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setPastDelay(false);
    }
  }, [active, delay]);

  return pastDelay;
}

export default usePastDelay;
