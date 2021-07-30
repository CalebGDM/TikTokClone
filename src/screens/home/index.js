// React & React Native 
import React, { useEffect, useState } from 'react'
import { View, FlatList, Dimensions } from 'react-native'

// AWS  API
import { API, graphqlOperation}from 'aws-amplify'

// Post Component
import Post from '../../components/post'

// Data
import { listPosts} from '../../graphql/queries'

// Home Component
const Home = () => { 

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await API.graphql(graphqlOperation(listPosts))
                setPosts(response.data.listPosts.items)
            }
            catch (e) {
                console.error(e)
            }
        };

        fetchPost()
        
    }, [])

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
