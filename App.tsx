import React, { useContext } from 'react';
import AppNavigation from './src/Navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './src/Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import linking from './src/Linking';
import { BG, Flex } from './src/Assets';
import { ThemeContext } from './src/Providers/ThemeProvider/ThemeProvider';
const App = () => {
  const theme = useContext(ThemeContext)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            flex: 1, ...BG(theme).primary
          }}
        >
          <SafeAreaView style={Flex.flex1} >
            <NavigationContainer linking={linking} >
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;