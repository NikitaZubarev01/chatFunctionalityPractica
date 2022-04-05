import { StyleSheet, Platform, StatusBar } from 'react-native';

export const gStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
    title:{
        fontSize:26,
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        
    },

    text:{
        fontSize:14,
        color: 'black',
    },
})