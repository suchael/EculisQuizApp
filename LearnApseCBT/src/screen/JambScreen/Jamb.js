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

function AlertBox() {
  const userStatus = {
    loggedIn: false,
    appActivated: false,
  };

  const setUserStatus = (loggedIn, appActivated) => {
    userStatus.loggedIn = loggedIn;
    userStatus.appActivated = appActivated;
  };

  setUserStatus(true, false); // Example user status
  let content;

  if (!userStatus.loggedIn) {
    content = (
      <Text style={styles.alertText}>
        You are not logged in. Please{" "}
        <TouchableHighlight
          onPress={() => console.log("Login")}
          activeOpacity={0.9}
          underlayColor="lightgray"
        >
          <Text style={styles.clickableText}>Login</Text>
        </TouchableHighlight>
      </Text>
    );
  } 
  else if (!userStatus.appActivated) {
    content = (
      <Text style={styles.alertText}>
        Your App has not been activated.{" "}
        <TouchableHighlight
          onPress={() => console.log("Activate Now")}
          activeOpacity={0.9}
          underlayColor="lightgray"
        >
          <Text style={styles.clickableText}>Activate now</Text>
        </TouchableHighlight>
      </Text>
    );
  } 
  else {
    content = <Text style={styles.alertText}>Welcome Success!</Text>;
  }
  if (userStatus.loggedIn && userStatus.appActivated) {
    content = <Text style={styles.alertText}>Two weeks to JAMB</Text>;
  }
  return <View style={styles.alert}>{content}</View>;
}

function JambScreen(){
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
                  style={styles.midTopContentRow1PQuestion}
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
                  style={styles.midTopContentRow1CustomisedTest}
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
                  style={styles.midTopContentRow3OnlineBattle}
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
                  style={styles.midTopContentRow3Quiz}
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

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
  },
  midTop: {
    borderWidth: 2,
  },
  alert: {
    borderWidth: 2,
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
    paddingBottom: 2,
  },

  //MidTopContent
  midTopContent: {
    borderWidth: 2,
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
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  midTopContentRow3: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 2,
  },
  midTopContentRow1PQuestion: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow1CustomisedTest: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  midTopContentRow2Exam: {
    borderWidth: 2,
    backgroundColor: "yellow",
    width: 115,
    height: 115,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3OnlineBattle: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3Quiz: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },  
  //Bottom
  bottom: {
    borderWidth: 2,
    marginTop:20,
    marginBottom: 20,
    borderColor: "red",
  },
  bottomContent: {
    height: 54,
    borderWidth: 2,
    marginBottom: 6,
    paddingLeft: 26,
    borderRadius: 5,
    borderBottomLeftRadius: 20,
    backgroundColor: "orange",
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  bottomContentText:{
  	fontSize: 16,
  	fontWeight: "bold",
  },
  clickableText: {
    textDecorationLine: "underline",
    fontSize: 13,
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
	right: 20,	
},
  bottomContentGroupExamText:{
  	fontWeight: "bold",
  }, 
});

export default JambScreen;
