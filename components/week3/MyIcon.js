import { StatusBar } from 'expo-status-bar';
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function MyIcon(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <FontAwesome name={ props.name }  size={ props.size } color={ props.color } />
            <Text>{ props.title }</Text>
        </View>
  );
}
