import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


// Navigation 
import 'react-native-gesture-handler';

//ReactNative components 
import { StyleSheet, Text, View } from 'react-native';

//my Components
import Main from "./src/Main.js";
import Status_bar from "./src/Status_bar.js";
import Header from "./src/Header.js";


export default function App() {
  return (
  	<> 
  	<SafeAreaProvider>
  		  <Status_bar/>
			<Header/>
      	  <Main/>
  	</SafeAreaProvider>
  	</>

  );
}












