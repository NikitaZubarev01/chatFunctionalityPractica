import React from "react";
import { Text,View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native"


import { useRoute } from '@react-navigation/native'

import chatRoomData from '../data/Chats';
import ChatMessege from "../components/ChatMessege";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    console.log(route.params)
    return(
        <View style = {{paddingBottom: '18%',}}>
        <FlatList
            data = {chatRoomData.messages}
            renderItem={({ item }) => <ChatMessege message={item} />}
            inverted
        />
        <InputBox/>
        
        
        </View>
    );
}

export default ChatRoomScreen;