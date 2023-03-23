import React from 'react';

import ResetButton from './ResetButton/ResetButton';
import { Container, Wrapper } from './GameBoard.styles';
import { Screen, Keyboard, Winner } from './Box';
import useWin from 'hooks/useWin';

const Gameboard: React.FC = () => {
  const { isWin } = useWin();
  return (
    <Container>
      <ResetButton />
      <Wrapper>
        {isWin ? (
          <Winner />
        ) : (
          <>
            <Screen />
            <Keyboard />
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Gameboard;
