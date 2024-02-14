import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex : 1 , alignContent : 'space-between',  justifyContent : 'center'}}>
      <View style={{ flex : 1 , flexDirection : 'row' , alignItems : 'center', justifyContent : "space-between"}}>    
        <View style={{ backgroundColor : '#50E3C2' , height : 100, width : 100  }}></View>      
        <View style={{ backgroundColor : '#50E3C2' , height : 100, width : 100  }}></View>   
        <View style={{ backgroundColor : '#50E3C2' , height : 100, width : 100  }}></View>
      </View>
      <View style={{ flex : 1 , flexDirection : 'row' , alignItems : 'center', justifyContent : "space-between"}}>    
        <View style={{ backgroundColor : '#4A90E2' , height : 100, width : 100  }}></View>      
        <View style={{ backgroundColor : '#4A90E2' , height : 100, width : 100  }}></View>   
        <View style={{ backgroundColor : '#4A90E2' , height : 100, width : 100  }}></View>
      </View>
      <View style={{ flex : 1 , flexDirection : 'row' , alignItems : 'center', justifyContent : "space-between"}}>    
        <View style={{ backgroundColor : '#9013FE' , height : 100, width : 100  }}></View>      
        <View style={{ backgroundColor : '#9013FE' , height : 100, width : 100  }}></View>   
        <View style={{ backgroundColor : '#9013FE' , height : 100, width : 100  }}></View>
      </View>
    </View>
  );
}
