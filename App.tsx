import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import { FredokaOne_400Regular, useFonts } from '@expo-google-fonts/fredoka-one';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { HeaderProvider } from './src/contexts/header';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
    Nunito_400Regular
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent/>
      <NavigationContainer>
        <AuthProvider>
          <HeaderProvider>
            <Routes/>
          </HeaderProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
