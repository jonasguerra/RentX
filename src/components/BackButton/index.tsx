import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container } from "./styles";

//extendo as propriedades do borderlessButton que é o meu "Container"
//para utilizá-las caso necessário no componente onde este botão for importado
interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcon
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
