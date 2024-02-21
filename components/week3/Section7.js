import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{  margin:10 ,marginLeft:20, marginTop:3, borderBottomWidth:0.5 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{  }}>
                <Text style={{ fontSize : 16 }}>Room Type</Text>
            </View>

           {/* View ก้อนที่ 2  */}
           <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 55, height: 70, borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 15 }}>Standard Twin Room</Text>
                    <View style={{ marginTop:10 }}>
                    <Text style={{ color: "#E5624c" }}>$399.99</Text>
                    <Text style={{ fontSize: 10 , color: "#4B919B" }}>Hurry Up! This is your last room!</Text>
                    </View>
                </View>
            </View>
            </View>
        
    );
}
