import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableHighlight } from 'react-native';

import React , {useState}from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { AntDesign } from '@expo/vector-icons';


// my import
import Subject from "./SubjectListDb.js";
import QuestButton from "./QuestButton.js";
import ShowQuestionList from "./ShowQuestionList.js";
import Explanation from  "./Explanation.js";
import Analysis from "./Analysis.js";
import ErrorQuestion from "./ErrorQuestion.js";
import ReadMore from "./ReadMore.js";
import subjects from  "../../../SubjectDb.js";



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component = {Home}/>
      <Stack.Screen name='Show question list' component = {ShowQuestionList}/>
  	<Stack.Screen name='Explanation' component = {Explanation}/>
  	<Stack.Screen name='Analysis' component = {Analysis}/>
    </Stack.Navigator>
  )
}


function Home(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <TabBar/>
    </View>
  );
}

function HomeHeader(){
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return(
    <View style = {[styles.homeHeader, 
                    {
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 12,
                      paddingBottom: insets.bottom + 4,
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{borderWidth:2, width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>JAMB{"  "}Past{"  "}Questions</Text>
    </View>
  );
}

// Top Tab Bar
function TabBar(){
  return(
    <Tab.Navigator initialRouteName="General"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#777",
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "none",
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 40, // Adjust the height of the tab bar
          borderBottomWidth: 0, // Remove top border
          backgroundColor: "lightgray",
        },
        tabBarIndicatorStyle: {
          bottom: 0, // Adjust the position of the indicator
          backgroundColor: "black",
          height: 3,
        },
        animation: "none",
    }}>
      <Tab.Screen name ="General" component={SelectByGeneral}/>
      <Tab.Screen name ="Topic Based" component={SelectByTopic}/>
    </Tab.Navigator>
  );
}


function SelectByGeneral(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  const instruction = "JAMB CBT era started in 2015, and as a result, JAMB halted the issuance of past questions from that year onwards. Much effort has been put together by teachers all over Nigeria, as well as students who sat for the exam in previous years, to compile questions from 2015 and above.\n"
  const greetings  = "\nGreetings to all the Nigerian teachers out there. You all are second to none."
  return(
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
		<ReadMore  text = {instruction} msg = {greetings} maxLength={25} />
		<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select a subject: </Text>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject} pickerType= "Year"/>
				))}
			</View>
	 </ScrollView>  
		<View style = {{
			paddingLeft: insets.left + 10,
      	  paddingRight: insets.right + 10,
      	  borderWidth: 2
		}}>
			 <TouchableHighlight 
		 		onPress={()=> navigation.navigate("Show question list")}
	     		underlayColor="lightgray"
		 		style={styles.studyButton}
	  	   >
         		<Text style={ styles.studyButtonText }>
              		Study Now
         	 	</Text>
      	  </TouchableHighlight>
		</View>
    </View>
  );
}



function SelectByTopic(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  return(
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
		<Text style={{fontSize: 17, fontWeight: "500", marginTop:15, marginBottom: 25, paddingHorizontal: 10}}>Study By Topic</Text>
		<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select a subject: </Text>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject} pickerType="Topic"/>
				))}
			</View>
	 </ScrollView>  
		<View style = {{
			paddingLeft: insets.left + 10,
      	  paddingRight: insets.right + 10,
      	  borderWidth: 2
		}}>
			 <TouchableHighlight 
		 		onPress={()=> navigation.navigate("Show question list")}
	     		underlayColor="lightgray"
		 		style={styles.studyButton}
	  	   >
         		<Text style={ styles.studyButtonText }>
              		Study Now
         	 	</Text>
      	  </TouchableHighlight>
		</View>
    </View>
  );
}



const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
  
  // Study Button
 studyButton:{
 	height: 42,
 	backgroundColor: "green",
 	borderRadius: 18,
 	justifyContent: "center",
     alignItems: "center",
     position: "absolute",
    bottom:  2, // Adjust this value to control the distance from the bottom
    alignSelf: "center",
    width:  "100%",
     
  },
  studyButtonText: {
  	fontSize: 17,
  	fontWeight: "300",
  	color: "white",
   },
});





