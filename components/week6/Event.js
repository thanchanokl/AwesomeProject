import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Event(props) {
const tours = [
    { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
    { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
    { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
];

    return (
        <View style={props.style}>
            <Text style={{fontSize:25}}>Up Coming Events</Text>
            <Text style={{fontSize:15, color: 'gray', marginVertical:10}}>What's the Worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, borderColor:'gray', borderWidth: 0.5, borderRadius:10}}>
                                <Image style={{width: Dimensions.get("screen").width/1.5, height: 150, borderTopRightRadius : 10, borderTopLeftRadius : 10}} source={{ uri: item.uri }} />
                                <View style={{flexDirection:"row", height : 80 , width: Dimensions.get("screen").width/1.5, padding: 10}}>
                                    <View style={{flexDirection:"column"}}>
                                        <Text style={{fontSize:18, color:'red', textAlign:'center'}}> {item.month} </Text>
                                        <Text style={{fontSize:14, color:'gray', textAlign:'center'}}> {item.date} </Text>
                                    </View>
                                    <View style={{flexDirection:"column"}}>
                                        <Text style={{fontSize:18, color:'black', textAlign:'left', marginLeft:10}}> {item.title} </Text>
                                        <Text style={{fontSize:12, color:'gray', textAlign:'left', marginLeft:10}}> {item.datetime} </Text>
                                        <Text style={{fontSize:12, color:'gray', textAlign:'left', marginLeft:10}}> {item.place} </Text>
                                    </View>
                                    
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />   
        </View>
    );
}
