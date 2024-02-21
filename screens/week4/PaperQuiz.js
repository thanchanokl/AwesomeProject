import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function PaperQuiz() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      
    <Card>
    <Card.Cover source={require("../../assets/week3/room-6.jpg")} />
    </Card>

      <Divider style={{ marginVertical : 10 }} />

      
    </ScrollView>
  );
}
