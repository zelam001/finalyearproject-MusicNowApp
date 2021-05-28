import React from 'react';
import { View } from 'react-native';

import TopPost from './components/TopPost';
import ImagePost from './components/ImagePost';
import BottomPost from './components/BottomPost';

const Posts = ({ posts }) => (
    <View>
        <TopPost imageUri={posts.user.image} name={posts.user.name} />
        <ImagePost imageUri={posts.image} />
        <BottomPost
            numOfLikes={posts.likes}  
            caption={posts.caption} 
            posted={posts.createdAt}   
        />
        
    </View>



)

export default Posts;