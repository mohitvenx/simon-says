import styled from 'styled-components';

export const Button = styled.div`
  width: 100%;
  font-size: 11.2rem;
  line-height: 10rem;
  padding: 1rem;
  border: 5px solid #ffffff;
  border-radius: 5px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 326px;
`;

export const StepsHeader = styled.label`
  font-size: 5.2rem;
  line-height: 5.6rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

export const Select = styled.select`
  display: block;
  background: #000;
  border: 3px solid #ffffff;
  width: 100%;
  height: 50px;
  color: #ffffff;
  font-size: 4rem;
  text-align: center;
`;
