import React, { useState } from "react";
import { Button, Text,TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() { 
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescription] = useState('');

    console.log("STATE: ", weight, height, bmi);

    const onPressButton = () => {
        console.log("calculate button is pressed!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
        console.log(bmi); 
        console.log(output); 

        let description = "bmi";
        if (bmi<18.5)
            description ="Underweight - eat a bagel!";
        else if (bmi>=18.5 && bmi<=24.99)
            description ="Normal - keep it up!";
        else if (bmi>=25 && bmi<=29.99)
            description ="Overweight - exercise more!";
        else if (bmi>=30 && bmi<=39.99)
            description ="Obese - get off the couch!";
        else
            description ="Morbidly Obese - take action!";
        setDescription(description);
    }
    
    return (
        <View>
            {/* View ก้อนที่ 1 */}
            <View style = {{backgroundColor:"white", padding:20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontSize : 20 }}>Weight (kg.)</Text>
                <TextInput style={{ fontSize : 20 }} 
                keyboardType="numeric" 
                placeholder="Input your Weight ..." 
                value={weight}
                onChangeText={function(newWeight) {setWeight(newWeight)}}>
                </TextInput>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style = {{backgroundColor:"white", padding:20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontSize : 20 }}>Height (m.)</Text>
                <TextInput style={{ fontSize : 20 }} 
                keyboardType="numeric" 
                placeholder="Input your Height ..." 
                value={height}
                onChangeText={function(newHeight) {setHeight(newHeight)}}>
                </TextInput>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style = {{flexDirection: "row", marginVertical: 10}}>
                {/* ซ้าย */}
                <View style = {{flex: 1, backgroundColor:"white", padding:20, marginVertical: 10, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10}}>
                    <Text style={{ fontSize : 20 }}>BMI : {bmi}</Text>
                </View>
                {/* ขวา */}
                <View style = {{flex: 1, backgroundColor:"white", padding:20, marginVertical: 10, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 10}}>
                    <Text style={{ fontSize : 17, color : "#f97171"}}>{description}</Text>
                </View>
            </View>
            {/* <Button title="Calculate" onPress={onPressButton}/> */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "#05aba9", borderRadius: 40 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}