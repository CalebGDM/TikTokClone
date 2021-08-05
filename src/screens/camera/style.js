import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
       flex: 1,
       flexDirection: 'column',
       backgroundColor: 'black',  
          
    },  
    
    preview:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    buttonRecord:{
        width: 50,
        height: 50,
        borderRadius:25,
        backgroundColor:'#ff4343',
        marginVertical: 10,
        alignSelf: 'center',   
    },

    buttonStop:{
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor:'#fff',
        marginVertical: 20,
        alignSelf: 'center',   
    },
    
});

export default styles;