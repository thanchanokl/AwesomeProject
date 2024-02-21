import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ borderTopWidth:0.5, borderBottomWidth:0.5, marginLeft:20, marginRight:20}}>
        {/* View ก้อนที่ 1 */}
        <View style={{ margin:2}}>
            <Text style={{ fontSize : 16 }}>Location</Text>
        </View>
        <View style={{ margin:2, marginBottom:5}}>
            <Text style={{ fontSize : 13, color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
        </View>
        
        {/* View ก้อนที่ 2 */}
        <View style={{ flexDirection : "row", marginBottom : 5}}>
            <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 6/2 }} source={require("../../assets/week3/map.jpg")} />
        </View>
        </View> 
    );
}
