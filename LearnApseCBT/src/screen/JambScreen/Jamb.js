import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Animated, 
  Easing
} from "react-native";



import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createNativeStackNavigator ,} from "@react-navigation/native-stack";
import { TransitionSpecs } from '@react-navigation/stack';


//icons
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  Foundation,
} from '@expo/vector-icons';

// My imports
import UnderLineTextBtn from "./ExamMode/UnderLineTextBtn.js";






const JambScreenStack = createNativeStackNavigator();

export default function JambScreen(){
  return(
    <JambScreenStack.Navigator initialRouteName="JambHome" 
      screenOptions={{animation: "none",}}
    >
      <JambScreenStack.Screen name="JambHome" component={JambHome} options={{headerShown: false}}/>
    </JambScreenStack.Navigator>
  );
}


function JambHome({navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
    <View style = {{backgroundColor: "#6EAAF5"}}>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              paddingLeft: insets.left + 10,
              paddingRight: insets.right + 10,
              paddingTop: insets.top + 12,
              paddingBottom: insets.bottom + 75,
            },
          ]}
        >
          <View style={styles.midTop}>
            <View style ={{marginTop: 0,}}>
            	<AlertBox />
            </View>
            
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Past questions")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow1Btn}
                >
                  <>
                    <FontAwesome5 name="scroll" size={34} color="black" />
                    <Text style={styles.midTopContentRowText}>Past</Text>
                    <Text style={styles.midTopContentRowText}>Questions</Text>
                  </>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Custom test")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow1Btn}
                >
                  <>
                    <FontAwesome5 name="chalkboard-teacher" size={34} color="black" />
                    <Text style={styles.midTopContentRowText}>Customised</Text>
                    <Text style={styles.midTopContentRowText}>Test</Text>
                  </>
                </TouchableOpacity>
              </View>
              
              {/*Exam Mode*/}
              <View style={styles.midTopContentRow2}>
              	<View style ={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, width: 120}}>
              		<View style ={{height: 4, width: 14, backgroundColor: "black", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
              		</View>
              		<View style ={{height: 4, width: 14, backgroundColor: "black", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
              		</View>
              	</View>
                  <TouchableOpacity
                  	onPress={() => navigation.navigate("Exam mode")}
                  	activeOpacity={0.3}
                  	underlayColor="lightgray"
                 	 style={styles.midTopContentRow2Exam}
                  >
               	     <Text style={[styles.midTopContentRowText, {color: "black", fontSize: 22}]}>Exam{"\n"}Mode</Text>
                </TouchableOpacity>
              </View>
              {/*Closing: Exam Mode*/}
              
              <View style={styles.midTopContentRow3}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Online battle")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow3Btn}
                >
                  <>
                    <FontAwesome5 name="people-carry" size={34} color="black" />
                    <Text style={styles.midTopContentRowText}>Online{"\n"}Battle</Text>
                  </>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPress={() => navigation.navigate("Quiz mode")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow3Btn}
                >
                  <>
                    <MaterialCommunityIcons name="head-question-outline" size={37} color="black" />
                    <Text style={styles.midTopContentRowText}>Quiz{"\n"}Mode</Text>
                  </>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
          
          {/*Bottom*/}
          <View style={styles.bottom}>
            <TouchableOpacity 
              onPress={() => navigation.navigate("HallOfFame")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <MaterialCommunityIcons name="nature" size={35} color="black" />
                <Text style={styles.midTopContentRowText} >Hall of Fame</Text>
                <AntDesign name="right" size={20} color="black"  style={{position:"absolute" ,  right: 15}} />
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Novels and Art")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <FontAwesome5 name="diagnoses" size={30} color="black" />
                <Text style={styles.bottomContentText} >Novels and Art </Text>
                <AntDesign name="right" size={20} color="black"  style={{position:"absolute" ,  right: 15}} />
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Bookmarks")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <AntDesign name="book" size={35} color="black" />
                <Text style={styles.bottomContentText} >Bookmarks</Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Jamb syllabus")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <Entypo name="dropbox" size={35} color="black" />
                <Text style={styles.bottomContentText} >JAMB syllabus </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Jamb subject combination")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <AntDesign name="CodeSandbox" size={35} color="black" />
                <Text style={styles.bottomContentText} >JAMB subject combination </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Exam history")}
              activeOpacity={0.3}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <FontAwesome5 name="parachute-box" size={34} color="black" />
                <Text style={styles.bottomContentText} >Result and Exam history</Text>
              </>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableHighlight
        onPress={() => navigation.navigate("Group exam")}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={styles.groupExam}
      >
        <Text style={styles.groupExamText} >Group{"\n"}Exam</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("Teacher network")}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={styles.teacherNetwork}
      >
        <Text style={styles.teacherNetworkText} >Teachers{"\n"}Network</Text>
      </TouchableHighlight>
    </View>
    </SafeAreaProvider>
  );
}


function AlertBox() {
  const deviceWidth = Dimensions.get("window").width;
  const [position, setPosition] = useState(new Animated.Value(30));

  useEffect(() => {
    const moveText = () => {
      position.setValue(-30); // Reset the position to the initial value
      Animated.timing(position, {
        toValue:  30, // Adjust this value for the desired range of movement
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
  setUserStatus(false, false); //Chang me
  let content;

  if (!userStatus.loggedIn) {
    content = (
    	<View style ={{ flexDirection: "column",justifyContent: "center", alignItems: "center" , }}>
    			   <Animated.Text style={[styles.alertText, { transform: [{ translateX: position }] } ]}>
        				You are not logged in, please{" "}
        		   </Animated.Text>
        			<TouchableHighlight
          				onPress={() => console.log("Login Now")}
          				activeOpacity={0.9}
          				underlayColor="lightgray"
        			>
          				<Text style={[styles.clickableText, {marginBottom: 1}]}><UnderLineTextBtn text = "Login" goTo="Login"/></Text>       
        			</TouchableHighlight>
    	</View>
    );
  } 
  else if (!userStatus.appActivated) {
    content = (
    	<View style ={{ flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
    			   <Animated.Text style={[styles.alertText, { transform: [{ translateX: position }] } ]}>
        				You have not activated your App.{" "}
        		   </Animated.Text>
        			<TouchableHighlight
          				onPress={() => console.log("Activate Now")}
          				activeOpacity={0.9}
          				underlayColor="lightgray"
        			>
          				<Text style={[styles.clickableText, {marginBottom: 1}]}><UnderLineTextBtn text = "Activate Now" goTo="ActivateApp"/></Text>       
        			</TouchableHighlight>
    	</View>
    );
  } 
  else {
    content = <Text style={styles.alertText}>Welcome Ahmed Success!</Text>;
  }
  if (userStatus.loggedIn && userStatus.appActivated) {
    content = (
    	<View style ={{justifyContent: "center", alignItems: "center", paddingTop: 5}}>
			<Text style={[styles.alertText, {paddingHorizontal: 4,}]}>
				Bored? Join students in the ongoing
			</Text>
			<UnderLineTextBtn text = "Online Battle" goTo="Online battle"/>
		</View>
	)
  }
  return <View style={styles.alert}>{content}</View>;
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  midTop: {
    //borderWidth: 2,
  },
  alert: {
    paddingTop: 4,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 2,
    marginBottom: 28,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#FAFAFA",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    paddingBottom: 2,
  },
  clickableText: {
    textDecorationLine: "underline",
    fontWeight:  "900",
    fontSize: 15,
  },

  //MidTopContent
  midTopContent: {
    //borderWidth: 2,
    flex: 1,
    marginBottom: 14,
  },
  midTopContentRow1: {
    justifyContent: "space-between",
    flexDirection: "row",
    //borderWidth: 2,
  },
  midTopContentRow2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  midTopContentRow3: {
    justifyContent: "space-between",
    flexDirection: "row",
    //borderWidth: 2,
  },
  midTopContentRow1Btn: {
    //borderWidth: 2,
    backgroundColor: "#FAFAFA",
    width: 105,
    height: 105,
    borderRadius : 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow2Exam: {
    borderWidth: 2,
    borderColor: "#8888",
    backgroundColor: "#6EAAF5",
    width: 120,
    height: 120,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3Btn: {
    //borderWidth: 2,
    backgroundColor: "#FAFAFA",
    width: 105,
    height: 105,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRowText:{
  	color: "black",
      fontSize: 16,
      fontWeight: "bold",
      alignItems: "center",
  },
  
  //BottomBtn 
  bottom: {
    //borderWidth: 2,
    marginTop:20,
    marginBottom: 80,
  },
  bottomContent: {
    height: 64,
    //borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 26,
    borderRadius: 35,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  bottomContentText:{
  	fontSize: 16,
  	fontWeight: "bold",
  },
  
  groupExam: {
    backgroundColor: "#6EAAF5",
	width: 60,
	height: 60,
	borderRadius: 20,
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	bottom:  86,
	right: 10.6,	
   },
   groupExamText: {
      fontWeight: "bold",
  	fontSize: 13,
  	color: "white",
	},
  
  teacherNetwork:{
	backgroundColor: "#6EAAF5",
	paddingHorizontal: 8,
	paddingVertical: 14,
	borderRadius: 20,
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	bottom: 12,
	right: 10.6,	
},
  teacherNetworkText:{
  	fontWeight: "bold",
  	fontSize: 13,
  	color: "white",
  }, 
});


