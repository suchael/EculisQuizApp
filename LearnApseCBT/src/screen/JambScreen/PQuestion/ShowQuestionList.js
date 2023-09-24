
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';

// My import
import subjects from  "../../../SubjectDb.js";
import PageSelectorModal from "./PageSelectorModal.js";

function ShowQuestionList() {
   const [isHeaderShown, setIsHeaderShown] = useState(true);
  return (
    <View style={styles.container}>
    		<HomeHeader/>
			<MainContainer/>
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
                  paddingBottom: insets.bottom + 10,
             }]}
	>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "flex-start", padding:0}}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{marginLeft: -4}} />
      </TouchableHighlight>
      <View style = {{flexDirection: "column", }}>
      	<Text style = {styles.homeHeaderText}>English Language</Text>
      	<Text style = {{fontSize: 15, fontWeight: "900"}}>JAMB: 2004 </Text>
      </View>
      <PageSelectorModal/>
    </View>
  );
}



function MainContainer(){
	const insets = useSafeAreaInsets();
	
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    };
	return(
		<View style = {styles.mainContainer}>
			<ScrollView >
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 10,
                  	paddingBottom: insets.bottom + 100,             	
                }}
				>
					{/*Toggle Switch*/}
					<View style = {[styles.topBtnTouchables, {paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5, marginBottom: 14}]}>
      			  	<View style = {styles.topBtnTouchablesView}>
      					<Text style ={styles.topBtnText}>Show All Answers</Text>
      						<View style = {{height: 34, width: 80, justifyContent: "center", alignItems: "center", }}>
      							<Switch  style={{borderWidth: 2, borderColor: "red", transform: [{ scaleX: 1.4}, { scaleY: 1.4}]}}
        								trackColor={{ false: "#767577", true: "white" }}
        								thumbColor={isEnabled ? "black" : "gray"}
        								ios_backgroundColor="#3e3e3e"
        								onValueChange={toggleSwitch}
        								value={isEnabled}
      							/>
							</View>		 
						</View>
      			  </View>
      		 	{/*Closing: Toggle Switch*/}
      
					<QuestionInterface/>
				</View>
			</ScrollView>
			<BottomBtn/>
		</View>
	);
}



function QuestionInterface() {
  return (
    <View style={styles.questionInterfaceMain}>
      {subjects.map((sub, index) => (
        <QuestionInterfaceContainer key={index}  ind = {index+1}/>
      ))}
    </View>
  );
}


function QuestionInterfaceContainer({ind}){
	const navigation = useNavigation()
	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionScreen}>
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
					<Text style = {{fontSize: 18, fontWeight: "bold"}}>
						A{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 18, fontWeight: "bold"}}>
						B{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </View>
				<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 18, fontWeight: "bold"}}>
						C{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 18, fontWeight: "bold"}}>
						D{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>			
         	   </View>
			</View>
			<View style = {styles.screenContBottomBtn}>
				  	<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Analysis")}} 		
	     					underlayColor="lightgray"
			 				activeOpacity={0.9}
							style ={{height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>   
								Analysis      
              			</Text>
          			</TouchableHighlight>              
            		  <TouchableHighlight 
		 				onPress={()=>{navigation.navigate("Explanation")}} 		
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
						style ={{height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>
              					Explanation 
              			</Text>
          			</TouchableHighlight>              
			</View>
		</View>
	);
}




function BottomBtn(){
	return (
		<View style = {{ position: "absolute", bottom: 0, left: 22, right: 22, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
      	<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
		</View>
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
  	backgroundColor: "lightgray",
  },
  
  
  // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 8, 
      borderBottomRightRadius: 8,
      marginLeft: 10,
      backgroundColor: "gray",
  },
  topBtnTouchables: {
  	backgroundColor: "#999",
	  padding: 3, 
	  alignItems: "center", 
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  gap: 14, 
	  paddingHorizontal: 6,
  },
  topBtnText: {
  	fontSize: 17, 
	  fontWeight: "600", 
	  color:"#222"
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
	   borderColor: "#999", 
	   borderRadius: 15, 
	   marginBottom: 35
	},
	questionScreen: {
		borderWidth:2, 
		borderColor: "#999", 
	    padding: 8, 
		flexDirection: "column", 
		borderRadius: 15,  
		backgroundColor: "white", 
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "center", 
		alignItems: "center",
		//position: "absolute",
		//top: -15,
		//left: 0,
		//right: 0,
		//zIndex: 2,
		//backgroundColor: "red"
	},
	questionScreenNumber: {
		fontSize: 15, 
		fontWeight: "bold", 
		borderWidth: 2, 
		paddingLeft: 6, 
		paddingRight: 2, 
		paddingTop: 1, 
		borderRadius: 5,
		backgroundColor: "white"
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
		paddingVertical: 4,
		borderWidth: 2, 
		borderColor: "#777", 
		borderRadius: 7, 
		marginTop: 3, 
		backgroundColor: "white" 
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
  screenContBottomBtn: {
  	  borderWidth:2, 
  	  borderColor: "#777", 
		marginTop: 25, 
		marginBottom:5,
		paddingHorizontal:10, 
		flexDirection: "row", 
		justifyContent: "space-between", 
		borderRadius: 4,
		backgroundColor: "lightgray"
	},
	screenBottomBtnText: {
		textDecorationLine: "underline", 
		fontSize: 17, 
		fontWeight: "bold", 
		paddingVertical: 2
	},
  
  // Bottom Buttons
	nextAndPrevBtn: {
		//borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 18, 
   },
});

export default ShowQuestionList;