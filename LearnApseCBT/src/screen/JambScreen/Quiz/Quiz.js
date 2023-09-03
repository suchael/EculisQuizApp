import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';

import React , {useState}from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { AntDesign } from '@expo/vector-icons';


// my import
import Subject from "../PQuestion/SubjectListDb.js";
import TruncatedText from "../PQuestion/TruncatedText.js";
import QuizQuestionScreen from "./QuizQuestionScreen.js"; 

const Stack = createNativeStackNavigator();


export default function Quiz() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='QuizHome' component = {QuizHome}/>
      <Stack.Screen name='QuizQuestionScreen' component = {QuizQuestionScreen}/>
    </Stack.Navigator>
  )
}


function QuizHome(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <Main/>
      <BottomBtn/>
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
                      borderColor: "gray",
                  }]}>
      <TouchableOpacity 
        onPress={() => navigation.goBack() }
        activeOpacity={0.5}
        underlayColor="red"
        style = {{width: 60, height: 40, borderRadius: 20, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableOpacity>
      <View style ={{flex:1, justifyContent: "center", alignItems: "center",}}>
      	<Text style = {styles.homeHeaderText}>Quiz{"  "}Mode</Text>
      </View>
    </View>
  );
}



function Main(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  return(
    <View>
      <ScrollView> 
		<View style = {{paddingLeft: insets.left + 10}}>
			<View style = {{justifyContent: "center", alignItems: "center"}}>
				<Text style ={{fontSize: 16, fontWeight: "500", marginVertical: 10}}>Welcome to offline Quiz</Text>
		    	<Text style ={{fontSize: 18, fontWeight: "bold", marginBottom: 6, marginTop: 8, }}>Pick a subject: </Text>
			</View>
		</View>
			<View style = {{paddingBottom: 110}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject}/>
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



function BottomBtn (){
	const navigation = useNavigation();
	return(
			 <TouchableHighlight 
		 		onPress={()=> navigation.navigate("QuizQuestionScreen")}
	     		underlayColor="lightgray"
		 		style={styles.studyButton}
	  	   >
         		<Text style={ styles.studyButtonText }>
              		Study Now
         	 	</Text>
      	  </TouchableHighlight>
	);
}


// Question Buttons
function QuestButton({subject}){
	const insets = useSafeAreaInsets();
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = ()=> setIsToggleOn(!isToggleOn);
	
	// PickerModal Visibility 
	const [modalVisible, setModalVisible] = useState(false);
	const handlePickerToggle = () => setModalVisible(!modalVisible);
	
	return(
		<View style = {{
									paddingLeft: insets.left + 10,
      							  paddingRight: insets.right + 10,
      							  flex:1,
		}}>
			<View style = {[styles.container, {backgroundColor: isToggleOn? "white": "#999"}]}>
		  	<View style = {styles.containerCircle}>
             	<Text style = {styles.containerCircleText}>{subject.name[0]}</Text>
          	</View>
		  	<TouchableOpacity 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {styles.buttonContainer}
	      	>
              	<View style = {styles.buttonContainerRect}>
              		<Text style = {[styles.buttonRectText, {color: isToggleOn? "black": "white"}]}>
						<TruncatedText text = {subject.name} maxLength = {24}/>
					 </Text>
              		<View style = {styles.switchContainer}>
              			<View style = {{width: 16, height: 16, borderRadius: 8, backgroundColor: isToggleOn ?  "green": "white"}}>
              			</View>
              		</View>
              	</View>
          	</TouchableOpacity>                     
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
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: "-20%"
  },
  
  // Study Button
 studyButton:{
 	height: 42,
 	backgroundColor: "gray",
 	borderRadius: 18,
 	justifyContent: "center",
     alignItems: "center",
     position: "absolute",
    bottom:  0, 
	left: 10,
	right: 10,
    alignSelf: "center",
    
     
  },
  studyButtonText: {
  	fontSize: 17,
  	fontWeight: "300",
  	color: "white",
   },
   
   container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
		borderWidth: 2,
		backgroundColor: "lightgray",
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 32,
		borderBottomLeftRadius: 32,
		
	},
	buttonContainer:{
		flex:1,
		flexDirection: "row",
		flexDirection: "space-between",
		paddingTop: 10.8,
		paddingBottom: 10.8, 
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 32,
		borderBottomLeftRadius: 32,
	},
	containerCircle:{
		borderRightWidth: 3,
		height: 50,
		width:  38,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	containerCircleText:{
		fontSize: 19,
	},
	buttonContainerRect:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30,
	},
	buttonRectText:{
		fontSize: 18,
	},
	
	// Switch Container 
	switchContainer:{
		padding: 2,
		borderRadius: 20,
		marginRight: 20, 
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2.4,
		borderColor: "#666"
	},
});





