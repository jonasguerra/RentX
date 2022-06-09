import React from "react";
import { StatusBar } from "react-native";
import { CarData } from "../../components/Car";
import { CarDetails } from "../../components/CarDetails";
import { Container } from "./styles";

export function Home() {
  const carData: CarData = {
    brand: "Audi",
    name: "RS 5 COUPE",
    rent: {
      period: "Daily",
      price: 120.0,
    },
    thumbnail:
      "https://www.audi.ca/content/dam/nemo/ca/Models/rs7/MY2020/overview-page/compressed/844x476_rs7-min.png",
  };

  //com o translucent, o header começa "embaixo" da status bar
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/*<Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />*/}
      <CarDetails />
    </Container>
  );
}
