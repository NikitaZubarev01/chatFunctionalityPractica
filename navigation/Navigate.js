import React from 'react';

import ChatMenu from '../components/ChatMenu';
import SearchScreen from '../components/SearchScreen';
import AddChatScreen from '../components/AddChatScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

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
            <Stack.Screen
            name = "SearchScreen"
            component={SearchScreen}
            />
            <Stack.Screen
            name = "AddChatScreen"
            component={AddChatScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}