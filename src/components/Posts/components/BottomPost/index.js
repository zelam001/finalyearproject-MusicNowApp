import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const BottomPost = ({numOfLikes: likesCountProp, caption, posted}) => {

    const [isLiked, setIsLike] = useState(false);
    const [numOfLikes, setLikesCount] = useState(false);
    

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikesCount(numOfLikes + amount);

        setIsLike(!isLiked);
    }

    useEffect( () => {
        setLikesCount(likesCountProp)

    }, [])

    const [MusicPress, setIsMusic] = useState(false);
    const onMusicPressed = () => {
        setIsMusic(!MusicPress);
    }



    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <ADIcon name="like1" size={27} color={'#ede12f'} />
                            : <ADIcon name="like2" size={27} color={'#545454'} />
                        
                        }
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comments" size={26} color={'#545454'} />
                    <FeatherIcon name="share" size={26} color={'#545454'} />
                </View>
                <TouchableWithoutFeedback onPress={onMusicPressed}>
                    {MusicPress ?
                        <Ionicons name="ios-musical-notes" size={30} color={'#ede12f'} />
                        : <Ionicons name="ios-musical-notes-outline" size={30} color={'#545454'} />

                    }


                </TouchableWithoutFeedback>
            </View>


            
            <Text style={styles.likes}>{numOfLikes} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.posted}>{posted}</Text>
        </View>

    )


}

export default BottomPost;