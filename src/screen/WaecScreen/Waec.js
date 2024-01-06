import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
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

// My imports


const WaecScreenStack = createNativeStackNavigator();

export default function WaecScreen (){
  return(
    <WaecScreenStack.Navigator initialRouteName="WaecHome" 
      screenOptions={{animation: "none",}}
    >
      <WaecScreenStack.Screen name="WaecHome" component={WaecHome} options={{headerShown: false}}/>
    </WaecScreenStack.Navigator>
  );
}


function WaecHome({navigation}) {
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
              paddingTop: insets.top + 15,
              paddingBottom: insets.bottom + 75,
            },
          ]}
        >
          <View style={styles.midTop}>
       
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
                <TouchableOpacity
	//			  onPress={() => navigation.navigate("Custom test")}
            onPress={() => navigation.navigate("WaecPastQuestions")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, { borderRadius: 34}]}
                >
                  <>
                    <MaterialCommunityIcons name="notebook-multiple" size={40} color="black" />
                    <Text style={styles.midTopContentRowText}>WAEC{"\n"}Past{"\n"}Questions</Text>
                  </>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("WaecPastQuest")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, { borderRadius: 34}]}
                >
                  <>
                    <MaterialCommunityIcons name="head-question-outline" size={45} color="black" />
                    <Text style={styles.midTopContentRowText}>NECO{"\n"}Past{"\n"}Questions</Text>
                  </>
                </TouchableOpacity>
              </View>
              
              <View style={[styles.midTopContentRow2, {marginBottom: 0,}]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Quiz mode")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow2Exam, {backgroundColor: "white"}]}
                >
                  <>
                    <MaterialIcons name="my-library-books" size={45} color="black" />
                    <Text style={styles.midTopContentRowText}>Customised{"\n"}Test</Text>
                  </>
                </TouchableOpacity>
              </View>
              
              <View style={styles.midTopContentRow2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Quiz mode")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow2Exam}
                >
                  <>
                    <MaterialCommunityIcons name="head-question-outline" size={45} color="black" />
                    <Text style={styles.midTopContentRowText}>Quiz{"\n"}Mode</Text>
                  </>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
          <View style={styles.bottom}>
            
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
                <Text style={styles.bottomContentText} >WAEC syllabus </Text>
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
    </View>
    </SafeAreaProvider>
  );
}






const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
  },
  midTop: {
    //borderWidth: 2,
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
    alignItems: "center",
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
    backgroundColor: "white",
    width: 125,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow2Exam: {
    borderWidth: 2,
    borderColor: "#8888",
    backgroundColor: "white",
    width: 130,
    height: 130,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3Btn: {
    //borderWidth: 2,
    backgroundColor: "#FAFAFA",
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRowText:{
  	color: "black",
      fontSize: 16,
      textAlign: "center",
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
  
  
});


