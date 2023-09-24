import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React, {useState, useEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";


// Icons
import { AntDesign,
				FontAwesome,
				Entypo
				} from '@expo/vector-icons';


// My import
import Subject from "../../PQuestion/SubjectListDb.js";
import QuestButtonFromExam from "../../ExamMode/QuestButton.js";
import QuestButtonFromPQuestion from "../../PQuestion/QuestButton.js";



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function FriendlyMatch() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "FriendlyMatchMain">
    	<Stack.Screen name ='FriendlyMatchMain' component = {FriendlyMatchMain}/>
    </Stack.Navigator>
  )
}


function FriendlyMatchMain() {
  return (
    <View style ={{paddingHorizontal: 16,backgroundColor: "rgba(0,0,0,0.6)", flex: 1}}>
     	<HomeHeader/>
     	<TabBar/>
     	<BottomBtn/>
    </View>
  )
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
                      borderTopRightRadius: 22,
                      borderTopLeftRadius: 22
                  }]}>
      <Text style = {styles.homeHeaderText}>Friendly Match</Text>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{marginRight: -65,width: 60, height: 40, justifyContent: "center", alignItems: "center", }}
      >
      		<Entypo name="circle-with-cross" size={28} color="black" />
      </TouchableHighlight>
    </View>
  );
}



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
      <Tab.Screen name ="Subject" component={SelectBySubject}/>
      <Tab.Screen name ="Topic" component={SelectByTopic}/>
    </Tab.Navigator>
  );
}




function SelectBySubject(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView style ={{height: "100%", backgroundColor: "white",}}>
			<View style = {{backgroundColor: "white", flex: 1, 
										paddingLeft: insets.left + 10,
                      				  paddingRight: insets.right + 10,
                      				  paddingTop: insets.top + 12,
                      				  paddingBottom: insets.bottom + 160,
                      				  
										}}
			>
				<Text style = {{fontSize: 17, fontWeight: "600", color: "black", marginTop: 15, marginBottom: 3}}>
					Choose a subject:
				</Text>
				
				{/*Subject List*/}
				<View style  ={{marginHorizontal: -10}}>
					{Subject.map((eachSubject, index)=>(
						<QuestButtonFromExam key={index} subject= {eachSubject}/>
					))}
				</View>
			</View>
		</ScrollView>
	);
}


function SelectByTopic(){
  // Note: in the Online battle, it's a maximum of 10 Questions
  // this will keep the game going with more excitement 
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  return(
    <View>
      <ScrollView> 
		<Text style={{fontSize: 17, fontWeight: "500", marginTop:15, marginBottom: 25, paddingHorizontal: 10}}>Compete with your friend on a topic</Text>
		<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Choose a subject: </Text>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButtonFromPQuestion key={index} subject= {eachSubject} pickerType="Topic"/>
				))}
			</View>
	 </ScrollView>  
    </View>
  );
}


function BottomBtn() {
	const navigation= useNavigation();
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", bottom: -1, paddingHorizontal: 8, width: "100%" , backgroundColor: "lightgray", paddingTop: 8}}>
      <TouchableOpacity onPress={()=>navigation.navigate("OnlineBatGameScreen")} style={{ borderWidth: 2, backgroundColor: "gray", justifyContent: "center", alignItems: "center", paddingHorizontal: 26, paddingVertical: 10, borderRadius: 25 , width: "100%"}}>
        	<Text style={{ fontSize: 17, fontWeight: "bold" }}>Play</Text>
      </TouchableOpacity>
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
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});




