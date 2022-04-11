import React from "react";
import { Text,View } from 'react-native';
import { Button, } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"


import { useRoute } from '@react-navigation/native'

const ChatRoomScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    console.log(route.params)
    return(
        <View>
            <View style={{ flexDirection:'row', paddingHorizontal: 10, backgroundColor: 'white',}}>
                
            </View>
            <Text>Chat Room</Text>
        </View>
    );
}

export default ChatRoomScreen;