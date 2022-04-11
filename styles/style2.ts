import { StyleSheet, Platform, StatusBar } from 'react-native';

export const gStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingTop: -100,

    },
    
})