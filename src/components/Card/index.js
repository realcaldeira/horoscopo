import React from 'react';
import { Container, CardContainer, CardText, ImagemHoroscopo } from './styles';

import Horoscopo from '../../assets/horoscopo.png';

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <CardContainer>
        <CardText>{data}</CardText>
        <ImagemHoroscopo source={Horoscopo} />
      </CardContainer>
    </Container>
  );
}
