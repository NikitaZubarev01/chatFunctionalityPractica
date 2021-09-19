import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { gStyle } from './styles/style';

import ChatMenu from './components/ChatMenu';

export default function App() {
  return (
    <View style={gStyle.AndroidSafeArea}>
      <ChatMenu/>
    </View>
  );
}


