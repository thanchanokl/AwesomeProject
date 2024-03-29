import React from "react";
import { View } from "react-native";
import Bmi from "../../components/week5/Bmi";
import Heartbeat from "../../components/week5/Heartbeat";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function Health() {
    return (
        <View style={{ flex: 1 , backgroundColor : '#d9eedb', justifyContent : "center", padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </View>
    );
}
