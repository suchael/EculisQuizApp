import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


// Navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//ReactNative components 
import { StyleSheet, Text, View } from 'react-native';

//my Components

import Status_bar from "./src/Status_bar.js";
import HomeScreen from './src/HomeScreen.js';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
  	<> 
  	<SafeAreaProvider>
  		  <Status_bar/>
  		  <NavigationContainer>
					<Stack.Navigator initialRouteName='HomeScreen'>
						<Stack.Screen 
							name="HomeScreen" 
							options={{headerShown: false}}
							component={HomeScreen}/>
					</Stack.Navigator>
  		  </NavigationContainer>
  	</SafeAreaProvider>
  	</>
  );
}












