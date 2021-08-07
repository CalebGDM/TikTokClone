import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'

// AWS amplify setup
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import { withAuthenticator} from 'aws-amplify-react-native'
import { Auth, API, graphqlOperation} from 'aws-amplify'

import { createUser} from './src/graphql/mutations'
import { getUser} from './src/graphql/queries'

import Home from './src/screens/home'
import RootNavigation from './src/navigation'

const randomImages = [
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
}
const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      
      if (!userInfo){
        return;
      }

      const getUserResponse = await API.graphql(
        graphqlOperation(
          getUser,
          {id: userInfo.attributes.sub}
          )
      );

      if (getUserResponse.data.getUser) {
        console.log('ya existe ')
        return;
      }

      const newUser ={
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage()
      };
      
      await API.graphql(
        graphqlOperation(
          createUser,
          {input: newUser}
        )
      )
    };

    fetchUser();
  }, [])

  
  
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  }
});
