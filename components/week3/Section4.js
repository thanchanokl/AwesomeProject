import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ borderTopWidth:0.5, borderBottomWidth:0.5, marginLeft:20, marginRight:20}}>
            <View style={{ margin:2}}>
                <Text style={{ fontSize : 16 }}>Hotel Description</Text>
            </View>
            <View style={{ margin:2, marginBottom:5}}>
                <Text style={{ fontSize : 13, color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
