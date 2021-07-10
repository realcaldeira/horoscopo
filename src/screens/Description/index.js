import React from 'react';
import {
  Container,
  CardContainer,
  CardText,
  CardTitle,
  ButtonPrevious,
  Previous,
  ImagemHoroscopo,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import Horoscopo from '../../assets/horoscopo.png';

export function Description({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  function handlePreview() {
    navigation.goBack();
  }

  return (
    <Container>
      <CardContainer>
        <ImagemHoroscopo source={Horoscopo} />
        <CardTitle>{data.sign}</CardTitle>
        <CardText>{data.description}</CardText>
      </CardContainer>
      <ButtonPrevious onPress={handlePreview}>
        <Previous> Retornar para a página inicial</Previous>
      </ButtonPrevious>
    </Container>
  );
}
