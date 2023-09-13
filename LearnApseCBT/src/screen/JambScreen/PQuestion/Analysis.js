
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
import ReadMore from "./ReadMore.js";


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
			<BottomButtons/>
		</View>
	);
}


function QuestionInterface() {
  return (
    <View style={styles.questionInterfaceMain}>
        <QuestionInterfaceContainer ind = "1"/>
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
						Question{"\t\t"}{ind}
					</Text>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			
			
			
			<View style = {[styles.questionAndExplanationScreen, {marginTop: 60, marginBottom: 30, backgroundColor: "lightgray"}]}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {[styles.questionScreenNumber, {
													position: "absolute",
													backgroundColor: "white",
													bottom: 0,
													fontSize: 20, 
											}]}
					>
						Analysis of each option 
					</Text>
				</View>
				<Text style = {styles.optionContainerOptions}>
					Correct Answer: A
					
				</Text>
				<View style = {styles.optionMain}>
					<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", backgroundColor: "#004B49"}]}>
							<Text style = {{fontSize: 17, fontWeight: "bold", color: "white",}}>
								A{". "}
								<Text style = {styles.optionContainerOptions}>
              						which contains protons and neutrons  which contains protons and neutrons 				
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: "#004B49", width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 4, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "600"}}>I like peace 
							But if you decide to choose war... I assure you only your shadow will live to tell the story
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%",backgroundColor: "white"}]}>
							<Text style = {{fontSize: 17, fontWeight: "bold", }}>
								B{". "}
								<Text style = {styles.optionContainerOptions}>
              						which contains protons and neutrons  which contains protons and neutrons 				
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2,  width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 4, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "600"}}>I like peace 
							But if you decide to choose war... I assure you only your shadow will live to tell the story
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>


				<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", backgroundColor: "white"}]}>
							<Text style = {{fontSize: 17, fontWeight: "bold",}}>
								C{". "}
								<Text style = {styles.optionContainerOptions}>
              						which contains protons and neutron			
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 4, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "600"}}>I like peace 
							But if you decide to choose war... I assure you only your shadow will live to tell the storyBut if you decide to choose war... I assure you only your shadow will live to tell the story
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", backgroundColor: "white" }]}>
							<Text style = {{fontSize: 17, fontWeight: "bold",}}>
								D{". "}
								<Text style = {styles.optionContainerOptions}>
              						which contains protons and neutrons  which contains protons and neutrons 			
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2,  width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 4, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "600"}}>I like peace 
							But if you decide to choose war... I assure you only your shadow will live to tell the storyBut if you decide to choose war... I assure you only your shadow will live to tell the storyBut if you decide to choose war... I assure you only your shadow will live to tell the stor
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         		
			</View>
			</View>
		</View>
	);
}


function Header(){
	// This is an Empty Header... From the screen to question 
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
  	backgroundColor: "white",
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
		fontSize: 17, 
		fontWeight: "bold", 
		borderWidth: 2, 
		paddingHorizontal: 10,
		paddingVertical: 2, 
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
		paddingVertical: 2,
		borderWidth: 2, 
		borderRadius: 8, 
		marginTop: 3, 
		backgroundColor: "white" 
	},
	optionContainerOptions: {
		fontSize: 14, 
		fontWeight: "600",
		marginVertical: 15,
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