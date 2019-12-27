import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Text style={{color: '#fff'}}>Tela home</Text>
      </Container>
    </>
  );
}
