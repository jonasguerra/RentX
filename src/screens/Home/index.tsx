import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Container, Header } from './styles';

export function Home() {
  //com o translucent, o header começa "embaixo" da status bar
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Logo width={120} height={120} />
      </Header>
    </Container>
  );
}
