import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TextInput, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import ProfilePic from '../../components/ProfilePic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { API, graphqlOperation } from 'aws-amplify';
import { listStorys } from '../../graphql/queries';

const StoryPage = () => { 
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);

    const [stories, setStories] = useState([]); 

    useEffect( () => {
        fetchStories(); 
        setActiveStoryIndex(0);
    }, [] );

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys));
            console.log(storiesData);
            setStories(storiesData.data.listStorys.items);

        } catch (e) {
            console.log('error fetching stories');
            console.log(e);
        }
    }

    const handleNextStory = () => {
        if (activeStoryIndex >= stories.length - 1) {
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
        
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }

    }



    // console.log("userStories");
    // console.log(userStories);

    if (!stories || stories.length === 0) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    const activeStory = stories[activeStoryIndex];
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri: activeStory.image}} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePic uri={activeStory.user.image} size={50 } />
                        <Text style={styles.userName}>{stories.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
                    </View>
                    <View style={styles.bottomScreen}>  
                        <View style={styles.cameraButton}>
                            <Ionicons name="ios-camera-outline" size={35} color={'white'}/> 
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                             style={styles.textInput}
                             editable 
                             placeholder="Send Message"
                             placeholderTextColor="white"
                             /> 
                        </View>
                        <View style={styles.sendButton}>
                            <Feather name="send" size={30} color={'white'}/>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )

}

export default StoryPage;