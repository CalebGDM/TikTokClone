import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles  from './style.js'
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify'
import {useRoute, useNavigation} from '@react-navigation/native'
import { v4 as uuid} from 'uuid'

import { createPost } from '../../graphql/mutations'

const CreatePost = () => {

    const [description, setDescription] = useState("")

    const navigation = useNavigation();
    const route = useRoute();

    const [videoKey, setVideoKey] = useState(null)

    const uploadToStorage = async (imagePath) => {
        try{
            const response = await fetch(imagePath);

            const blob = await response.blob();
            
            const filename = `${uuid()}.mp4`; 
            const s3Response = await Storage.put(filename, blob)
            console.warn('tranca palanca')
            setVideoKey(s3Response.key)

            

        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        uploadToStorage(route.params.videoUri);
        
        
    }, [])

    const onPublish = async () => {
        if(!videoKey){
            console.warn('el video no se ha subido')
            return;
        }
        
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const newPost = {
                videoUri: videoKey,
                description: description,
                userID: userInfo.attributes.sub,
                songID: '8b877a4a-6acd-486b-8499-181f925ce0dd',
            };
            const response = await API.graphql(
                graphqlOperation(createPost, {input: newPost}),
            );
            navigation.navigate('Home', {screen: 'Home'})
            
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
            value={description}
            onChangeText={setDescription}
            style={styles.textInput}
            numberOfLines={5}
            placeholder={'Description'}
            />
            
            <TouchableOpacity
                
                onPress={onPublish}
            >   
                <View style={styles.button}>
                    <Text style={styles.buttonText}>publicar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CreatePost
