import React from 'react';
import { BoxContainer, KeyboardGrid, KeyboardItem } from './Box.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import useKeyboard from 'hooks/useKeyboard';

const Keyboard: React.FC = () => {
  const { currentRound, isUserTurn, handleClick, isFailed } = useKeyboard();

  return (
    <BoxContainer>
      <ProgressBar currentRound={currentRound - 1}></ProgressBar>
      <KeyboardGrid isFailed={isFailed} active={isUserTurn}>
        {[...Array(16)].map((x, index) => (
          <KeyboardItem
            isFailed={isFailed}
            onClick={(e) => handleClick(index, e)}
            key={'keyboardItem' + index}
          />
        ))}
      </KeyboardGrid>
    </BoxContainer>
  );
};

export default Keyboard;
