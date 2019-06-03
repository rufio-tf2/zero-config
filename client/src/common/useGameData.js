import path from 'path';
import { useMemo } from 'react';

import { clearGame, clearGamePath, setGame, setGamePath } from './store';
import useStore from './useStore';
import { get } from './util';

const isValidSetup = game => !!game.gamePath;

function useGameData() {
  const { dispatch, state } = useStore();

  const game = useMemo(() => get(state, ['game'], {}), [state]);

  const customFolderPath = useMemo(() => {
    const gamePath = get(game, ['path'], '');
    return path.join(gamePath, 'tf/custom');
  }, [game]);

  const hasValidSetup = useMemo(() => isValidSetup(game), [game]);

  return useMemo(
    () => ({
      clearGame() {
        dispatch(clearGame());
      },
      clearGamePath() {
        dispatch(clearGamePath());
      },
      customFolderPath,
      game,
      hasValidSetup,
      setGame(gameData) {
        dispatch(setGame(gameData));
      },
      setGamePath(path) {
        dispatch(setGamePath(path));
      },
    }),
    [customFolderPath, dispatch, game, hasValidSetup],
  );
}

export default useGameData;
