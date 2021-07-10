import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';

import { Container, Dados } from './styles';
import { api } from '../../services/api';

import { Card } from '../../components/Card';

export function Home() {
  const navigation = useNavigation();

  const [horoscopo, setHoroscopo] = useState({});

  async function BuscaHoroscopo() {
    var formattedDate = format(new Date(), 'yyyy-MM-dd');

    const response = await api.get(`test?dt=${formattedDate}`);

    const result = response.data.result[0].horoscopes;
    const resultado = result.map((item) => item);

    setHoroscopo(resultado);
  }

  function handleChange(data) {
    navigation.navigate('Description', { data });
  }

  useEffect(() => {
    BuscaHoroscopo();
  }, []);

  return (
    <Container>
      <Dados
        data={horoscopo}
        keyExtractor={(item) => item.sign}
        renderItem={({ item }) => (
          <Card data={item.sign} onPress={() => handleChange(item)} />
        )}
      />
    </Container>
  );
}
