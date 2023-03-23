import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalRounds } from 'slices/gameSlice';
import { ProgressGrid, ProgressItem } from './ProgressBar.styles';

interface IProps {
  readonly currentRound: number;
}

const ProgressBar: React.FC<IProps> = ({ currentRound }) => {
  const totalRounds = useSelector(selectTotalRounds);

  return (
    <ProgressGrid>
      {[...Array(totalRounds)].map((x, index) => (
        <ProgressItem active={currentRound < index + 1} key={'progressItem' + index} />
      ))}
    </ProgressGrid>
  );
};

export default ProgressBar;
