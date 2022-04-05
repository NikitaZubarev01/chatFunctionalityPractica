import React from 'react';
import {StyleSheet } from 'react-native';
import { View,  } from 'react-native';
import { Text, Divider, Button, } from 'react-native-elements';

import { gStyle } from '../styles/style';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import ChatListItem from './ChatListItem';
import chatRooms from '../data/ChatRooms'; 

export default function ChatMenu({navigation}){
    return (
      <View>

        <View style={{ flexDirection:'row', paddingHorizontal: 10, backgroundColor: 'white',}}> 

           <Text style={gStyle.title}>Чаты</Text>

           <Button 
              buttonStyle={{ width: 50,
                height: 50, 
                backgroundColor: 'white', 
              }}
              icon={
                <Feather 
                 name="search" 
                 size={30} 
                 color="black" 
                />
              }
              onPress={() => navigation.navigate('SearchScreen')}
            />

          <Button
            buttonStyle={{ 
              width: 50,
              height: 50, 
              backgroundColor: 'white', 
            }}
            icon={
              <FontAwesome 
                name="pencil-square-o" 
                size={30} 
                color="black" />
            }
            onPress={() => navigation.navigate('AddChatScreen')}
          />

        </View>

        <View>
        <Divider
          style={{ width: "100%", }}
          color="gray"
          width={2}
          orientation="horizontal"
        />
        </View>

        <View style = { styles.container}>
          <ChatListItem chatRoom = {chatRooms[0]} />
        </View>
      
      
      </View> 
    );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100
  }
});