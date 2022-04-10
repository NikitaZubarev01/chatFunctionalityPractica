import React from 'react';

import ChatMenu from '../screens/ChatMenuScreen';
import SearchScreen from '../screens/SearchScreen';
import AddChatScreen from '../screens/AddChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';


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
            <Stack.Screen
                name = "ChatRoomScreen"
                component = {ChatRoomScreen}
                options={{ title: 'Chat Room' }}
            />

        </Stack.Navigator>
    </NavigationContainer>;
}