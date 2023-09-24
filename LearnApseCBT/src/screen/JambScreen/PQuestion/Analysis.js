
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
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					A mixture of iodine and sulphur crystals can be separated by treatment with?
				</Text>
			</View>
			
			
			
			<View style = {[styles.questionAndExplanationScreen, {marginTop: 30, marginBottom: 30, backgroundColor: "lightgray"}]}>
				<View style = {styles.questionScreenNumberView}>
					<Text style = {[styles.questionScreenNumber, {
													position: "absolute",
													backgroundColor: "white",
													bottom: -6,
													fontSize: 20, 
											}]}
					>
						Analysis of each option 
					</Text>
				</View>
				<Text style = {[styles.optionContainerOptions, {fontWeight: "bold"}]}>
					Correct Answer: A
					
				</Text>
				<View style = {styles.optionMain}>
					<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", minHeight: 50, backgroundColor: "#004B49",}]}>
							<Text style = {{fontSize: 18, fontWeight: "bold", color: "white",}}>
								A{".  "}
								<Text style = {styles.optionContainerOptions}>
              						Water to filter off sulphur
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: "#004B49", width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 10, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "500"}}>
							This option is not effective for separating a mixture of iodine and sulfur because both iodine and sulfur are insoluble in water. You cannot filter off either component using water.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", minHeight: 50, backgroundColor: "pink"}]}>
							<Text style = {{fontSize: 18, fontWeight: "900", }}>
								B{".  "}
								<Text style = {styles.optionContainerOptions}>
              						carbon (IV) sulphide to filter off iodine
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2,  width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 10, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "500"}}>
							Carbon (IV) sulphide to filter off iodine: This is the correct option. Carbon disulfide (carbon (IV) sulphide) is a suitable solvent for iodine, which dissolves iodine but not sulfur. By using carbon disulfide, you can dissolve the iodine, leaving the sulfur behind. Afterward, you can filter the mixture to separate the undissolved sulfur from the iodine solution.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>


				<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", minHeight: 50, backgroundColor: "pink"}]}>
							<Text style = {{fontSize: 18, fontWeight: "900",}}>
								C{".  "}
								<Text style = {styles.optionContainerOptions}>
              						ethanoic acid to filter off sulphur
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 10, marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "500"}}>
							Ethanoic acid (acetic acid) is not typically used to separate iodine and sulfur. It may react with sulfur but is not an effective solvent for iodine. This method is not commonly used for this purpose.
						</Text>
         			</View>
         			{/*Closing - Each Option Analysis*/}
         		</View>
         
         
         		<View style ={{justifyContent: "center", alignItems: "center"}}>
						<View style= {[styles.optionContainer, {width: "100%", minHeight: 50, backgroundColor: "pink" }]}>
							<Text style = {{fontSize: 18, fontWeight: "900",}}>
								D{".  "}
								<Text style = {styles.optionContainerOptions}>
              						methanol to filter off iodine
								</Text>
							</Text>			
         	  		 </View>
         
         			{/*Each Option Analysis*/}
         			<View style ={{borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2,  width: "94%", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 10,  marginBottom: 15, backgroundColor: "white"}}>
         				<Text style ={{fontSize: 16, fontWeight: "500"}}>
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
		fontSize: 16, 
		fontWeight: "500",
		marginVertical: 15,
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