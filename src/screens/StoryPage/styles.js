import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        height: '100%',

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: 'red',

    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }, 
    userName: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    postedTime: {
        marginLeft: 12,
        color: '#808080',
        fontWeight: '600',
        fontSize: 16,
    },
    bottomScreen: {
        flexDirection: 'row',
        marginBottom: 22,
        marginHorizontal: 10,
    },
    cameraButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1 ,
        borderColor: 'white',
        borderRadius: 50,
    }, 
    sendButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textInput: {
        height: '100%',
        color: 'white',
        fontSize: 16,
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        height: 50,
    }

})

export default styles;