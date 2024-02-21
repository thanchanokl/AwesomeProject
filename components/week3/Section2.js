import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop : -25  , margin : 15, padding : 10, borderRadius : 10 , backgroundColor : "#F5F5F5", shadowColor : "black", shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius: 2, elevation : 5}}>
            {/* View ก้อนที่ 1  */}
            <View style={{ alignItems : "center", marginTop : 1 }}>
                <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 5  }}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={15} color="#FFBE12"/>
                    <FontAwesome name="star" size={15} color="#FFBE12"/>
                    <FontAwesome name="star" size={15} color="#FFBE12"/>
                    <FontAwesome name="star" size={15} color="#FFBE12"/>
                    <FontAwesome name="star-half" size={15} color="#FFBE12"/>
                </View>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : 5, margin : 6}}>
                <Text style={{ textAlign : "center" ,fontSize : 13 }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>    
    );
}