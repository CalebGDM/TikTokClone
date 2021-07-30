import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'

// AWS amplify setup
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)


import Home from './src/screens/home'
import RootNavigation from './src/navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  }
});
