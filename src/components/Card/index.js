import React from 'react';
import { Container, CardContainer, CardText } from './styles';

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <CardContainer>
        <CardText>{data}</CardText>
      </CardContainer>
    </Container>
  );
}
