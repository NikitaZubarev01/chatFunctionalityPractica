import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native-elements';


import ChatMenu from './components/ChatMenu';

export default function App() {
  return (
    <View>
      <ChatMenu/>
    </View>
  );
}


