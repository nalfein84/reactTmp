import React from 'react';
import { SignInPage } from './src/Pages/SignInPage';
import { MainPage } from './src/Pages/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpPage } from './src/Pages/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="SignIn" component={SignInPage}/>
                <Stack.Screen name="Home" component={MainPage}/>
                <Stack.Screen name="SignUp" component={SignUpPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
