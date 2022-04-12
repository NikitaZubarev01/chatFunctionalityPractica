import React, { useState } from "react";
import { View, Text } from 'react-native';
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onSendPress = () => {
        console.log(`Sending: ${message}`)
        
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.mainContainer}>
                <TextInput 
                    placeholder={"Type a messege..."}
                    style = {styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
            </View>
            <TouchableOpacity onPress={onSendPress}>
            <View style = {styles.buttonContainer}>
                <Ionicons name="send" size={30} color="white" />
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;