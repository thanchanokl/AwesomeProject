import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import UsersMarkersQuiz from "./UsersMarkersQuiz";
import LocationService from "../../services/LocationService";


export default function UsersViewQuiz(props) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;  

  const [universities, setUniversities] = useState([]);
  const loadUniversities = async () => {
    let url_endpoint = "https://ckartisan.com/api/location";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      //   console.log(items);
      setUniversities(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { loadUniversities(); }, []);

  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(event) => {
            // console.log("LOCATION CHANGED : " , event);
            if (event.nativeEvent.coordinate) {
              let new_location = {
                coords: event.nativeEvent.coordinate,
                mocked: false,
                timestamp: event.nativeEvent.coordinate.timestamp,
              };
            //SEND TO SERVER
            if (props.recordLocation) {
                console.log("SEND TO SERVER");
                LocationService.storeItem({
                  user_id: "Thanchanok",
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude,
                });
            }
          
            }
        }}        
      >
        {/* <Marker
          coordinate={{
            latitude: Number(14.073674077882805),
            longitude: Number(100.60274828415885),
          }}
          title={"Thammasat University Rangsit Campus"}
          key={"xxxx"}
        />
        <Marker
          coordinate={{
            latitude: Number(14.06536013642454),
            longitude: Number(100.60043840675684),
          }}
          title={"TU Dome Plaza"}
          key={"xxxx"}
        /> */}

        <UsersMarkersQuiz items={universities} />
      </MapView>
    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}