import React from 'react';
import {TouchableOpacity,View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from "@expo/vector-icons";

const SearchButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <View>
           
                <Feather 
                 name="search" 
                 size={30} 
                 color="white" 
                />

        </View>
        </TouchableOpacity>
    )
}

export default SearchButton;