import { useSelector } from 'react-redux';
import { selectCurrentRound, selectTotalRounds } from 'slices/gameSlice';

const useWin = () => {
  const totalRounds = useSelector(selectTotalRounds);
  const currentRound = useSelector(selectCurrentRound);
  const isWin = currentRound > totalRounds;

  return { isWin };
};

export default useWin;
