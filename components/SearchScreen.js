import React from 'react';
import { UseState } from "react";
import { View, } from 'react-native';
import { Button, SearchBar,  } from 'react-native-elements';

import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({navigation}){
    const [search, setSearch] = React.useState('');
    return(
        <View>
            <View style={{}}>
                <SearchBar
                    platform="android"
                    placeholder="Поиск"
                    placeholderTextColor="black"
                    onChangeText={search => setSearch(search)}
                    onClearText={() => console.log(onClearText())}
                   // cancelButtonTitle="Cancel"
                    //cancelButtonProps={{}}
                    onCancel={() => navigation.goBack()}
                    value={search}
                />
            </View>
        </View>
    );
} 