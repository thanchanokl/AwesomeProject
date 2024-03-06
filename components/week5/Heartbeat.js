import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [count,setCount] = useState(0);

    console.log("STATE: ", count);

    const onPressButton = () => {
        setCount(count + 1)
        
    }
    return (
        <View style = {{flexDirection: "row", marginVertical: 10}}>
            {/* ซ้าย */}
            <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={35} color="#f97171" />
                </TouchableOpacity>
            </View>
            {/* ขวา */}
            <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{ fontSize : 35 }}>{count}</Text>
            </View>
        </View>
    );
}
