declare module '*.svg' {
  //com isso, passamos a utilizar o nosso SVG como um componente
  //tendo acesso a todas as suas propriedades
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
