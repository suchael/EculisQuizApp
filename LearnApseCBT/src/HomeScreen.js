
import React, { useEffect } from "react";
import { BackHandler, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import JambContent from "./screen/JambContent.js";
import NewsContent from "./screen/NewsContent.js";
import SsceContent from "./screen/SsceContent.js";
import Header from "./Header.js";

const TopTab = createMaterialTopTabNavigator();


function HomeScreen(){
  return(
    <>
      <Header/>
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
    <TopTab.Navigator
      initialRouteName="Jamb"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#555",
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "none",
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
        component={SsceContent} 
      />
      <TopTab.Screen
        name="Jamb"
        component={JambContent}
        options={{ tabBarLabel: 'JAMB' }}
      />
      <TopTab.Screen 
        name="News" 
        component={NewsContent} 
      />
    </TopTab.Navigator>
  );
}


export default HomeScreen;