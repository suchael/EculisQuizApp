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
import CommentSection from "./CommentSection.js";



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component = {Home}/>
      <Stack.Screen name='Show question list' component = {ShowQuestionList}/>
  	<Stack.Screen name='Explanation' component = {Explanation}/>
  	<Stack.Screen name='Analysis' component = {Analysis}/>
  	<Stack.Screen name='ErrorQuestion' component = {ErrorQuestion}/>
  	<Stack.Screen name='CommentSection' component = {CommentSection}/>
    </Stack.Navigator>
  )
}


function Home(){
  const insets = useSafeAreaInsets();
  const navigation = useNavigation ()
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <SelectBySubject/>
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
                      paddingBottom: insets.bottom + 8,
                      borderBottomWidth:2,
                      borderColor: "#666",
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


function SelectBySubject(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  const instruction = "The length of questions from 2015 and beyond may vary. JAMB CBT era began in 2015, leading to JAMB discontinuing the issuance of past questions from that year onward. Teachers all over Nigeria have collaborated to compile questions from 2015 and beyond while keeping in mind the structure of the exam syllabus.\n"
  const greetings  = "\nGreetings to all the Nigerian teachers out there. You all are second to none."
  return(
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
		
		<View style ={{borderWidth: 2, borderColor: "#888", borderRadius: 5, backgroundColor: "lightgray", paddingHorizontal: 8, paddingVertical: 12, marginVertical: 20, marginHorizontal: 10}}>
				<Text style = {{fontSize: 17, fontWeight:"500", marginBottom: 5}}>
					Internet connection is not required.
				</Text>
				<ReadMore  text = {instruction} msg = {greetings} maxLength={25} />
		</View>
		<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select a subject: </Text>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject} pickerType= "Year" index={index}/>
				))}
			</View>
	 </ScrollView>  
		<View style = {{
			paddingLeft: insets.left + 10,
      	  paddingRight: insets.right + 10,
      	  borderWidth: 2
		}}>
			 
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
 	height: 46,
 	backgroundColor: "black",
 	borderRadius: 25,
 	justifyContent: "center",
     alignItems: "center",
     position: "absolute",
    bottom:  10, // Adjust this value to control the distance from the bottom
    left: 15,
    right: 15,
	alignSelf: "center",
    
     
  },
  studyButtonText: {
  	fontSize: 17,
  	fontWeight: "300",
  	color: "white",
   },
});





