import React from 'react';
import {StyleSheet } from 'react-native';
import { View,  } from 'react-native';
import { Text, Divider, Button, } from 'react-native-elements';

import { gStyle } from '../styles/style2'; 

import FriendsListItem from '../components/FriendsListItem';
import users from '../data/Users'; 
import { FlatList } from 'react-native-gesture-handler';

export default function Friends({navigation}){
    return (
      <View>
        <View style = { styles.container}>
          <FlatList 
          style = {{width:'100%',}}
          data={users} 
          renderItem={({ item }) => <FriendsListItem user={item} />}
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