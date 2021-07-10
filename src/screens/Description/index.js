import React from 'react';
import { Container, CardContainer, CardText } from './styles';

export function Description({ route }) {
  const { data } = route.params;
  return (
    <Container>
      <CardContainer>
        <CardText>{data.description}</CardText>
      </CardContainer>
    </Container>
  );
}
