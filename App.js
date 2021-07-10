import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { AppStackRoutes } from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={false} />
      <AppStackRoutes />
    </NavigationContainer>
  );
}
