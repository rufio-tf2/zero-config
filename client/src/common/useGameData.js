import { useMemo } from 'react';

import { clearGame, clearGamePath, setGame, setGamePath } from './store';
import useStore from './useStore';
import { get } from './util';

const isValidSetup = game => !!game.gamePath;

function useGameData() {
  const { dispatch, state } = useStore();

  const game = useMemo(() => get(state, ['game'], {}), [state]);
  const hasValidSetup = useMemo(() => isValidSetup(game), [game]);

  return useMemo(
    () => ({
      clearGame() {
        dispatch(clearGame());
      },
      clearGamePath() {
        dispatch(clearGamePath());
      },
      game,
      hasValidSetup,
      setGame(gameData) {
        dispatch(setGame(gameData));
      },
      setGamePath(path) {
        dispatch(setGamePath(path));
      },
    }),
    [dispatch, game, hasValidSetup],
  );
}

export default useGameData;
