import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
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
import QuestButton from "./QuestButton.js";
import ExamInstructionModal from "./ExamInstructionModal.js";
import ExamShowQuestion from "./ExamShowQuestion";
import Result from "./Result.js";
import Subject from "../PQuestion/SubjectListDb.js";
import ReadMoreModal from "./ReadMoreModal.js";
import subjects from  "../../../SubjectDb.js";



const Stack = createNativeStackNavigator();

export default function ExamMode() {
  return (
<<<<<<< HEAD
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }}>
=======
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}} initialRouteName = "Home">
>>>>>>> FirstBranch
      <Stack.Screen name ='Home' component = {Home}/>
      <Stack.Screen name ='ExamShowQuestion' component = {ExamShowQuestion}/>
      <Stack.Screen name ='Result' component = {Result}/>
    </Stack.Navigator>
  )
}


function Home(){
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
        style = {{width: 60, height: 40, justifyContent: "center"}}
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
  return(
    <View>
      <ScrollView> 
			<ReadMoreBtn/>
			<Text style = {{fontSize: 18, fontWeight: "bold" ,marginBottom: 4, paddingLeft: insets.left + 10}}>Select any three subjects: </Text>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject}/>
				))}
			</View>
	   </ScrollView>
    </View>
  );
}

function ReadMoreBtn(){
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
    BackHandler.addEventListener('hardwareBackPress', closeModal);
  };

  const closeModal = () => {
    setModalVisible(false);
    BackHandler.removeEventListener('hardwareBackPress', closeModal);
    return true;
  };
 
	return (
		<View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center", justifyContent: "center",marginVertical: 14,paddingLeft: 10,}}>
				<Text style = {{fontSize:16, fontWeight: "bold"}}>Attention: </Text>
				<Text style = {{fontSize: 16}}>
					This is a strict Exam
				</Text>
				 <TouchableOpacity onPress = {openModal}>
					 <Text style ={{color: "blue"}}>{" "}...Read More</Text>
				</TouchableOpacity>
				<ReadMoreModal visible={modalVisible} onClose={closeModal}/>
			</View>
	);
}

function ContinueButton(){
	const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => {
    	setModalVisible(true);
    };

    const closeModal = () => {
    	setModalVisible(false);
    };
	return(
	 <>
		<TouchableHighlight 
		 		onPress={showModal} 		
	     		underlayColor="white"
			 	activeOpacity={0.9}
				 style ={styles.continueButton}
	     >
              <Text style= {styles.continueButtonText}>
					Continue 
			  </Text>      		
     	</TouchableHighlight>     
     <ExamInstructionModal visible={modalVisible} onClose={closeModal}/>
   </>                
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





