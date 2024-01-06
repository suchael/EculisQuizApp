import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

// My import
import Jamb from "./screen/JambScreen/Jamb.js";
import News from "./screen/NewsScreen/News.js";
import Waec from "./screen/WaecScreen/Waec.js";
import GetQuestions from "../Backend/GetQuestions.js";
import Header from "./components/customComponents/Header.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../Colors.js";
const TopTab = createMaterialTopTabNavigator();
import { useSelector } from 'react-redux';





function HomeScreen() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");
  const status = useSelector(state => state.usertype);

  // useEffect(() => {
  //   const fetchUserEmail = async () => {
  //     try {
  //       const storedUserEmail = await AsyncStorage.getItem("userName");
  //       setUserEmail(storedUserEmail || "");
        
  //     } catch (error) {
  //       console.error("Error retrieving user email from AsyncStorage:", error);
  //     }
  //   };

  //   fetchUserEmail();
  // }, []);

  const newUserName = userEmail?.split('@')[0] || "New User";
  console.log('lol', newUserName)
  GetQuestions();

  return (
    <>
      <Header userName={newUserName} />
      <TopTab.Navigator
        initialRouteName="SSCE"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "lightgray",
          tabBarLabelStyle: {
            fontSize: 16,
            textTransform: "none",
            fontWeight: "bold",
          },
          tabBarStyle: {
            height: 40, // Adjust the height of the tab bar
            borderBottomWidth: 0, // Remove top border
            backgroundColor: COLORS.primary,
            elevation: 0,
          },
          tabBarIndicatorStyle: {
            bottom: 0, // Adjust the position of the indicator
            backgroundColor: "white",
            height: 3,
          },
        }}
      >
        <TopTab.Screen name="SSCE" component={Waec} />
        <TopTab.Screen
          name="Jamb"
          component={Jamb}
          options={{ tabBarLabel: "JAMB" }}
        />
        <TopTab.Screen name="News" component={News} />
      </TopTab.Navigator>
    </>
  );
}

export default HomeScreen;
