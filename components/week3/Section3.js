import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section3() {
    return (
        <View style={{ flex: 1, margin : 15 ,  marginTop : 10}}>
            <View style={{ flexDirection : "row" }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#E5624c', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, color : "white" }}>9.5</Text>
            </View>

            {/* View ก้อนที่ 2 */}
            <View style={{ paddingLeft : 10, marginTop : 3 }}>
                    <Text style={{ fontSize : 18, color : "#E5624c" }}>Excellent</Text>
                    <Text style={{ fontSize : 10 }}>See 801 reviews</Text>
            </View>
            </View>
        </View>    
    );
}