import React from 'react';
import { BoxContainer, ScreenGrid, ScreenItem } from './Box.styles';
import ProgressBar from '../ProgressBar/ProgressBar';
import useAnimeScreen from 'hooks/useAnimeScreen';

const Screen: React.FC = () => {
  const { currentRound, screenRef } = useAnimeScreen();

  return (
    <BoxContainer>
      <ProgressBar currentRound={currentRound} />
      <ScreenGrid ref={screenRef}>
        {[...Array(16)].map((x, index) => (
          <ScreenItem key={'screenItem' + index} />
        ))}
      </ScreenGrid>
    </BoxContainer>
  );
};

export default Screen;
