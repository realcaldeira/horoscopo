import React from 'react';
import { Container, CardContainer, CardText } from './styles';
import { useRoute } from '@react-navigation/native';

export function Description({ data, ...rest }) {
  const route = useRoute();
  const { dados } = route.params;

  return (
    <Container {...rest}>
      <CardContainer>
        <CardText>Teste</CardText>
      </CardContainer>
    </Container>
  );
}
