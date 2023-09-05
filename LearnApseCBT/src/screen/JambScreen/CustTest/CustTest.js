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
import ReadMore from "./ReadMore.js";
import subjects from  "../../../SubjectDb.js";
import NumberPickerModal from "./NumberPickerModal.js";
import MinAndHourModal from "./MinAndHourModal.js"; 


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component = {Home}/>
      <Stack.Screen name='Show question list' component = {ShowQuestionList}/>
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
      <Text style = {styles.homeHeaderText}>Customised{"  "}Test</Text>
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
  const insets = useSafeAreaInsets();
  const instruction= "Customise this Test to your preference";
  return(
    <View>
      	<ScrollView> 
			<Text style ={{fontSize: 16.5, fontWeight: "500", paddingHorizontal: 10,  marginTop: 30, marginBottom: 5}}>{instruction}</Text>
			<TopBtn/>
			<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select one or more subjects: </Text>
			<View style = {{paddingBottom: 140}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject={eachSubject} pickerType="Year" />
				))}
			</View>
	    </ScrollView>  
		<BottomBtn/>
    </View>
  );
}

function TopBtn(){
	return (
		<View style={{ paddingVertical: 2, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "transparent", gap:20, marginBottom: 40}}>
					{/*Hour*/}
					<MinAndHourModal Type="Hour"/>
					{/*Minute*/}
					<MinAndHourModal Type= "Min"/>
		</View>
	);
}

function BottomBtn(){
	const navigation = useNavigation(); 
	return(
		<View style ={{ paddingHorizontal: 5,position: "absolute", bottom: 0, left: 10, right: 10, backgroundColor: "transparent"}}>
			<TouchableHighlight 
		 		onPress={()=> navigation.navigate("Show question list")}
	     		underlayColor="lightgray"
		 		style={styles.studyButton}
	  	   >
         		<Text style={ styles.studyButtonText }>
              		Continue (4)
         	 	</Text>
      	  </TouchableHighlight>
		</View>
	);
}


function SelectByTopic(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  return(
    <View>
      <ScrollView> 
		<Text style ={{fontSize: 16.5, fontWeight: "500", paddingHorizontal: 10,  marginTop: 30, marginBottom: 5}}>You can customise this Test by  specific Topic</Text>
		<TopBtn/>
		<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select one or more subjects and a topic: </Text>
			<View style = {{paddingBottom: 140}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject} pickerType="Topic" pickerMode="Number"/>
				))}
			</View>
	 </ScrollView>  
		<BottomBtn/>
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
 	backgroundColor: "white",
 	borderRadius: 18,
 	justifyContent: "center",
    alignItems: "center",
    width:  "100%",
    borderWidth: 2,
     
  },
  studyButtonText: {
  	fontSize: 17,
  	fontWeight: "600",
  	color: "black",
   },
});





