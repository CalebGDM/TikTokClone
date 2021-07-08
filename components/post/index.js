import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Video, AVPlaybackStatus } from "expo-av";
import styles from './style'

const Post = () => {
    const video = React.useRef(null);

    const [paused, setPaused] = useState({})

   
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() =>{
                    paused.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    
                }
          }
            >
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4',
                }}
                resizeMode={'cover'}
                onError={(e) => console.log(e)}
                isLooping
                onPlaybackStatusUpdate={paused => setPaused(() => paused)}
                onLoad={() => video.current.playAsync()}
               
            />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post
