import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'

import Post from '../../components/post'

import posts from '../../assets/data/posts'


const Home = () => { 
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item, index}) => <Post post={item} index={index}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height-50}
                snapToAlignment={'start'}
                decelerationRate={'fast'}                       
                
            />
        </View>
    )
}

export default Home
