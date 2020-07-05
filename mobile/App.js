import React from 'react';

import { StatusBar } from 'react-native'

import { AppLoading } from 'expo'

import { Route } from './src/routes'
import { AuthContextProvider } from './src/context/AuthContext';

import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthContextProvider>
      <StatusBar color='#fff' backgroundColor='#222' />
      <Route />
    </AuthContextProvider>      
  )
}

