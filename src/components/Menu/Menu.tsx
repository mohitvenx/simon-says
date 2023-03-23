import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'slices/gameSlice';
import { selectTotalRounds } from 'slices/gameSlice';
import { Button, Container } from './Menu.styles';
import CustomSelect from './CustomSelect';
import { randomArray } from 'helpers/randomArray';

const Menu: React.FC = () => {
  const totalRounds = useSelector(selectTotalRounds);
  const [selectedStep, setSelectedStep] = useState(totalRounds);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStep(Number(e.target.value));
  };

  const handleSumbit = () => {
    dispatch(start({ totalRounds: selectedStep, randomArray: randomArray(selectedStep, 16) }));
  };

  return (
    <Container>
      <Button onClick={handleSumbit}>Start</Button>
      <CustomSelect onChange={handleChange} draft={selectedStep} count={10} />
    </Container>
  );
};

export default Menu;
