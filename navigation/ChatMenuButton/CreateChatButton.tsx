import React from "react";
import { TouchableOpacity, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 

const CreateChatButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddChatScreen')}>
        <View>
           
                <FontAwesome
                 name="pencil-square-o" 
                 size={30} 
                 color="white" 
                />

        </View>
        </TouchableOpacity>
    )
}

export default CreateChatButton;