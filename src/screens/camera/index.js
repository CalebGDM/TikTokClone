import React, { useState, useEffect , useRef} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'; 
import { Permissions } from 'expo';
import { useNavigation } from '@react-navigation/native'

import styles from './style'

const Camara = () => {

    // useState & Variables
    const [hasPermission, setHasPermission] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const camera = useRef()
    
   const navigation = useNavigation(); 

    // Permisos de la camara
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();            
            const { micStatus } = await Camera.requestMicrophonePermissionsAsync();
            setHasPermission(status  === 'granted');
            
            
        }       
        
        )(
            
        );
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Grabar
   
    const onRecord = async () => {
        if(isRecording){
            camera.current.stopRecording();
            
        }else{
            const data = await camera.current.recordAsync();            
            console.log(data)
            navigation.navigate('CreatePost', {videoUri: data.uri});
        }
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.preview}
                type={Camera.Constants.Type.back}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                ref={camera}
                >
                
            </Camera>
            <TouchableOpacity
                onPress={onRecord}
                style={
                   isRecording ? styles.buttonStop : styles.buttonRecord
                }                
            >

            </TouchableOpacity>
        </View>
    )
}

export default Camara
