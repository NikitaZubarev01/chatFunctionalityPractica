import React from 'react';

import ChatMenu from '../components/ChatMenu';
import SearchScreen from '../components/SearchScreen';
import AddChatScreen from '../components/AddChatScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
            name = "ChatMenu"
            component={ChatMenu}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}