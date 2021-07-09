import React, {useCallback, useState} from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'

import Post from '../../components/post'

import posts from '../../assets/data/posts'


const Home = () => {
    

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                
            />
        </View>
    )
}

export default Home
