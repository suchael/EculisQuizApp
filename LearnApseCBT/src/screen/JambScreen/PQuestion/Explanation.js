
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
import ErrorQuestion from "./ErrorQuestion.js";

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
                  	paddingBottom: insets.bottom + 130,             	
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
			<Header/>
			<BottomButtons/>
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
	
	const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const toggleOption = (option) => {
    const updatedOptions = [...selectedOptions];

    if (updatedOptions.includes(option)) {
      updatedOptions.splice(updatedOptions.indexOf(option), 1);
    } else {
      updatedOptions.push(option);
    }

    setSelectedOptions(updatedOptions);
  };
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
				<View style= {[styles.optionContainer, {backgroundColor: "#004B49", borderColor: "transparent"}]}>
					<Text style = {{fontSize: 17, fontWeight: "bold",color: "white"}}>
						A{". "}
						<Text style = {[styles.optionContainerOptions, {fontWeight: "bold"}]}>
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
			<View style = {[styles.questionAndExplanationScreen, {marginTop:18, backgroundColor: "#F0EDE1"}]}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {[styles.questionScreenNumber, {fontSize:20}]}>
						Explanation 
					</Text>
				</View>
				<Text style = {{fontSize: 17, fontWeight: "600", marginVertical:10}}>Correct Answer: A</Text>
				<Text style = {styles.optionContainerOptions}>
					Savannas are quite low in tree species diversity because of stringent ecological requirements but fairly high in diversity of herbaceous plants. Tree growth is controlled not only by rainfall but also by soil type; large areas of hardpan soils, allow no tree roots to penetrate except through cracks, and the cracks determine tree distribution.
Large mammals are at their most diverse in this open environment, in which they can move about freely and yet find shelter among woody vegetation. Large herbivores are successful because of the tremendous biomass of herbaceous vegetation produced annually, and there are many carnivores to crop them in turn.
Tropical rain forests occur in areas of tropical rainforest climate in which there is no dry season, distinct buttress roots of trees.
Montane forest refers to any ecosystem found in mountains. These ecosystems are strongly affected by climate, which gets colder as elevation increases.
A desert is a barren area of landscape where little precipitation occurs and consequently living conditions are hostile for plant and animal life.
				</Text>
				
				<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Error")}} 		
	     					underlayColor="white"
			 				activeOpacity={0.9}
							style = {{borderWidth:2, padding: 3, marginTop: 20, marginBottom: 10, justifyContent: "center", flex:1, alignItems: "center", borderRadius: 10, backgroundColor: "lightgray"}}
	      			>
              			<Text style= {{fontSize: 17, fontWeight: "600", padding: 2}}>   
								Post or View other answers (5)    
              			</Text>
          	</TouchableHighlight>              
				
				
			</View>
			<View style = {styles.screenContBottomBtn}>
            		  <TouchableHighlight 
		 				onPress={()=>navigation.navigate("Analysis")}
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
						style ={{height: 40, borderRadius: 4, justifyContent: "center", alignItems: "center"}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>
              					Analysis 
              			</Text>
          			</TouchableHighlight>     

					<TouchableHighlight 
		 					onPress={showModal} 		
	     					underlayColor="lightgray"
			 				activeOpacity={0.9}
							style ={{height: 40, borderRadius: 4, justifyContent: "center", alignItems: "center"}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>   
								Error{" "}?      
              			</Text>
          			</TouchableHighlight>   
					  <ErrorQuestion showModal={showModal} modalVisible={modalVisible} hideModal={hideModal} toggleOption={toggleOption} selectedOptions={selectedOptions}/>              
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



function BottomButtons(){
	return (
		<View style ={{paddingVertical: 0, height: 60, width: "100%" , backgroundColor: "transparent", position: "absolute", bottom:0, zIndex: 1, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<PrevBtn/>
			<OkBtn/>
			<NextBtn/>
		</View>
	);
}


function PrevBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
	);
}




function OkBtn(){
	const navigation= useNavigation ();
	return(
	  <>
		<TouchableHighlight
        			onPress={()=>navigation.goBack()}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        	<Text style = {{fontSize: 16, fontWeight: "bold"}}>Ok</Text>
      	</TouchableHighlight>  
      	
      </>
	);
}


function NextBtn (){
	return(
		<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
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
		marginBottom: 15,
		paddingHorizontal:10, 
		flexDirection: "row", 
		justifyContent: "space-between", 
		borderRadius: 4,
		alignItems: "center",
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
		borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 10,
		marginBottom: -14,
   },
});