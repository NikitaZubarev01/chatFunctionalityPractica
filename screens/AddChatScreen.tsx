import React from 'react';
import { View, } from 'react-native';
import { Button, } from 'react-native-elements';

import { gStyle } from '../styles/style2';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({navigation}){

    return(
        <View>
            <View style={{ flexDirection:'row', paddingHorizontal: 10, backgroundColor: 'white',}}>
                <Button
                 buttonStyle={{ 
                    width: 50,
                    height: 50, 
                    backgroundColor: 'white', 
                    }}
                 icon={
                    <Ionicons 
                    name="arrow-back" 
                    size={30} 
                    color="black" />
                  }
                 onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
} 