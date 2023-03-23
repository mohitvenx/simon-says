import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentRound,
  selectRandomArray,
  selectUserArray,
  selectIsFailed,
  setTurn,
  userClick,
  success,
  fail,
  resetFailed,
  selectIsUserTurn,
} from 'slices/gameSlice';
import { compareArray } from 'helpers/compareArray';
import { delay } from 'lodash';

const useKeyboard = () => {
  const dispatch = useDispatch();
  const userArray = useSelector(selectUserArray);
  const randomArray = useSelector(selectRandomArray);
  const isUserTurn = useSelector(selectIsUserTurn);
  const currentRound = useSelector(selectCurrentRound);
  const isFailed = useSelector(selectIsFailed);

  useEffect(() => {
    delay(() => dispatch(resetFailed()), 1500);
  }, [isFailed]);

  useEffect(() => {
    if (userArray.length === 0) return;
    const isValid = compareArray(userArray, randomArray);
    isValid || dispatch(fail());

    dispatch(setTurn(true));

    if (userArray.length < currentRound) return;
    isValid && dispatch(success());
  }, [userArray]);

  const handleClick = (i: number, e: unknown) => {
    dispatch(userClick(i));
    dispatch(setTurn(false));
  };

  return { currentRound, isUserTurn, handleClick, isFailed };
};

export default useKeyboard;
