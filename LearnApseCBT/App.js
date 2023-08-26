import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import React, { useEffect } from "react";
import { BackHandler} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


//my Components
import Status_bar from "./src/Status_bar.js";
import Header from "./src/Header.js";
import Jamb from "./src/screen/JambScreen/Jamb.js";
import News from "./src/screen/NewsScreen/News.js";
import Ssce from "./src/screen/SsceScreen/Ssce.js";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
  	<SafeAreaProvider>	  
  		  <NavigationContainer>
					<Stack.Navigator initialRouteName='AppHomeScreen' screenOptions={{animation:"none",headerShown: false}}>
						<Stack.Screen name="AppHomeScreen" options={{headerShown: false}} component={AppHomeScreen}/>
					</Stack.Navigator>
  		  </NavigationContainer>
  	</SafeAreaProvider>
  );
}


const TopTab = createMaterialTopTabNavigator();


function AppHomeScreen({navigation}){
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
	return(
		<>
			<Status_bar/>
			<Header/>
			<TopTab.Navigator
        			initialRouteName="Jamb"
        			screenOptions={{
          		  	tabBarActiveTintColor: "white",
          		  	tabBarInactiveTintColor: "blue",
          		  	tabBarLabelStyle: {
            				fontSize: 16,
            				textTransform: "none",
            				fontWeight: "bold",
          		 	},
          			tabBarStyle: {
            				height: 40, // Adjust the height of the tab bar
            				borderBottomWidth: 0, // Remove top border
            				backgroundColor: "#6EAAF5", //Tab bar background color
          			},
          			tabBarIndicatorStyle: {
            				bottom: 0, // Adjust the position of the indicator
            				backgroundColor: "white",
            				height: 3,
          			},
        		}}
      	  >
        			<TopTab.Screen name="Ssce" component={Ssce}/>
        			<TopTab.Screen name="Jamb" component={Jamb} options={{ tabBarLabel: 'JAMB' }}/>
        			<TopTab.Screen name="News" component={News}/>
        	</TopTab.Navigator>
   	</>
	);
}










