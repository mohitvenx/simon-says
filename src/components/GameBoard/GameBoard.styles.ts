import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  aligin-items: center;
`;

export const Wrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
