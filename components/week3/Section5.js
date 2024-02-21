import React from "react";
import { View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";


export default function Section5() {
  return (
    <View style={{ }}>
      {/* View ก้อนที่ 1 */}
      <View style={{ flexDirection : "row", marginTop : 10, marginBottom:10 }}>
        <MyIcon title="wifi" name="wifi" size={20} color="#4B919B" />
        <MyIcon title="coffee" name="coffee" size={20} color="#4B919B" />
        <MyIcon title="bath" name="bath" size={20} color="#4B919B" />
        <MyIcon title="car" name="car" size={20} color="#4B919B" />
        <MyIcon title="paw" name="paw" size={20} color="#4B919B" />
      </View>
    </View>


  );
}
