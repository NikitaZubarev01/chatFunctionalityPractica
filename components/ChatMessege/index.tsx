import React from "react";
import { Text, View } from 'react-native'
import { Message } from '../../types/types';
import moment from "moment";
import styles from "./styles";

export type ChatMessegeProps = {
    message: Message;
}

const ChatMessege = (props: ChatMessegeProps ) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return(
        <View style = {styles.container}>
            <View style = {[
                styles.messageBox, {
                   backgroundColor: isMyMessage() ? '#B3E5FC' : 'white',
                   marginLeft: isMyMessage() ? 50 : 0,
                   marginRight:  isMyMessage() ? 0 : 50,
                }
            ]}>
                { !isMyMessage() && <Text style = {styles.name}>{message.user.name}</Text>}
                <Text style = {styles.message}>{message.content}</Text>
                <Text style = {styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessege;