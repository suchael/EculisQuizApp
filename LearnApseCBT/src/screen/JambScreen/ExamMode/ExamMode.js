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

import ReadMore from "../PQuestion/ReadMore.js";
import QuestButton from "./QuestButton.js";
import Subject from "../PQuestion/SubjectListDb.js";
import subjects from  "../../../SubjectDb.js";



const Stack = createNativeStackNavigator();

export default function ExamMode() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component = {Home}/>
    </Stack.Navigator>
  )
}


function Home(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <SelectByGeneral/>
       <ContinueButton/>
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
                      borderBottomWidth: 2,
                      borderBottomColor: "gray",
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{borderWidth:2, width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Exam{"  "}Mode</Text>
    </View>
  );
}

function SelectByGeneral(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  const instruction = "JAMB CBT era started in 2015, and as a result, JAMB halted the issuance of past questions from that year onwards. Much effort has been put together by teachers all over Nigeria, as well as students who sat for the exam in previous years, to compile questions from 2015 and above.\n"
  return(
    <View>
      <ScrollView> 
		<ReadMore  text = {instruction} maxLength={25} />
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject}/>
				))}
			</View>
			
	   </ScrollView>
    </View>
  );
}

function ContinueButton(){
	return(
		<TouchableHighlight 
		 		onPress={()=>{}} 		
	     		underlayColor="white"
			 	activeOpacity={0.9}
				 style ={styles.continueButton}
	     >
              <Text style= {styles.continueButtonText}>
					Continue 
			  </Text>      		
     	</TouchableHighlight>                     
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
    fontWeight: "500",
  },
  
  // Study Button
 continueButton:{
 	height: 42, 
	 borderWidth:2, 
	 backgroundColor: "gray", 
	 justifyContent: "center", 
	 alignItems: "center", 
	 position: "absolute", 
	 bottom:0, 
	 width: "100%", 
	 borderRadius: 24
  },
  continueButtonText: {
  	fontSize: 17,
  	fontWeight: "300",
  	color: "white",
   },
});





