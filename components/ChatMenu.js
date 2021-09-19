import React from 'react';
import { View,  } from 'react-native';
import { Text, Divider, Button, } from 'react-native-elements';

import { gStyle } from '../styles/style';
import { Feather } from '@expo/vector-icons';

export default function ChatMenu(){
    return (
      <View>

        <View> 
           <Text style={gStyle.title}>Чаты</Text>
           <Button
        buttonStyle={{ width: 40,height: 40, backgroundColor: 'red', left: 300, top:-20 }}
          icon={
            <Feather 
            name="search" 
            size={24} 
            color="black" />
          }
        />
        </View>

        

        <Divider
          style={{ width: "100%", margin: 7 }}
          color="gray"
          width={2}
          orientation="horizontal"
        />
        
        

      </View>


    );
}

//const styles = StyleSheet.create({
    
  //});