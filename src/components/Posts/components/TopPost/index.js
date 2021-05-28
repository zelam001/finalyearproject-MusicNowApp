import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ProfilePic from '../../../ProfilePic';
import styles from './styles';

const TopPost = ({imageUri, name}) => (
    
    <View style={styles.container}>
        <View style={styles.left}>
            <ProfilePic uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text> 
        </View>
        <View style={styles.right}>
            <Icon name="dots-three-vertical" size={16} />
        </View>
    </View>


)

export default TopPost;