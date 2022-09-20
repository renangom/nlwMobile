import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Background } from './src/Components/Background';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter'
import { Loading } from './src/Components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar  barStyle="light-content" backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}




