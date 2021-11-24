import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import theme from '../styles/theme';
import { Container } from './styles';

//extendo as propriedades do borderlessButton que é o meu "Container"
//para utilizá-las caso necessário no componente onde este botão for importado
interface Props extends BorderlessButtonProps {
  color: string;
}

export function BackButton({ color, ...rest }: Props) {
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
