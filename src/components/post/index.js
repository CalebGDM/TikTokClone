import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity  } from 'react-native'
import { Video, AVPlaybackStatus } from "expo-av";
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const Post = (props) => {
    const [post, setPost] = useState(props.post)
    const [isLiked, setIsLiked] = useState(false)
    //const { post } = props;

    const video = React.useRef(null);

    const [paused, setPaused] = useState(false)
    

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1  ;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        })
        setIsLiked(!isLiked)
    }

    

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                style={styles.videoButton}
                onPress={() => {
                    paused.isPlaying ? video.current.pauseAsync() : video.current.playAsync()

                    }
                }
            >
                <View>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: post.videoUri,
                        }}
                        resizeMode={'cover'}
                        onError={(e) => console.log(e)}
                        isLooping
                        onPlaybackStatusUpdate={paused => setPaused(() => paused)}
                        
                        //onLoad={() => video.current.playAsync()}
                        
                        

                    />
                

                <View style={styles.uiContainer}>
                    <View style={styles.rightContainer}>

                        <Image
                            style={styles.profilePicture}
                            source={{ uri: post.user.imageUri }}
                        />


                        <TouchableOpacity 
                            style={styles.iconContainer}
                            onPress={onLikePress}
                            >
                            <AntDesign name='heart' size={40} color={isLiked ? 'red' : 'white'} />
                            <Text style={styles.label}>{post.likes}</Text>
                        </TouchableOpacity >

                        <View style={styles.iconContainer}>
                            <FontAwesome name="commenting" size={40} color="white" />
                            <Text style={styles.label}>{post.comments}</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Fontisto name="share-a" size={35} color="white" />
                            <Text style={styles.label}>{post.shares}</Text>
                        </View>

                    </View>

                    <View style={styles.bottomContainer}>
                        <View>
                            <Text style={styles.handle}>@{post.user.username}</Text>
                            <Text style={styles.description}>{post.description}</Text>
                            <View style={styles.songRow}>
                                <Entypo name="beamed-note" size={24} color="white" />
                                <Text style={styles.songName}>{post.song.songName}</Text>
                            </View>
                        </View>

                        <Image
                            style={styles.songImg}
                            source={{ uri: post.song.imageUri }}
                        />
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post
