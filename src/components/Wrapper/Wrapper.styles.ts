import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 338px;
  height: 97px;
  @media (max-width: 800px) {
    width: 150px;
    height: 50px;
  }
`;

export const Header = styled.h1`
  font-size: 7.2rem;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const FigureGreen = styled.img`
  position: absolute;
`;
