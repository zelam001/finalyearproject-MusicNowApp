import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfilePic from '../ProfilePic';
import styles from './styles';

const Story = (props) => {

    const {
        story: {
            user: {
                id,
                image,
                name
            }
        }
    } = props;

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Story", { userId: id });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePic uri={image} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story;