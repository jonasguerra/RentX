import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car, CarData } from '../../components/Car';
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
} from './styles';

export function Home() {
  const carData: CarData = {
    brand: 'Audi',
    name: 'RS 5 COUPE',
    rent: {
      period: 'Daily',
      price: 120.0,
    },
    thumbnail:
      'https://th.bing.com/th/id/OIP.CIf5vTpXc9cU0d8l2QcmIgHaEL?pid=ImgDet&rs=1',
  };

  //com o translucent, o header começa "embaixo" da status bar
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
