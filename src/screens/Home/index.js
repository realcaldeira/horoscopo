import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, Route } from '@react-navigation/native';

import { Container, Buscar, BuscarText, Dados } from './styles';
import { api } from '../../services/api';

import { Card } from '../../components/Card';

export function Home() {
  const navigation = useNavigation();

  const [horoscopo, setHoroscopo] = useState({});
  const [horoscopoFinal, setHoroscopoFinal] = useState({});

  async function BuscaHoroscopo() {
    const response = await api.get('test?dt=2021-07-09');

    setHoroscopo(response);

    console.log('Funcionou');
  }

  function Array() {
    console.log('**************');
    const result = horoscopo.data.result[0].horoscopes;
    const resultado = result.map((item) => item);
    setHoroscopoFinal(resultado);
    console.log(resultado);
  }

  function handleChange() {
    /* navigation.navigate('Description');*/
    Alert.alert('TESTE');
  }

  return (
    <Container>
      <Dados
        data={horoscopoFinal}
        keyExtractor={(item) => item.sign}
        renderItem={({ item }) => (
          <Card data={item.sign} onPress={handleChange} />
        )}
      />

      <Buscar onPress={BuscaHoroscopo}>
        <BuscarText>Buscar</BuscarText>
      </Buscar>
      <Buscar onPress={Array}>
        <BuscarText>Buscar Array</BuscarText>
      </Buscar>
    </Container>
  );
}
