import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-top: 15px;
`;

export const Dados = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Buscar = styled.TouchableOpacity``;

export const BuscarText = styled.Text``;
