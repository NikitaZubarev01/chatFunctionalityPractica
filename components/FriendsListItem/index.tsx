import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { User } from "../../types/types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native"


export type FriendsListItemProps ={
    user: User;
}

const FriendsListItem = (props: FriendsListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
        //
    }
    

    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style = {styles.container}>

            <View style ={ styles.lefcontainer}>

                <Image source ={{ uri: user.imageUri }} style = {styles.avatar}/>

                <View style = {styles.midContainer}>

                    <Text style = {styles.username}>{user.name}</Text>
                    <Text style = {styles.status}>{user.status}</Text>

                </View>
            </View>
            
            
        </View>
        </TouchableWithoutFeedback>
    )
};

export default FriendsListItem;

