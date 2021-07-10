import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #691b77;
`;

export const CardContainer = styled.View`
  width: 80%;
  height: 80%;

  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 30px;

  margin-bottom: 10%;
`;

export const CardText = styled.Text`
  font-size: 22px;
  padding: 0 6px;
  text-align: center;
`;

export const ButtonPrevious = styled.TouchableOpacity`
  height: 7%;

  margin-top: 4%;
  background-color: gray;

  justify-content: center;
  align-items: center;

  padding: 0 3%;

  border-radius: 10px;
`;
export const Previous = styled.Text`
  color: #fff;
`;
