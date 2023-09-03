import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React, {useState} from 'react';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import { AntDesign,
				FontAwesome,
				Entypo,
				Ionicons
				} from '@expo/vector-icons';

//My import
import QuizScoreModal from "./QuizScoreModal.js";

export default function QuizQuestionScreen(){
	return(
		<View style ={styles.homeContainer}>
			<Main/>
			<ContinueButton/>
		</View>
	);
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView style = {{
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 8,
                      paddingBottom: insets.bottom + 8,
                      
                  }}
		>
			<ScoreBoard/>
			<QuizQuestion/>
		</ScrollView>
	);
}

function ScoreBoard(){
  const navigation = useNavigation();
  return(
    <View style ={{borderWidth: 2, marginTop: 4, padding: 4, borderRadius: 10}}>
      <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
      	{/*Left Score board*/}
      	<View style ={{borderWidth: 2, width: "100%", borderRadius: 10, paddingVertical: 4, paddingHorizontal: 6,justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white"}}>
      		<Text style ={{fontSize:18, fontWeight: "bold"}}>You</Text>
      
      		{/*Progress Bar*/}
      		<View style ={{marginVertical: 5}}>
      			<ProgressBarIndicator/>
      		</View>
      
      		<Text style ={{fontSize: 17, fontWeight: "500"}}>
					<Text style ={{fontWeight: "600"}}>Score: </Text> 
					5/100
			</Text>
      	</View>
      </View>
    </View>
  );
}

function ProgressBarIndicator(){
	return(
		<View style ={{borderWidth: 2, borderRadius: 3, height: 15, width:  180}}>
			{/*Designing the Progress bar in Progress*/}
		</View>
	);
}



function QuizQuestion(){
	return(
		<View style ={{padding: 4,  marginTop: 20 }}>
			<Timer/>
			<QuizQuestionInterface ind= "1"/>
		</View>
	);
}



function Timer(){
	return(
	<View style = {{justifyContent: "center", alignItems: "center"}}>
		<View style = {{backgroundColor: "gray", width: 100, padding: 4, borderRadius: 4, flexDirection: "row", gap: 5, justifyContent: "center", alingitems: "center"}}>
      		<Ionicons name="md-alarm-outline" size={26} color="black" style = {{marginLeft: -4}}/>
      		<Text style = {{fontSize:20, fontWeight: "bold"}}>01:00</Text>
        </View>
     </View>
	);
}





function QuizQuestionInterface({ind}){
	const navigation = useNavigation()
	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionScreen}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {styles.questionScreenNumber}>
						Question {ind}/10
					</Text>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			<View style = {styles.optionMain}>
				<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						A{". "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>			
         	   </TouchableOpacity>
         	<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						B{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </TouchableOpacity>
				<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						C{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </TouchableOpacity>
         	<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						D{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>			
         	   </TouchableOpacity>
			</View>
		</View>
	);
}


function ContinueButton() {
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = ()=>{
  	setModalVisible(true);
  }
  
  const closeModal = ()=>{
  	setModalVisible(false);
  }
  
  return (
  <>
    <TouchableOpacity
	  onPress = {openModal}
      style={{
        backgroundColor: "gray",
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20, // Adjust this margin as needed
        position: "absolute", // Fixed position
        bottom: 1, // Adjust the bottom distance as needed
        left: 0, // Adjust the left distance as needed
        right: 0, // Adjust the right distance as needed
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Continue</Text>
    </TouchableOpacity>
    <QuizScoreModal visible = {modalVisible} onClose ={closeModal}/>
  </>
  );
}




const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
  },
  
    // Question Interface
  questionInterfaceMain: {
  	//borderWidth : 2, 
	marginBottom: 60,
	marginTop: 10
   },
   questionInterfaceContainer: {
   	backgroundColor: "transparent",
   	borderWidth: 2, 
	   padding:4, 
	   //borderColor: "blue", 
	   borderRadius: 15, 
	   marginBottom: 50,
	   paddingBottom: 10,
	},
	questionScreen: {
		borderWidth:2, 
	    padding: 8, 
		//borderColor: "red", 
		flexDirection: "column", 
		borderRadius: 15,  
		backgroundColor: "white", 
		marginBottom: 12,
	},
	questionScreenNumberView: {
		marginTop: -2, 
		marginBottom: 4,
		justifyContent: "center", 
		alignItems: "center",
	},
	questionScreenNumber: {
		fontSize: 15, 
		fontWeight: "bold", 
		borderWidth: 2, 
		paddingLeft: 6, 
		paddingRight: 2, 
		paddingTop: 1, 
		borderRadius: 5
	},
   questionScreenQuestionContent: {
   	fontSize: 16.7, 
	   fontWeight: "500", 
		//color: "black",
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		paddingHorizontal: 8 ,
		paddingVertical: 4,
		borderWidth: 2, 
		borderRadius: 10, 
		marginBottom: 6, 
		backgroundColor: "white" ,
		minHeight: 50
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
  
});








