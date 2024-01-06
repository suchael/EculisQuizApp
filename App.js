import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import Status_bar from "./src/Status_bar.js";
import Navigation from "./Navigation.js";
import { Provider } from 'react-redux';
import store from './store';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Database from "./Database.js";
import SubjectsTable from './SubjectsTable';
import SqlDown from "./SqlDown.js";
//import { useDispatch } from 'react-redux';



export default function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchUserEmailAndType = async () => {
  //     try {
  //       const auth_Token = await AsyncStorage.getItem("authToken");
        

  //       // Check if authToken exists
  //       if (auth_Token) {
  //         // Dispatch action to update user type with the retrieved value
  //         dispatch({ type: 'UPDATE_LOG', payload: 1 });
  //       } else {
  //         // Dispatch action with payload 0 if authToken doesn't exist
  //         dispatch({ type: 'UPDATE_LOG', payload: 0 });
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving user data from AsyncStorage:", error);
  //     }
  //   };

  //   fetchUserEmailAndType();
  // }, []);

  return (
    <>
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <Database table="questions"/>
        <Database table="subjects"/>
        <SubjectsTable /> */}
        {/* <SqlDown /> */}
        <Status_bar />
        <Navigation />
      </SafeAreaProvider>
      </Provider>
    </>
  );
}

