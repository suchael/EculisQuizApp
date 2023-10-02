
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions, TouchableOpacity,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome, Ionicons, MaterialIcons, Feather} from '@expo/vector-icons';

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
					
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center", padding: 3}}>
						<Feather name="bookmark" size={24} color="black" />
					</TouchableOpacity>
					<Text style = {styles.questionScreenNumber}>
						Question {ind}
					</Text>
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center",  padding: 3}}>
						<MaterialIcons name="content-copy" size={24} color="black" />
					</TouchableOpacity>

				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			<View style = {styles.optionMain}>
				<View style= {[styles.optionContainer, {borderWidth: 3.5, borderColor: "#00A86B", }]}>
					<Text style = {[styles.optionContainerOptions, {fontSize: 18, fontWeight: "bold",}]}>
						A{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>	
					<AntDesign name="checkcircle" size={26} color="#00A86B" />
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {[styles.optionContainerOptions, {fontSize: 18, fontWeight: "bold",}]}>
						B{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </View>
				<View style= {styles.optionContainer}>
					<Text style = {[styles.optionContainerOptions, {fontSize: 18, fontWeight: "bold",}]}>
						C{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </View>
         	<View style= {[styles.optionContainer, {borderWidth: 3, borderColor: "red"}]}>
					<Text style = {[styles.optionContainerOptions, {fontSize: 18, fontWeight: "bold",}]}>
						D{".  "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>
					<MaterialIcons name="cancel" size={32} color="red" />			
         	   </View>
			</View>
			<View style = {[styles.questionAndExplanationScreen, {marginTop:18, backgroundColor: "lightgray"}]}>
				<View style = {[styles.questionScreenNumberView, {flexDirection: "column", alignItems: "center"}]}>
					<Text style = {[styles.questionScreenNumber, {fontSize:22, backgroundColor: "white"}]}>
						Explanation 
					</Text>
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center",  padding: 3, position: "absolute", top: 0, right: 2}}>
						<MaterialIcons name="content-copy" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<Text style = {{fontSize: 17, fontWeight: "600", marginVertical:10}}>Correct Answer: A</Text>
				<Text style = {styles.explanationContentText}>
					A mixture of iodine and sulphur can be separated by adding Carbon disulphide that is (CS₂) then stir the solution and filter it . As sulphur dissolved in CS₂, so it come into filter and got separated from the mixture.
				</Text>
				
				<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("CommentSection")}} 		
	     					underlayColor="white"
			 				activeOpacity={0.9}
							style = {{borderWidth:2, padding: 4, marginTop: 20, marginBottom: 10, justifyContent: "center", flex:1, alignItems: "center", borderRadius: 18, backgroundColor: "white"}}
	      			>
              			<Text style= {{fontSize: 17, fontWeight: "600", padding: 2}}>   
								Post or View public answers (5)    
              			</Text>
          	</TouchableHighlight>              
				
				
			</View>
			<View style = {styles.screenContBottomBtn}>
            		  <TouchableHighlight 
		 				onPress={()=>navigation.navigate("Analysis")}
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
						style ={{height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", borderWidth: 2, paddingHorizontal: 10, backgroundColor: "white", marginVertical: 6}}
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
   	borderWidth: 2, 
	   padding:  6, 
	   //borderColor: "blue", 
	   borderRadius: 18, 
	   marginBottom: 35
	},
	questionAndExplanationScreen: {
		borderWidth:2, 
	    padding: 8, borderColor: "#666",
		//borderColor: "red",
		flexDirection: "column", 
		borderRadius: 18,  
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "space-between", 
		alignItems: "center",
		flexDirection: "row",
		paddingBottom: 6, 
	},
	questionScreenNumber: {
		fontSize: 17, 
		fontWeight: "bold", 
		borderWidth: 2, borderColor: "#666",
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
		paddingHorizontal: 12 ,
		paddingVertical:4,
		borderWidth: 2, 
		borderColor: "#777",
		borderRadius: 9.5, 
		marginTop: 7, 
		backgroundColor: "white" ,
		minHeight: 46,
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		marginTop: - 4,
		flex: 1,
		
	},
	
	explanationContentText: {
		fontSize: 16.7, 
		fontWeight: "500",
	},
	
  screenContBottomBtn: {
  	  borderWidth: 2, borderColor: "#666",
		marginTop: 40, 
		marginBottom: 15,
		paddingHorizontal:10, 
		flexDirection: "row", 
		justifyContent: "space-between", 
		borderRadius: 10,
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
		//borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 18,
   },
});