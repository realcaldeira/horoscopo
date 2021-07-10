import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  margin: 5px 0;
`;

export const CardContainer = styled.View`
  width: 326px;
  height: 122px;

  padding: 0 55px;
  background-color: #691b77;

  justify-content: center;
  align-items: center;

  border-radius: 25px;

  flex-direction: row;
`;

export const CardText = styled.Text`
  width: 90%;
  height: 30%;
  color: white;

  font-size: 28px;
`;

export const ImagemHoroscopo = styled.Image`
  width: 66px;
  height: 66px;
`;
