import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
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
} from '@expo/vector-icons';


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
            <AlertBox />
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Past questions")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, {
                  				  borderTopLeftRadius: 34,
    								borderBottomRightRadius: 34,
							  }]}
                >
                  <>
                    <MaterialCommunityIcons name="notebook-multiple" size={40} color="white" />
                    <Text style={styles.boxesInnerText}>Past</Text>
                    <Text style={styles.boxesInnerText}>Questions</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Custom test")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, {
                  				  borderTopRightRadius: 34,
    								borderBottomLeftRadius: 34,
							  }]}
                >
                  <>
                    <MaterialIcons name="my-library-books" size={45} color="white" />
                    <Text style={styles.boxesInnerText}>Customised</Text>
                    <Text style={styles.boxesInnerText}>Test</Text>
                  </>
                </TouchableHighlight>
              </View>
              <View style={styles.midTopContentRow2}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Exam mode")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow2Exam}
                >
                  <>
                    <Ionicons name="ios-finger-print-sharp" size={50} color="gray" />
                    <Text style={styles.boxesInnerText}>Exam{"\n"}Mode</Text>
                  </>
                </TouchableHighlight>
              </View>
              <View style={styles.midTopContentRow3}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Online battle")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow3Btn, {
                  					borderTopRightRadius: 34,
    								  borderBottomLeftRadius: 34,
							  }]}
                >
                  <>
                    <MaterialIcons name="online-prediction" size={47} color="white" />
                    <Text style={styles.boxesInnerText}>Online{"\n"}Battle</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Quiz mode")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow3Btn, {
                  					borderTopLeftRadius: 34,
    								  borderBottomRightRadius: 34,
							  }]}
                >
                  <>
                    <MaterialCommunityIcons name="head-question-outline" size={45} color="white" />
                    <Text style={styles.boxesInnerText}>Quiz{"\n"}Mode</Text>
                  </>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableHighlight
              onPress={() => navigation.navigate("National score ranking")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <MaterialCommunityIcons name="nature" size={35} color="white" />
                <Text style={styles.bottomContentText} >National score ranking</Text>
                <AntDesign name="right" size={18} color="black"  style={{position:"absolute" ,  right: 8}} />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Novels and Art")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <FontAwesome5 name="diagnoses" size={30} color="white" />
                <Text style={styles.bottomContentText} >Novels and Art </Text>
                <AntDesign name="right" size={18} color="black"  style={{position:"absolute" ,  right: 8}} />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Bookmarks")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <AntDesign name="book" size={35} color="white" />
                <Text style={styles.bottomContentText} >Bookmarks</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Jamb syllabus")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <Entypo name="dropbox" size={35} color="white" />
                <Text style={styles.bottomContentText} >Jamb syllabus </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Jamb subject combination")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <AntDesign name="CodeSandbox" size={35} color="white" />
                <Text style={styles.bottomContentText} >Jamb subject combination </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Exam history")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <FontAwesome5 name="parachute-box" size={34} color="white" />
                <Text style={styles.bottomContentText} >Exam history</Text>
              </>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <TouchableHighlight
        onPress={() => navigation.navigate("Group exam")}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={styles.bottomContentGroupExam}
      >
        <Text style={styles.bottomContentGroupExamText} >Group{"\n"}Exam</Text>
      </TouchableHighlight>
    </SafeAreaProvider>
  );
}


function AlertBox() {
  const userStatus = {
    loggedIn: false,
    appActivated: false,
  };

  const setUserStatus = (loggedIn, appActivated) => {
    userStatus.loggedIn = loggedIn;
    userStatus.appActivated = appActivated;
  };
  
   // Toggle the user Alert message using "true/false"
  setUserStatus(false, false); 
  let content;

  if (!userStatus.loggedIn) {
    content = (
    	<View style ={{ flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
    			   <Text style={styles.alertText}>
        				You are not logged in, please{" "}
        		   </Text>
        			<TouchableHighlight
          				onPress={() => console.log("Login Now")}
          				activeOpacity={0.9}
          				underlayColor="lightgray"
        			>
          				<Text style={styles.clickableText}>Login</Text>
        			</TouchableHighlight>
    	</View>
    );
  } 
  else if (!userStatus.appActivated) {
    content = (
    	<View style ={{ flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
    			   <Text style={styles.alertText}>
        				You have not activated your App.{" "}
        		   </Text>
        			<TouchableHighlight
          				onPress={() => console.log("Activate Now")}
          				activeOpacity={0.9}
          				underlayColor="lightgray"
        			>
          				<Text style={styles.clickableText}>Activate now</Text>
        			</TouchableHighlight>
    	</View>
    );
  } 
  else {
    content = <Text style={styles.alertText}>Welcome Ahmed Success!</Text>;
  }
  if (userStatus.loggedIn && userStatus.appActivated) {
    content = (
			<Text style={styles.alertText}>
				Hi, it is Two weeks to JAMB... Are you prepared? 
			</Text>
	)
  }
  return <View style={styles.alert}>{content}</View>;
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
  },
  midTop: {
    //borderWidth: 2,
  },
  alert: {
    //borderWidth: 2,
    padding: 4,
    marginBottom: 10,
    backgroundColor: "yellow",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
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
    backgroundColor: "gray",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow2Exam: {
    //borderWidth: 2,
    backgroundColor: "yellow",
    width: 115,
    height: 115,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3Btn: {
    //borderWidth: 2,
    backgroundColor: "gray",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  
  
  //Bottom
  bottom: {
    //borderWidth: 2,
    marginTop:20,
    marginBottom: 20,
  },
  bottomContent: {
    height: 54,
    //borderWidth: 2,
    marginBottom: 6,
    paddingLeft: 26,
    borderRadius: 5,
    borderBottomLeftRadius: 20,
    backgroundColor: "gray",
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  bottomContentText:{
  	fontSize: 16,
  	fontWeight: "bold",
  },
  boxesInnerText: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  bottomContentGroupExam:{
	backgroundColor: "yellow",
	width: 62,
	height: 62,
	borderRadius: 18,
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	bottom: 20,
	right: 10.6,	
},
  bottomContentGroupExamText:{
  	fontWeight: "bold",
  	fontSize: 15
  }, 
});


