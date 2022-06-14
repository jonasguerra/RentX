import React from "react";
import accelerationSvg from "../../assets/acceleration.svg";
import exchangeSvg from "../../assets/exchange.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import peopleSvg from "../../assets/people.svg";
import speedSvg from "../../assets/speed.svg";
import { Accessory } from "../Accessory";
import { BackButton } from "../BackButton";
import { Button } from "../Button";
import { ImageSlider } from "../ImageSlider";
import {
  About,
  AccessoriesWrapper,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.audi.ca/content/dam/nemo/ca/Models/rs7/MY2020/overview-page/compressed/844x476_rs7-min.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Hurracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <AccessoriesWrapper>
          <Accessory name="300Km/h" icon={speedSvg} />
          <Accessory name="3.25" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </AccessoriesWrapper>

        <About>
          Sculptured and sensual, the Huracán’s design is based on the spiky
          hexagonal forms of the carbon atom, while the seamless roof profile is
          an unmistakable mark of the Lamborghini DNA.
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
