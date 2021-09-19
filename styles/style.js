import { StyleSheet, Platform, StatusBar } from 'react-native';

export const gStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    //background:{
     //   flex: 1,
      //  color: 'red',
   // },
    title:{
        fontSize:20,
        color: 'black',
        fontWeight: 'bold',
       // top: 15,
        left: 10,
    },
      text:{
          fontSize:14,
          color: 'black',
    },

})