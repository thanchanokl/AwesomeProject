import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function UsersMarkersQuiz(props) {

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.user_id}
    >
        <FontAwesome6 name="person-skiing" size={20} color="tomato" />
    </Marker>
  ));
}