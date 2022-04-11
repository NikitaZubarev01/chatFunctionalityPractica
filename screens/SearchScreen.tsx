import React from 'react';
import { UseState } from "react";
import { View, } from 'react-native';
import { Button, SearchBar, Divider,  } from 'react-native-elements';

import { gStyle } from '../styles/style2';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({navigation}){
    const [search, setSearch] = React.useState('');
    return(
        <View style = {{flexDirection: 'row' }}>
            <View style={{ flex: 1}}>
                <SearchBar style={{}}
                    platform="android"
                    placeholder="Поиск"
                    placeholderTextColor="black"
                    onChangeText={search => setSearch(search)}
                    onClearText={() => console.log(onClearText())}
                    //cancelButtonTitle="Cancel"
                    //cancelButtonProps={{}}
                    value={search}
                />
            </View>
        </View>
    );
} 