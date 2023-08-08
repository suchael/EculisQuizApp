import React, { useEffect } from "react";
import { BackHandler, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import JambContent from "./screen/JambContent.js";
import NewsContent from "./screen/NewsContent.js";

const TopTab = createMaterialTopTabNavigator();

function Ssce() {
  return (
    <Text>Ssce</Text>
  );
}

function Main() {
  const navigation = useNavigation();

  useEffect(() => {
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
      <TopTab.Screen name="Ssce" component={Ssce} />
      <TopTab.Screen
        name="Jamb"
        component={JambContent}
        options={{ tabBarLabel: 'JAMB' }}
      />
      <TopTab.Screen name="News" component={NewsContent} />
    </TopTab.Navigator>
  );
}

export default Main;
