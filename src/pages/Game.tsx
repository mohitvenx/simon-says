import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from 'components/Wrapper/Wrapper';
import { selectIsLaunched } from 'slices/gameSlice';
import GameBoard from 'components/GameBoard/GameBoard';

const Menu = lazy(() => import('components/Menu/Menu'));

const Game: React.FC = () => {
  const isLaunched = useSelector(selectIsLaunched);
  return (
    <Wrapper>
      <Suspense fallback={<h1>Game loading ... </h1>}>
        {isLaunched ? <GameBoard /> : <Menu />}
      </Suspense>
    </Wrapper>
  );
};

export default Game;
