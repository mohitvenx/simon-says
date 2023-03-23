import React from 'react';
import { Container, Logo, Header } from './Wrapper.styles';
import logo from '../../images/logo.svg';

const Wrapper: React.FC = ({ children }) => {
  return (
    <Container>
      <Logo src={logo} />
      <Header>Simon Says</Header>

      {children}
    </Container>
  );
};

export default Wrapper;
