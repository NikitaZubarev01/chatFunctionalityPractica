import React from 'react';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatMenuScreen from '../screens/ChatMenuScreen';
import SearchScreen from '../screens/SearchScreen';
import FriendsScreen from '../screens/FriendsScreen';
import SearchButton from './ChatMenuButton/SearchButton';
import CreateChatButton from './ChatMenuButton/CreateChatButton';

import {View} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:'#4086FF'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'left',

            headerTitleStyle:{
                fontWeight: 'bold',

            }
            
        }}
            
        
        >
            <Stack.Screen
                name = "ChatMenu"
                component={ChatMenuScreen}
                options={{
                    title: "Messenger",
                    headerRight: () =>(
                        <View style ={{
                            flexDirection:'row', 
                            width: 75, 
                            justifyContent:'space-between',
                            marginRight: 5
                        }}>
                            <SearchButton/>
                            <CreateChatButton/>
                            
                        </View>
                    )
                }}
                
            />
            <Stack.Screen
                name = "SearchScreen"
                component={SearchScreen}
            />
            <Stack.Screen
                name = "Friends"
                component={FriendsScreen}
            />
            <Stack.Screen
                name = "ChatRoom"
                component = {ChatRoomScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    } 
                )}
            />

        </Stack.Navigator>
    </NavigationContainer>;
}