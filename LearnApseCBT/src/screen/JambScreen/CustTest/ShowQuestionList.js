
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
      <View style = {{flexDirection: "column"}}>
      	<Text style = {styles.homeHeaderText}>English Language</Text>
      	<Text style = {{fontSize: 13, fontWeight: "700"}}>JAMB: 2004 </Text>
      </View>
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
                  	paddingTop: insets.top + 60,
                  	paddingBottom: insets.bottom + 100,             	
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
			<TopButtons/>
			<PrevBtn/>
			<NextBtn/>
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
			<View style = {styles.screenContBottomBtn}>
				  	<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Analysis")}} 		
	     					underlayColor="lightgray"
			 				activeOpacity={0.9}
	      			>
              			<Text style= {styles.screenBottomBtnText}>   
								Analysis      
              			</Text>
          			</TouchableHighlight>              
            		  <TouchableHighlight 
		 				onPress={()=>{navigation.navigate("Explanation")}} 		
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
	      			>
              			<Text style= {styles.screenBottomBtnText}>
              					Explanation 
              			</Text>
          			</TouchableHighlight>              
			</View>
		</View>
	);
}

function TopButtons(){
	const insets = useSafeAreaInsets();
	
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    };
   
	return(
			<View style={{flexDirection: "row", 
				  justifyContent: "space-between",
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingBottom: insets.bottom,
                  width: "100%",
                  position: "absolute",
                  top:0,
                  backgroundColor: "lightgray"
			}}>
				<TouchableHighlight
        			onPress={() => console.log("Page Selector")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style = {styles.topBtnTouchables}
      		  >
      			  <View style = {styles.topBtnTouchablesView}>
      					<Text style ={styles.topBtnText}>Page 1</Text>
      					<FontAwesome name="angle-down" size={28} color="black" />			 
					</View>
      		</TouchableHighlight>
			  <TouchableHighlight
        			onPress={toggleSwitch}
        			activeOpacity={0.5}
        			underlayColor="white"
        			style = {[styles.topBtnTouchables, {paddingTop: 5}]}
      		  >
      			  <View style = {styles.topBtnTouchablesView}>
      					<Text style ={styles.topBtnText}>Show answers</Text>
      					<View style = {{borderWidth:2, height: 20, width: 40, justifyContent: "center", alignItems: "center"}}>
      						<Switch  style={{borderWidth: 2, borderColor: "red"}}
        							trackColor={{ false: "#767577", true: "white" }}
        							thumbColor={isEnabled ? "gray" : "red"}
        							ios_backgroundColor="#3e3e3e"
        							onValueChange={toggleSwitch}
        							value={isEnabled}
      						/>
						</View>		 
					</View>
      		</TouchableHighlight>
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
  
  
  // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 5, 
      borderBottomRightRadius: 5,
      marginLeft: 10,
      backgroundColor: "gray",
  },
  topBtnTouchables: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 5, 
	  borderBottomRightRadius: 5
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  gap: 14
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
	   //borderColor: "blue", 
	   borderRadius: 15, 
	   marginBottom: 35
	},
	questionScreen: {
		borderWidth:2, 
	    padding: 8, 
		//borderColor: "red", 
		flexDirection: "column", 
		borderRadius: 15,  
		backgroundColor: "white", 
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
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
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		paddingHorizontal: 8 ,
		paddingVertical: 4,
		borderWidth: 2, 
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
		marginTop:14, 
		marginBottom:5,
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

export default ShowQuestionList;