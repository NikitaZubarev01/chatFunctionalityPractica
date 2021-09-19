import React from 'react';
import { View,  } from 'react-native';
import { Text, Divider, Button, } from 'react-native-elements';

import { gStyle } from '../styles/style';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ChatMenu(){
    return (
      <View>

        <View style={{ flexDirection:'row', paddingHorizontal: 10,}}> 
           <Text style={gStyle.title}>Чаты</Text>
           <Button 
              buttonStyle={{ width: 40,height: 40, backgroundColor: 'white', }}
              icon={
                <Feather 
                 name="search" 
                 size={24} 
                 color="black" 
                />
              }
            />
          <Button
            buttonStyle={{ width: 40,height: 40, backgroundColor: 'white', }}
            icon={
              <FontAwesome 
                name="pencil-square-o" 
                size={24} 
                color="black" />
            }

          />
        </View>

        <Divider
          style={{ width: "100%", }}
          color="gray"
          width={2}
          orientation="horizontal"
        />
        
      </View>
    );
}

//const styles = StyleSheet.create({});