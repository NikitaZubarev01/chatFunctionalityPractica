import React from 'react';
import { Text,View  } from 'react-native-elements';

export default function ChatMenu(){
    return (
        <View style={styles.container}>
           <Text style={styles.title}>Главная страница</Text>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    text: {
      color: 'black',
      padding: 20,
    },
    title:{
      fontSize:20,
      color: 'black',
      fontWeight: 'bold',
    }
  });