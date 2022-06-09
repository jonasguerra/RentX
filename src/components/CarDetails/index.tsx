import React from "react";
import { BackButton } from "../BackButton";
import { ImageSlider } from "../ImageSlider";
import {
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
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
            <Period></Period>
            <Price></Price>
          </Rent>
        </Details>
      </Content>
    </Container>
  );
}
