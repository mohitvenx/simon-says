import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './ResetButton.styles';
import { reset } from 'slices/gameSlice';

const ResetButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleSumbit = () => {
    dispatch(reset());
  };

  return <Button onClick={handleSumbit}>Reset</Button>;
};

export default ResetButton;
