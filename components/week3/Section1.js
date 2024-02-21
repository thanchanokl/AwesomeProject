import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section1() {
    return (
        <View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 6/2 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
            {/* View ก้อนที่ 2 */}
            
            {/* View ก้อนที่ 3 */}
            
        </View>    
    );
}
