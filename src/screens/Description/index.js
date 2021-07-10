import React from 'react';
import { Container, CardContainer, CardText, CardTitle } from './styles';

export function Description({ route }) {
  const { data } = route.params;
  return (
    <Container>
      <CardContainer>
        <CardTitle>{data.sign}</CardTitle>
        <CardText>{data.description}</CardText>
      </CardContainer>
    </Container>
  );
}
