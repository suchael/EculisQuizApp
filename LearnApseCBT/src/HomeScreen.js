import React, { useEffect } from "react";
import { BackHandler, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Jamb from "./screen/JambScreen/Jamb.js";
import News from "./screen/NewsScreen/News.js";
import Ssce from "./screen/SsceScreen/Ssce.js";
import Header from "./Header.js";

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen(){
  return(
    <>
      <Main/>
    </>
  );
}


function Main() {
  const navigation = useNavigation();
  useEffect(() => {
    //  when user clicks on the back botton of their phone 
    //  in the homeScreen
    //  always return them to JAMB
    const backAction = () => {
      navigation.navigate('Jamb');
      return true; // Return true to prevent default behavior
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove(); // Clean up the event listener
  }, [navigation]);

  return (
    <>
      <Header/>
      <TopTab.Navigator
        initialRouteName="Jamb"
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#777",
          tabBarLabelStyle: {
            fontSize: 16,
            textTransform: "none",
            fontWeight: "bold",
          },
          tabBarStyle: {
            height: 40, // Adjust the height of the tab bar
            borderBottomWidth: 0, // Remove top border
            backgroundColor: "#E4F1FE",
          },
          tabBarIndicatorStyle: {
            bottom: 0, // Adjust the position of the indicator
            backgroundColor: "black",
            height: 3,
          },
        }}
      >
        <TopTab.Screen 
          name="Ssce" 
          component={Ssce} 
        />
        <TopTab.Screen
          name="Jamb"
          component={Jamb}
          options={{ tabBarLabel: 'JAMB' }}
        />
        <TopTab.Screen 
          name="News" 
          component={News} 
          options={{
            
          }}
        />
      </TopTab.Navigator>
    </>
    
  );
}


export default HomeScreen;