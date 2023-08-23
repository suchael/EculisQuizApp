
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';

// My import
import subjects from  "../../../SubjectDb.js";


export default function Explanation() {
   const [isHeaderShown, setIsHeaderShown] = useState(true);
  return (
    <View style={styles.container}>
			<MainContainer/>
    </View>
  );
}


function MainContainer(){
	const insets = useSafeAreaInsets();
	return(
		<View style = {styles.mainContainer}>
			<ScrollView >
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 14,
                  	paddingBottom: insets.bottom + 100,             	
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
			<Header/>
			<PrevBtn/>
			<OkButton/>
			<NextBtn/>
		</View>
	);
}


function QuestionInterface() {
  return (
    <View style={styles.questionInterfaceMain}>
        <QuestionInterfaceContainer/>
    </View>
  );
}


function QuestionInterfaceContainer({ind}){
	const navigation = useNavigation();
	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionAndExplanationScreen}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {styles.questionScreenNumber}>
						Question {ind}
					</Text>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			<View style = {styles.optionMain}>
				<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						A{". "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						B{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </View>
				<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						C{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						D{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>			
         	   </View>
			</View>
			<View style = {[styles.questionAndExplanationScreen, {marginTop:18}]}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {[styles.questionScreenNumber, {fontSize:20}]}>
						Explanation 
					</Text>
				</View>
				<Text style = {styles.optionContainerOptions}>
					Tell me if I should use redux or not and tell me the benefit of either of them

I'm creating an app just like the Myschool cbt app
Okay, this app has news features (students can read an comment on news), this app has teacher section (teachers can search for school jobs and apply), this app has quiz mode, this app has online battle (students can compete in quiz with other people just like multiplayer online game) students can take online exam (a group exam link is created and shared to students, they can sit for the exam from the comfort of their home, the creator o the group link can see all scores, students can see their individual scores) there's exam mode(students take exam and scores re posted online to make them serious), there is past question mode
Note: in any exam mode or past question mode, the questions generated can be done by topic (students can answer questions by topic)
				</Text>
				
				<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Error")}} 		
	     					underlayColor="white"
			 				activeOpacity={0.9}
							style = {{borderWidth:2, padding: 3, marginTop: 20, justifyContent: "center", flex:1, alignItems: "center", borderRadius: 10, backgroundColor: "lightgray"}}
	      			>
              			<Text style= {{fontSize: 17, fontWeight: "600", padding: 2}}>   
								Post or View other answers (5)    
              			</Text>
          	</TouchableHighlight>              
				
				
			</View>
			<View style = {styles.screenContBottomBtn}>
				  	<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Error")}} 		
	     					underlayColor="lightgray"
			 				activeOpacity={0.9}
	      			>
              			<Text style= {styles.screenBottomBtnText}>   
								Error?      
              			</Text>
          			</TouchableHighlight>              
            		  <TouchableHighlight 
		 				onPress={()=>{}}
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
	      			>
              			<Text style= {styles.screenBottomBtnText}>
              					Analysis 
              			</Text>
          			</TouchableHighlight>              
			</View>
		</View>
	);
}


function Header(){
	const insets = useSafeAreaInsets();
	return(
			<View style={{flexDirection: "row", 
				  justifyContent: "space-between",
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingBottom: insets.bottom,
                  height:  12,
                  width: "100%",
                  position: "absolute",
                  top:0,
                  backgroundColor: "lightgray"
			}}>
			</View>
	);
}


function PrevBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {left: 10}]}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
	);
}

function OkButton(){
	const windowWidth = Dimensions.get('window').width;
	const navigation = useNavigation();
	return(
		<TouchableHighlight
        			onPress={() => navigation.goBack()}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {right: windowWidth * 0.375}]}
      	>
        	<Text style = {{fontSize: 16, fontWeight: "bold"}}>Ok</Text>
      	</TouchableHighlight>  
	);
}

function NextBtn (){
	return(
		<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {right: 10}]}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
	);
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homeHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderColor: "#999",
    borderBottomWidth:2,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "lightblue",
  },
 
  // Question Interface
  questionInterfaceMain: {
  	//borderWidth : 2, 
	  marginBottom: 20,
   },
   questionInterfaceContainer: {
   	backgroundColor: "white",
   	borderWidth: 2, 
	   padding:4, 
	   //borderColor: "blue", 
	   borderRadius: 15, 
	   marginBottom: 35
	},
	questionAndExplanationScreen: {
		borderWidth:2, 
	    padding: 8, 
		//borderColor: "red", 
		flexDirection: "column", 
		borderRadius: 15,  
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "center", 
		alignItems: "center",
	},
	questionScreenNumber: {
		fontSize: 13, 
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
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		paddingHorizontal: 8 ,
		paddingVertical:4,
		borderWidth: 2, 
		borderRadius: 8, 
		marginTop: 3, 
		backgroundColor: "white" 
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
	},
  screenContBottomBtn: {
  	  borderWidth: 2, 
		marginTop: 40, 
		marginBottom: 5,
		paddingHorizontal:10, 
		flexDirection: "row", 
		justifyContent: "space-between", 
		borderRadius: 4
	},
	screenBottomBtnText: {
		textDecorationLine: "underline", 
		fontSize: 17, 
		fontWeight: "bold", 
		paddingVertical: 2
	},
  
  // Bottom Buttons
	nextAndPrevBtn: {
		borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 10,
		position: "absolute",
		bottom: 0,
   },
});