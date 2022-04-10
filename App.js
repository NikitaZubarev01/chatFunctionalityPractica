import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { gStyle } from './styles/style2';

import NavigateStack from './navigation/Navigate';

export default function App() {
  return (
    <View style={gStyle.AndroidSafeArea}>
      <NavigateStack/>
    </View>
  );
}


