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
  'https://hieumobile.com/wp-content/uploads/avatr-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatr-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatr-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatr-among-us-9.jpg',
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
