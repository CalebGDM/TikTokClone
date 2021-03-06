import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: Dimensions.get('window').height - 50,
        
    },
    videoButton:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
    },
    video:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer:{
        height: '100%',
        justifyContent: 'flex-end',
    },    
    bottomContainer:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    handle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 7,
    },
    description:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '100',
        marginBottom: 10,
    },
    songRow:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName:{
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
        
    },
    songImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 7,
        borderColor: '#252525',
    },

    rightContainer:{
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    profilePicture:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    iconContainer:{
        alignItems: 'center',
    },
    label:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    
});

export default styles;