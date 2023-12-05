import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";



import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createNativeStackNavigator} from "@react-navigation/native-stack";


//icons
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

// My import
import AlertBox from "./AlertBox.js";



const JambScreenStack = createNativeStackNavigator();

export default function JambScreen(){
  return(
    <JambScreenStack.Navigator initialRouteName="JambHome" screenOptions={{animation: "none",}}>
      <JambScreenStack.Screen name="JambHome" component={JambHome} options={{headerShown: false, }}/>
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
            <AlertBox />
            
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Past questions")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, {borderTopLeftRadius: 50, borderBottomRightRadius: 30}]}
                >
                  <>
                    <FontAwesome5 name="scroll" size={28} color="black" />
                    <Text style={styles.midTopContentRowText}>JAMB{"\n"}Past{"\n"}Questions</Text>
                  </>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Custom test")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow1Btn, {borderTopRightRadius: 50, borderBottomLeftRadius: 30}]}
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
              	<View style ={{position: "absolute", top: -30, bottom: 0, height: 80, width: "80%"}}>
              		<View style ={{backgroundColor: "white", height: 60, width: 10, position: 'absolute', transform: [{ rotate: '150deg' }, { translateX: -80,  }], top: 40}}>
              		</View>
              		<View style ={{backgroundColor: "white", height: 60, width: 10, position: 'absolute', transform: [{ rotate: '-150deg' }, { translateX: 80,  }], top: 40, right: 0}}>
              		</View>
              	</View>
              
              	{/*Eyes */}
              	<View style ={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, width: 120}}>
              		<View style ={{height: 4, width: 14, backgroundColor: "black", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
              		</View>
              		<View style ={{height: 4, width: 14, backgroundColor: "black", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
              		</View>
              	</View>
              	{/*Closing - Eyes */}
                  <TouchableOpacity
                  	onPress={() => navigation.navigate("Exam mode")}
                  	activeOpacity={0.3}
                  	underlayColor="lightgray"
                 	 style={styles.midTopContentRow2Exam}
                  >
               	     <Text style={[styles.midTopContentRowText, {color: "black", fontSize: 22}]}>Exam{"\n"}Mode</Text>
                </TouchableOpacity>
                
                <View style ={{position: "absolute", bottom: -30, height: 80, width: "80%"}}>
              		<View style ={{backgroundColor: "white", height: 70, width: 10, position: 'absolute', transform: [{ rotate: '-140deg' }, { translateX: -5,  }], left: 60 }}>
              		</View>
              		<View style ={{backgroundColor: "white", height: 70, width: 10, position: 'absolute', transform: [{ rotate: '140deg' }, { translateX: 5,  }], right: 60 }}>
              		</View>
              	</View>
              </View>
              {/*Closing: Exam Mode*/}
              
              <View style={styles.midTopContentRow3}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Online battle")}
                  activeOpacity={0.3}
                  underlayColor="lightgray"
                  style={[styles.midTopContentRow3Btn, {borderTopRightRadius: 50, borderBottomLeftRadius: 30}]}
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
                  style={[styles.midTopContentRow1Btn, {borderTopLeftRadius: 50, borderBottomRightRadius: 30}]}
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



const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  midTop: {
    //borderWidth: 2,
    flex: 1,
  },

  //MidTopContent
  midTopContent: {
    //borderWidth: 2,
    flex: 1,
    //marginBottom: 14,
  },
  midTopContentRow1: {
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 1,
    //borderWidth: 2,
  },
  midTopContentRow2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 24,
  },
  midTopContentRow3: {
    justifyContent: "space-between",
    flexDirection: "row",
    //borderWidth: 2,
  },
  midTopContentRow1Btn: {
    //borderWidth: 2,
    backgroundColor: "#FAFAFA",
    width: 110,
    height: 110,
    borderRadius : 12,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow2Exam: {
    //borderWidth: 2,
    borderColor: "#8888",
    backgroundColor: "#6EAAF5",
    width: 120,
    height: 120,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    
  },
  midTopContentRow3Btn: {
    //borderWidth: 2,
    backgroundColor: "#FAFAFA",
    width: 110,
    height: 110,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  midTopContentRowText:{
  	color: "black",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
  },
  
  //BottomBtn 
  bottom: {
    //borderWidth: 2,
    marginTop:20,
    marginBottom: 80,
  },
  bottomContent: {
    height: 58,
    //borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 35,
    borderRadius: 35,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    //justifyContent: "flex-start",
  },
  bottomContentText:{
  	fontSize: 16,
  	fontWeight: "bold",
  },
  
  groupExam: {
    backgroundColor: "#6EAAF5",
	width: 68,
	height: 60,
	borderRadius: 5,
	borderTopRightRadius: 22,
	borderBottomLeftRadius: 22,
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	bottom:  12,
	left: 10.6,	
	zIndex: 1,
   },
   groupExamText: {
      fontWeight: "bold",
  	fontSize: 14,
  	//color: "white",
	},
  
  teacherNetwork:{
	backgroundColor: "#6EAAF5",
	width: 68,
	height: 60,
	borderRadius: 5,
	borderTopLeftRadius: 22,
	borderBottomRightRadius: 22,
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	bottom: 12,
	right: 10.6,	
	zIndex: 1,
},
  teacherNetworkText:{
  	fontWeight: "bold",
  	fontSize: 14,
  	//color: "white",
  }, 
});


