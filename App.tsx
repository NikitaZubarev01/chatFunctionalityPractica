import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { gStyle } from './styles/style2';

import Navigate from './navigation';

export default function App() {
  return (
    <View style = {gStyle.AndroidSafeArea}>
      <Navigate/>
    </View>
  );
}


