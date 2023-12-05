import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated, 
  Easing
} from "react-native";

import { useNavigation } from '@react-navigation/native';

// My imports
import UnderLineTextBtn from "./ExamMode/UnderLineTextBtn.js";


export default function AlertBox() {
  const navigation = useNavigation();
  
  const deviceWidth = Dimensions.get("window").width;
  const [position, setPosition] = useState(new Animated.Value(20));

  useEffect(() => {
    const moveText = () => {
      position.setValue(-25); // Reset the position to the initial value
      Animated.timing(position, {
        toValue:  22, // Adjust this value for the desired range of movement
        duration: 5600, // decreasing this value will increase the Text speed
        easing: Easing.linear, // You can use other easing functions
        useNativeDriver: true,
      }).start(moveText); // Recursively call moveText when the animation is done
    };

    moveText(); // Start the initial animation
  }, []);
  
  
  
  const userStatus = {
    loggedIn: false, //initial
    appActivated: false, //initial 
  };

  const setUserStatus = (loggedIn, appActivated) => {
    userStatus.loggedIn = loggedIn;
    userStatus.appActivated = appActivated;
  };
  
   // Toggle the user Alert message using "true/false"
  setUserStatus(true, false); //Chang me
  let content;

  if (!userStatus.loggedIn) {
    content = (
        			
        				 <View style ={{ flexDirection: "column",justifyContent: "space-between", alignItems: "center" , paddingVertical: 5,}}>
        					<Animated.Text style={[styles.alertText, { transform: [{ translateX: position }] } ]}>
        						You are not logged in, please{""}
        		   		 </Animated.Text>
        					<UnderLineTextBtn text = "Login" goTo="Login"/>
        				</View>
        			
    );
  } 
  else if (!userStatus.appActivated) {
    content = (
    				
        				 <View style ={{ flexDirection: "column",justifyContent: "space-between", alignItems: "center" , paddingVertical: 5,}}>
        					<Animated.Text style={[styles.alertText, { transform: [{ translateX: position }] } ]}>
        						You have not activated your App
        		   		 </Animated.Text>
        					<UnderLineTextBtn text = "Activate Now" goTo="ActivateApp"/>
        				</View>
        			
    );
  } 
  else {
    content = <Text style={styles.alertText}>Welcome Ahmed Success!</Text>;
  }
  if (userStatus.loggedIn && userStatus.appActivated) {
    content = (
    				
        				 <View style ={{ flexDirection: "column",justifyContent: "space-between", alignItems: "center" , paddingVertical: 5,}}>
        					<Animated.Text style={[styles.alertText, { transform: [{ translateX: position }] } ]}>
        						Bored? Join students in the ongoing
        		   		 </Animated.Text>
        					<UnderLineTextBtn text = "Online Battle" goTo="Online battle"/>
        				</View>
     			
	)
  }
  return <View style={styles.alert}>{content}</View>;
}


const styles = StyleSheet.create({
  alert: {
    //paddingHorizontal: 20,
    marginTop: 2,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#FAFAFA",
    //borderRadius: 15,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1
    
  },
  alertText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    
  },
  underlineText: {
    textDecorationLine: "underline",
    fontWeight:  "600",
    fontSize: 17,
    color: 'blue',
    backgroundColor: "white"
  },
})