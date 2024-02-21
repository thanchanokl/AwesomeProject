import React from 'react';
import { Button,  Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:-2,marginBottom:5, marginLeft: 10}}>
            <View style={{ flexDirection: "column",paddingLeft: 10  }}>
            <Text style={{ fontSize: 10 }}>Price</Text>
            <Text style={{ color: "#E5624c",fontSize: 15 }}>$399.99</Text>
            <Text style={{ color: "black",fontSize: 10 }}>AVG/Night</Text>
            </View>
            <View style={{justifyContent:'center',height:60, width:100, marginRight: 10, borderRadius : 10 }}>
                <Button title="BOOK NOW" color="#E5624c" />
            </View>
        </View>
    );
}