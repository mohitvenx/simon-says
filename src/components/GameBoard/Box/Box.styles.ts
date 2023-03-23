import styled from 'styled-components';

export const BoxContainer = styled.div`
  max-width: 280px;
  width: 100%;
  background: #a4a3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 30px;
  box-shadow: 0px 0px 10px 14px rgba(0, 0, 0, 0.75);
  margin-top: 30px;
  @media (max-width: 800px) {
    margin-top: 2px;
    height: 320px;
    box-shadow: 0px 0px;
  }
`;

export const ScreenGrid = styled.div`
  padding: 3px;
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px;
  gap: 3px 3px;
  grid-template-areas:
    '. . . . '
    '. . . . '
    '. . . . '
    '. . . . ';
`;

export const ScreenItem = styled.div`
  background: #000;
  width: 50px;
  height: 50px;
`;

export const KeyboardGrid = styled(ScreenGrid)<{ active: boolean | undefined; isFailed: boolean }>`
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
  cursor: ${(props) => (props.active ? 'pointer' : 'not-allowed')};
  background: transparent;
  gap: 5px 5px;
  position: relative;
  &:after {
    display: ${(props) => (props.isFailed ? 'block' : 'none')};
    cursor: ${(props) => (props.isFailed ? 'not-allowed' : 'pointer')};
    content: '';
    position: absolute;
    background-color: rgba(255, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

export const KeyboardItem = styled.div<{ isFailed: boolean }>`
  background-image: radial-gradient(circle farthest-corner at 10% 20%, gray 0%, rgb(5, 5, 5) 82.8%);
  border: 1px solid black;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.75);

  width: 50px;
  height: 50px;
  &:active,
  &:focus {
    transform: scale(1.1);
    background: blue;
  }
`;

export const WinnerWrapper = styled.div`
  background: #000;
  border: 3px solid #ffffff;
  padding: 5rem;
  margin-top: 2rem;
`;

export const WinnerHeader = styled.p`
  font-size: 10rem;
  font-weight: bold;
  text-align: center;
`;
