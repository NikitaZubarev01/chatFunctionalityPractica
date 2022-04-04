import React from 'react';
import { UseState } from "react";
import { View, } from 'react-native';
import { Button, SearchBar,  } from 'react-native-elements';

import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({navigation}){
    const [value, setValue] = React.useState("");
    return(
        <View>
            <View style={{ flexDirection:'row', paddingHorizontal: 10, }}>
                <Button
                 buttonStyle={{ width: 50,height: 50, backgroundColor: 'white', }}
                 icon={
                    <Ionicons 
                    name="arrow-back" 
                    size={30} 
                    color="black" />
                  }
                 onPress={() => navigation.goBack()}
                />
                <SearchBar
                    platform="android"
                   // onChangeText={newVal => setValue(newVal)}
                    onClearText={() => console.log(onClearText())}
                    placeholder="Поиск"
                    placeholderTextColor="black"
                    cancelButtonTitle="Cancel"
                    cancelButtonProps={{}}
                    onCancel={() => console.log(onCancel())}
                    value={value}
                />
            </View>
        </View>
    );
} 