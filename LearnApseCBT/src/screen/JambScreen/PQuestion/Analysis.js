
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions,TouchableOpacity,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome, Ionicons, MaterialIcons, } from '@expo/vector-icons';

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
			<BottomBtn/>
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
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center",  padding: 3, position: "absolute", top: 0, right: 2}}>
						<MaterialIcons name="content-copy" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					A mixture of iodine and sulphur crystals can be separated by treatment with?
				</Text>
			</View>
			
			
			
			<View style = {[styles.questionAndExplanationScreen, {marginVertical: 30, backgroundColor: "lightgray", borderRadius: 25}]}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {[styles.questionScreenNumber, {
													backgroundColor: "white",
													fontSize: 20, 
											}]}
					>
						Analysis of each option 
					</Text>
				</View>
				<Text style = {styles.correctAnswerText}>
					Correct Answer: A
				</Text>
				<View style = {styles.optionMain}>
					<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {borderColor: "#00A86B", borderWidth: 2.5, backgroundColor: "#98FB98"}]}>
							<Text style = {styles.optionText}>
								A{".  "}
								<Text style = {[styles.optionText, {fontWeight: "500", fontSize: 16.7}]}>
              						Water to filter off sulphurWater to filter off sulphur
								</Text>
							</Text>
							<AntDesign name="checkcircle" size={26} color="#00A86B" />			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={styles.attachToOption}>
         				<Text style ={{fontSize: 16, fontWeight: "500", marginTop: -4,}}>
							This option is not effective for separating a mixture of iodine and sulfur because both iodine and sulfur are insoluble in water. You cannot filter off either component using water.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {styles.optionContainer}>
							<Text style = {styles.optionText}>
								B{".  "}
								<Text style = {[styles.optionText, {fontWeight: "500", fontSize: 16.7}]}>
              						carbon (IV) sulphide to filter off iodine
								</Text>
							</Text>			
							<MaterialIcons name="cancel" size={32} color="red" />			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={styles.attachToOption}>
         				<Text style ={{fontSize: 16, fontWeight: "500", marginTop: -4,}}>
							Carbon (IV) sulphide to filter off iodine: This is the correct option. Carbon disulfide (carbon (IV) sulphide) is a suitable solvent for iodine, which dissolves iodine but not sulfur. By using carbon disulfide, you can dissolve the iodine, leaving the sulfur behind. Afterward, you can filter the mixture to separate the undissolved sulfur from the iodine solution.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>


				<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {styles.optionContainer}>
							<Text style = {styles.optionText}>
								C{".  "}
								<Text style = {[styles.optionText, {fontWeight: "500", fontSize: 16.7}]}>
              						ethanoic acid to filter off sulphur
								</Text>
							</Text>
							<MaterialIcons name="cancel" size={32} color="red" />					
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={styles.attachToOption}>
         				<Text style ={{fontSize: 16, fontWeight: "500", marginTop: -4,}}>
							Ethanoic acid (acetic acid) is not typically used to separate iodine and sulfur. It may react with sulfur but is not an effective solvent for iodine. This method is not commonly used for this purpose.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {styles.optionContainer}>
							<Text style = {styles.optionText}>
								D{".  "}
								<Text style = {[styles.optionText, {fontWeight: "500", fontSize: 16.7}]}>
              						methanol to filter off iodine methanol to filter off iodine methanol to filter off iodine methanol to filter off iodine
								</Text>
							</Text>
							<MaterialIcons name="cancel" size={32} color="red" />					
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={styles.attachToOption}>
         				<Text style ={{fontSize: 16, fontWeight: "500", marginTop: -4, }}>
							Methanol is not an ideal solvent for iodine. While it can dissolve iodine to some extent, it's not as effective as carbon disulfide. Using methanol may result in incomplete separation.
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


function BottomBtn(){
	const navigation= useNavigation ();
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
        			onPress={()=>navigation.goBack()}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<Text style = {{fontSize: 16, fontWeight: "bold"}}>Ok</Text>
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
  	backgroundColor: "white",
  },
 
  // Question Interface
  questionInterfaceMain: {
  	//borderWidth : 2, 
	  marginBottom: 20,
   },
   questionInterfaceContainer: {
   	backgroundColor: "white",
   	//borderWidth: 2, 
	   //padding:4, 
	   //borderColor: "blue", 
	   borderRadius: 15, 
	   marginBottom: 35
	},
	questionAndExplanationScreen: {
		borderWidth:2, 
	    paddingHorizontal: 8, 
		paddingVertical: 12,
		//borderColor: "red", 
		flexDirection: "column", 
		borderRadius: 18,  
		marginBottom: 12
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "center", 
		alignItems: "center",
		paddingBottom: 6,
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
		justifyContent: "space-between", 
		alignItems: "center", 
		flexDirection: "row",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderWidth: 2.1, 
		borderColor: "red",
		borderRadius: 10, 
		marginTop: 7, 
		backgroundColor: "pink" ,
		minHeight: 46,
		width: "100%",
	},
	
	optionText:{
		fontSize: 18, 
		fontWeight: "600",
		marginTop: -4,
		flex: 1
		
	},
	correctAnswerText: {
		fontWeight: "bold",
		fontSize: 16.7, 
		marginVertical: 20,
		flex: 1,
		
	},
	attachToOption: {borderBottomWidth: 2,
		 borderLeftWidth: 2, 
		 borderRightWidth: 2, 
		 borderColor: "#777", 
		 width: "86%", 
		 borderBottomLeftRadius: 12, 
		 borderBottomRightRadius: 12,
		 padding: 10, marginBottom: 15,
		 backgroundColor: "white",
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