import React from 'react';
import { SignInPage } from './src/Pages/SignInPage';
import { View } from 'react-native';
import { MainPage } from './src/Pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="SignIn" component={SignInPage}/>
              <Stack.Screen name="Home" component={MainPage}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
