import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Extra from './screens/week2/Extra';
import Extra2 from './screens/week2/Extra2';
import { Alert, Button, Image, ScrollView, ScrollViewBase, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Signup from './components/week3/Signup';
import Card from './components/week3/Card';
import Hotel from './components/week3/Hotel';
import MyIcon from './components/week3/MyIcon';
import Resort from './screens/week3/Resort';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/TestPaper';
import PaperQuiz from './screens/week4/PaperQuiz';
import Bmi from './components/week5/Bmi';
import Heartbeat from './components/week5/Heartbeat';
import Health from './screens/week5/Health';
import ChartKitScreen from './screens/week5/ChartKitScreen';

export default function App() {
  return (
    // <Welcome/>
    // <Ex01/>
    // <Ex02/>
    // <Ex03/>
    // <Ex04/>
    // <Ex05/>
    // <Ex06/>
    // <Ex07/>
    // <Ex08/>
    // <Ex09/>
    // <Ex10/>
    // <Ex11/>
    // <Ex12/>
    // <Extra/>
    // <Extra2/>

    // <Travel/>
    // <Resort/>
    // <PaperProvider>
    //   <TestPaper/>
    // </PaperProvider>
    // <PaperProvider>
    //  <PaperQuiz/>
    // </PaperProvider>

    // <Bmi/>
    // <Heartbeat/>
    // <Health/>
    <ChartKitScreen/>
    
    // <ScrollView>
    // <View style = {{ flex:1, marginTop:25 }}>
    // {/* <View style={{ flex: 1, flexDirection: 'column' }}> */}
    
    //   <TextInput
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     maxLength={30}
    //     multiline={false}
    //     placeholder="Please enter your email"
    //     returnKeyType="next"
    //     onChangeText={(text)=>{}}
    //     defaultValue="Default text"
    //   />
      
    //   <Button
    //     title="Press me"
    //     onPress={() => Alert.alert("Simple Button pressed")}
    //     color="#665544"
    //   />
      
    //   <Text> Hello World </Text>
      
    //   <Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width:50, height:50 }} />
    //   <Image source={{ uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width:50, height:50 }} />
      
    //   <View style={{ flex: 1, flexDirection: 'column' }}>
    //     {/* Fixed Size */}
    //     <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
    //       <Image style={{ width: 150, height: 100 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //       <Image style={{ width: 150, height: 150}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //       <Image style={{ width: 150, height: 150, borderRadius: 150/2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //     </View>    
    //   </View>

    //   <View style={{ flex: 1, flexDirection: 'column' }}>
    //     <View style={{ flexDirection: 'row' , marginTop : 20 }}>
    //       <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //     </View>
    //     <View style={{ flexDirection: 'row' , marginTop : 20 }}>
    //       <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //     </View>
    //     <View style={{ flexDirection: 'row' , marginTop : 20, backgroundColor : 'gray' }}>
    //       <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    //     </View>
    //   </View>
      
    //   <FontAwesome name="heart"  size={32} color="orange" />

    //   {/* <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
    //     <Text style={{ fontSize: 30, color : "white" }}>หัวใจ</Text>
    //   </View> */}

    //   {/* <View style={{alignItems: 'center', top: 50}}> */}
    //     <Greeting name='Rexxar' />
    //     <Greeting name='Jaina' />
    //     <Greeting name='Valeera' />
    //   {/* </View> */}

    // {/* </View> */}
    // </View>
    // </ScrollView>

    );
}

