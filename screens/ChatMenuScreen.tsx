import React from 'react';
import {StyleSheet } from 'react-native';
import { View,  } from 'react-native';
import { Text, Divider, Button, } from 'react-native-elements';

import { gStyle } from '../styles/style2';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms'; 
import { FlatList } from 'react-native-gesture-handler';

export default function ChatMenu({navigation}){
    return (
      <View>

        <View style={{ flexDirection:'row', paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 20}}> 

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
          <FlatList 
          style = {{width:'100%',}}
          data={chatRooms} 
          renderItem={({ item }) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
          />
        </View>
      
      
      </View> 
    );  
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    
  }
});