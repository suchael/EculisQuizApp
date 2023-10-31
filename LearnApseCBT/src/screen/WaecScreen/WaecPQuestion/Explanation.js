
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions, TouchableOpacity,
        TouchableHighlight } from 'react-native';
        
import React , {useState, useContext, useMemo, useCallback} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';

// Icons
import { AntDesign , FontAwesome, Ionicons, MaterialIcons, Feather} from '@expo/vector-icons';

// My import
import subjects from  "../../../SubjectDb.js";
import ErrorQuestion from "./ErrorQuestion.js";
import {ShowQuestionContext} from "./ShowQuestionContext/Context.js";



export default function Explanation(){
	const insets = useSafeAreaInsets();
	return(
		<>
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}} >
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 14,
                  	paddingBottom: insets.bottom + 130,  
				  	flex:1, 
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
			<Header/>
			<BottomBtn/>
		</>
	);
}


const QuestionInterface = React.memo(() => {
	return (
    	<View style={styles.questionInterfaceMain}>
        	<QuestionInterfaceContainer ind = "1"/>
    	</View>
    );
});



function QuestionInterfaceContainer(){
	const navigation = useNavigation();
	
	const route = useRoute ();
	const { questions, 
				  currentQuestionIndex, 
				  startQuestionIndexPerPage,
			  	totalQuestions,
				 } = useMemo(() => route.params, [route.params]);//get the questions passed from the Prev screen
	
	const [modalVisible, setModalVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

	const showModal = useCallback(() => {
  		setModalVisible(true);
	}, []);

	const hideModal = useCallback(() => {
  		setModalVisible(false);
	}, []);

  
  const toggleOption = useCallback((option) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(option)) {
      updatedOptions.splice(updatedOptions.indexOf(option), 1);
    } else {
      updatedOptions.push(option);
    }
    setSelectedOptions(updatedOptions);
  }, []);
  
  
  const copyToClipboard = async (eachQuestion) => {
  		const { question, options, answer, explanation } = eachQuestion;
  		
		 // Combine all options into a single string
  		const allQuestionOptions = options.map((option) => {
    		return Object.keys(option)[0] + ". " +option[Object.keys(option)[0]];
  		}).join('\n');

  		// Combine the question and options
  		const textToCopy = `${question} \n${allQuestionOptions} \n\n*Correct Answer:* ${answer} \n\n*Explanation* \n${explanation}`;

  		// Attempt to copy the text to the clipboard
  		try {
    		await Clipboard.setString(textToCopy);
    		alert("Question, Answer and Explanation copied successfully");
  		} catch (error) {
    		alert("Copy failed. Please try again.");
  		}
	};
	
	const copyExplanationToClipboard = async (eachQuestion) => {
  		const { explanation } = eachQuestion;
  		const textToCopy = `*Explanation* \n${explanation}`;

  		// Attempt to copy the text to the clipboard
  		try {
    		await Clipboard.setString(textToCopy);
    		alert("Explanation copied successfully");
  		} catch (error) {
    		alert("Copy failed. Please try again.");
  		}
	};
  
	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionAndExplanationScreen}>
				<View style = {styles.questionScreenNumberView}>
					
					<TouchableHighlight style = {{justifyContent: "center", alignItems: "center", padding: 3}}>
						<Feather name="bookmark" size={24} color="black" />
					</TouchableHighlight>
					
					<Text style = {styles.questionScreenNumber}>
						Question { startQuestionIndexPerPage + currentQuestionIndex + 1} of { totalQuestions }
					</Text>
					
					<TouchableHighlight 
						onPress ={ ()=>copyToClipboard(questions[ currentQuestionIndex ]) } 
						activeOpacity={0.9}
        				underlayColor="#00A86B"
						style={{backgroundColor: "white", justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 5 }}
					>
              			<MaterialIcons name="content-copy" size={24} color="black" />
            		</TouchableHighlight>

				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					{questions[ currentQuestionIndex ].question}
				</Text>
			</View>
			
			
			<View style = {styles.optionMain}>
				{  
					questions[ currentQuestionIndex ].options.map((eachOption, index)=> (
							<View key = {index} style= {[styles.optionContainer, {borderWidth: Object.keys(eachOption)[0] === questions[ currentQuestionIndex ].answer.slice(-1)? 3.5: 2 , borderColor: Object.keys(eachOption)[0] === questions[ currentQuestionIndex ].answer.slice(-1)? "#00A86B": "#777", }]}>
								<Text style = {[styles.optionContainerOptions, {fontSize: 18, fontWeight: "bold",}]}>
									{ Object.keys(eachOption)[0]}{".  "}
									<Text style = {styles.optionContainerOptions}>
              							{ eachOption[Object.keys(eachOption)[0]] }
									</Text>
								</Text>	
								
								{
									Object.keys(eachOption)[0] === questions[ currentQuestionIndex ].answer.slice(-1) && //add a green icon to the correct option 
									<AntDesign name="checkcircle" size={26} color="#00A86B" />
								}
         	   			</View>
					))
				}
			</View>
			
			
			<View style = {[styles.questionAndExplanationScreen, {marginTop:18, backgroundColor: "lightgray", borderWidth: 4, borderColor: "#00A86B"}]}>
				<View style = {[styles.questionScreenNumberView, {flexDirection: "column", alignItems: "center"}]}>
					<Text style = {[styles.questionScreenNumber, {fontSize:22, backgroundColor: "white"}]}>
						Explanation 
					</Text>
					<TouchableHighlight 
						onPress ={ ()=>copyExplanationToClipboard (questions[ currentQuestionIndex ]) } 
						activeOpacity={0.9}
        				underlayColor="#00A86B"
						style = {{justifyContent: "center", alignItems: "center",  padding: 3, position: "absolute", top: 0, right: 2, borderRadius: 5 }}
					>
						<MaterialIcons name="content-copy" size={24} color="black" />
					</TouchableHighlight>
				</View>
				<Text style = {{fontSize: 20, fontWeight: "600", marginVertical:10}}>
						Correct Answer: { questions[ currentQuestionIndex ].answer.slice(-1)}
				</Text>
				<Text style = {styles.explanationContentText}>
					{questions[ currentQuestionIndex ].explanation} 
				</Text>
				
				<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("CommentSection")}} 		
	     					underlayColor="white"
			 				activeOpacity={0.9}
							style = {{borderWidth:2, padding: 4, marginTop: 30, marginBottom: 10, justifyContent: "center", flex:1, alignItems: "center", borderRadius: 18, backgroundColor: "white" , }}
	      			>
              			<Text style= {{fontSize: 17, fontWeight: "600", padding: 2}}>   
								Post or View public answers (5)    
              			</Text>
          	</TouchableHighlight>              
				
				
			</View>
			<View style = {styles.screenContBottomBtn}>
            		  <TouchableHighlight 
		 				onPress={()=>navigation.navigate("Analysis", {
								questions: questions,
								currentQuestionIndex: currentQuestionIndex,
								startQuestionIndexPerPage: startQuestionIndexPerPage,
			  				  totalQuestions: totalQuestions,
						  })}
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
                  paddingBottom: insets.bottom + 2,
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
	const route = useRoute ();
	const {currentQuestionIndex, 
				  questions, 
				  totalQuestions,
				  startQuestionIndexPerPage} = route.params
	//console.log(currentQuestionIndex)
	
	const goToNextExplanation = () => {
		console.log(questions.length, startQuestionIndexPerPage)
    	if (currentQuestionIndex < questions.length - 1) {
      		navigation.replace('Explanation', {
        	  	questions,
        	  	currentQuestionIndex: currentQuestionIndex + 1,
        		  startQuestionIndexPerPage: startQuestionIndexPerPage,
        		  totalQuestions: totalQuestions,
        	  });
    	}
  	};
  
  	const goToPrevExplanation = () => {
    	if (currentQuestionIndex > 0) {
      		navigation.replace('Explanation', {
        			questions,
        			currentQuestionIndex: currentQuestionIndex - 1,
        			startQuestionIndexPerPage: startQuestionIndexPerPage,
        			totalQuestions: totalQuestions,
      		});
    	}
  	};
  
	return (
		<View style = {{ position: "absolute", bottom: 0, left: 22, right: 22, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 18, backgroundColor: "transparent"}}>
			<TouchableHighlight
        			onPress={goToPrevExplanation}
        			disabled= { currentQuestionIndex == startQuestionIndexPerPage }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentQuestionIndex ==0 ? "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowleft" size={30} color={currentQuestionIndex ==0 ? "#777":"black"} />
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
        			onPress={goToNextExplanation}
        			disabled= { currentQuestionIndex + 1 == questions.length }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentQuestionIndex + 1 == questions.length? "lightgray" : "gray"}]}
      	>
        		<AntDesign name="arrowright" size={30} color= { currentQuestionIndex + 1 == questions.length? "#777" :"black"}/>
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
  
   questionInterfaceContainer: {
   	backgroundColor: "white",
   	borderWidth: 2, 
	   padding:  6, 
	   //borderColor: "blue", 
	   borderRadius: 18, 
	   marginBottom: 35,
	   maxWidth: 420,
		flex: 1,
	},
	questionAndExplanationScreen: {
		borderWidth:2, 
	    padding: 8, 
		borderColor: "#666",
		//borderColor: "green",
		flexDirection: "column", 
		borderRadius: 18,  
		marginBottom: 6,
		flex: 1,
	},
	questionScreenNumberView: {
		//marginTop: -2, 
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
		borderRadius: 5,
		
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
		borderRadius: 5,
   },
});