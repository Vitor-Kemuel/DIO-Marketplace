import React from "react";
import { Image } from 'react-native';

import foto from '../../assets/logo.png';

import { Container } from './styles';

const  Header  = () =>{
  return(
    <Container>
      <Image source={foto} />
    </Container>
  )
}

export default Header;
