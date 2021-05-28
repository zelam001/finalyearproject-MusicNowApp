import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Posts from '../Posts';
import Stories from '../UserStories';
import { listPosts } from '../../graphql/queries';


// const data = [
//     {
//         id: '1',
//         user: {
//           imageUri: 'https://c.stocksy.com/a/P5eA00/z9/2537375.jpg',
//           name: 'Jade'
//         },
//         imageUri: 'https://images.genius.com/b37e9ec812dac4d8b6b8cbfb274dcf77.1000x1000x1.png',
//         caption: '21 Savage and Metro went crazy on this!! #SavageMode2',
//         numOfLikes: 1232,
//         posted: '10 minutes ago'
        
//     },
//     {
//         id: '2',
//         user: {
//           imageUri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos.jpg',
//           name: 'Wanda'
//         },
//         imageUri: 'https://media.pitchfork.com/photos/5e3dec51a42e4e000882e43c/1:1/w_600/Meet%20the%20Woo%20Vol.%202_Pop%20Smoke.jpg',
//         caption: 'RIP Pop Smoke #MTW2',
//         numOfLikes: 1252,
//         posted: '14 minutes ago'
        
//     },
//     {
//         id: '3',
//         user: {
//           imageUri: 'https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg',
//           name: 'Tom'
//         },
//         imageUri: 'https://media.pitchfork.com/photos/5e29cd9ee540c400084fdeb9/1:1/w_600/bigconspiracy.jpg',
//         caption: 'Definitely album of the year! #Husslababy',
//         numOfLikes: 1232,
//         posted: '20 minutes ago'
        
//     }

// ]


const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e.message);
    }
  }
  
  return (
    
    <FlatList 
      data = {posts}
      renderItem = {({item}) => <Posts posts={item} />}
      keyExtractor ={({id}) => id}
      ListHeaderComponent = {Stories}
     
     />
  )
}

export default Feed;