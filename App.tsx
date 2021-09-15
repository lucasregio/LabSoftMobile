import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import { FredokaOne_400Regular, useFonts } from '@expo-google-fonts/fredoka-one';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';

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
      <Routes/>
    </>
  );
}
