import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';
        
import React, {useState, useContext} from 'react';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

//My import
import QuizScoreModal from "./QuizScoreModal.js";
import {ScoreContext} from "./QuizUseContext/Context.js";
import Calculator from "../ExamMode/Calculator.js";



const quizQuestions = [
  {
    question: "A noun is a name of any person, place, or thing.",
    options: ["A Noun", "B Pronoun", "C Adjective", "D Verb"],
    answer: "A Noun",
  },
  {
    question: "Which part of speech is used to describe a noun or pronoun?",
    options: ["A Adjective", "B Verb", "C Preposition", "D Interjection"],
    answer: "A Adjective",
  },
  {
    question: "What is the word that takes the place of a noun in a sentence?",
    options: ["A Adjective", "B Verb", "C Pronoun", "D Conjunction"],
    answer: "C Pronoun",
  },
  {
    question: "What type of word shows an action or a state of being?",
    options: ["A Noun", "B Pronoun", "C Adjective", "D Verb"],
    answer: "D Verb",
  },
  {
    question: "Which part of speech connects words, phrases, or clauses in a sentence?",
    options: ["A Adjective", "B Verb", "C Preposition", "D Conjunction"],
    answer: "D Conjunction",
  },
  {
    question: "What is a word or group of words that shows the relationship between a noun and another word in the sentence?",
    options: ["A Noun", "B Pronoun", "C Adjective", "D Preposition"],
    answer: "D Preposition",
  },
];


//export const ScoreContext = createContext(null);

export default function QuizQuestionScreen(){
	const [score, setScore] = useState(0);
	const [selectedQuestion, setSelectedQuestion] = useState(0); 
	const [selectedOption, setSelectedOption] = useState(null); // Used to know the current user Option
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); 
	 
	
	const contextValue = {
		score, 
		setScore, 
		selectedQuestion, 
		setSelectedQuestion, 
		isAnswerCorrect, 
		setIsAnswerCorrect,
		selectedOption,
		setSelectedOption,
	}
	return(
		<ScoreContext.Provider value={contextValue}>
			{
				selectedQuestion <= quizQuestions.length -1? (
					<View style ={styles.homeContainer}>
						<Main/>
						<ContinueButton/>
					</View>
				) : (
					<EndQuizScreen/>
				)
			}
      	  
    	</ScoreContext.Provider>
		
	);
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView contentContainerStyle = {{
					  flexGrow: 1, 
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 8,
                      paddingBottom: insets.bottom + 8,
                      justifyContent: "center", alignItems: "center",  
                  }}
		>
			<ScoreBoard/>
			<QuizQuestion/>
		</ScrollView>
	);
}

function ScoreBoard(){
  const navigation = useNavigation();
  const { score } = useContext(ScoreContext); // Access score from context
	
  return(
    <View style ={{borderWidth: 2, marginTop: 4, padding: 4, borderRadius: 10, width: "100%"}}>
      	<View style ={{borderWidth: 2,  borderRadius: 10, paddingVertical: 10, paddingHorizontal: 6,justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white"}}>
      		<Timer/>
      
      		{/*Progress Bar*/}
      		<ProgressBarIndicator/>
      
      		<Text style ={{fontSize: 18, fontWeight: "600"}}>
					Score:{"   "}{score}/{quizQuestions.length *5}
		  	</Text>
      	</View>
    </View>
  );
}

function ProgressBarIndicator(){
	return(
		<View style ={{borderWidth: 2, borderRadius: 3, height: 15, width:  180, marginVertical: 5}}>
			{/*Designing the Progress bar in Progress*/}
		</View>
	);
}



function QuizQuestion(){
	return(
		<View style ={{padding: 4,  marginTop: 20, justifyContent: "center", alignItems: "center", maxWidth: 420, flex: 1,}}>
			
			<QuizQuestionInterface/>
		</View>
	);
}



function Timer(){
	return(
	<View style = {{justifyContent: "center", alignItems: "center", marginBottom: 4}}>
		<View style = {{backgroundColor: "gray", width: 140, paddingHorizontal: 20, paddingVertical: 5,  borderRadius: 4, flexDirection: "row", justifyContent: "space-between", alingitems: "center"}}>
      		<Ionicons name="md-alarm-outline" size={30} color="black" style = {{marginLeft: -4}}/>
      		<Text style = {{fontSize: 25, fontWeight: "bold"}}>01:00</Text>
        </View>
     </View>
	);
}


function QuizQuestionInterface(){
	const navigation = useNavigation()
	
	const { score, 
				  setScore, 
				  selectedQuestion, 
				  setSelectedQuestion,
				  isAnswerCorrect,
				  setIsAnswerCorrect,
				  selectedOption,
				  setSelectedOption,
				} = useContext(ScoreContext); // Access score from context


	const handlePress = (index)=>{
		setSelectedOption(index)
		//console.log("option:", quizQuestions[selectedQuestion].options[selectedOption])
	}

	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionScreen}>
			
				<View style = {styles.questionScreenNumberView}>
					<Text style = {styles.questionScreenNumber}>
						Question {selectedQuestion + 1}/{quizQuestions.length}
					</Text>
					<CalculatorBtn/>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					{quizQuestions[selectedQuestion]?.question}
				</Text>
			</View>
			<View style = {styles.optionMain}>
				{quizQuestions[selectedQuestion]?.options.map((option, index)=>(
					<TouchableHighlight style= {[styles.optionContainer, {backgroundColor: selectedOption === index? "#4B9CD3": "white"}]} 
							key={index} index={index} 
							onPress ={()=> handlePress(index)}
							activeOpacity={1} 
							underlayColor="#7393B3"
					>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						{option[0].toUpperCase()}{". "}
						<Text style = {styles.optionContainerOptions}>
              				{option.slice(1).trim().charAt(0).toUpperCase() + option.slice(3).trim().replace(/\s+/g, ' ')}	
						</Text>
					</Text>			
         	   </TouchableHighlight>
         		
				))}
				
			</View>
		</View>
	);
}

function CalculatorBtn (){
	const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = ()=>{
  	setModalVisible(true);
  }
  
  const closeModal = ()=>{
  	setModalVisible(false);
  }
	
	return(
		<TouchableOpacity onPress = {openModal} style ={{position: "absolute", right: 0}}>
      	   <Ionicons name="ios-calculator-sharp" size={38} color="black" />
      		<Calculator visible = {modalVisible} onClose ={closeModal}/>
      </TouchableOpacity>
	);
}


function ContinueButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedOption, 
				setSelectedOption,
  			  setScore, 
				setIsAnswerCorrect,
				selectedQuestion, 
				setSelectedQuestion } = useContext(ScoreContext); //returns 1 -->True if user clicks an option else null --> false

  const openModal = ()=>{
  	setModalVisible(true);
  	
  	if (quizQuestions[selectedQuestion].answer === quizQuestions[selectedQuestion].options[selectedOption]){
			//setScore ((newscore)=>newscore+5)
			setIsAnswerCorrect(true)
		}
		else{
			
			setIsAnswerCorrect(false)
		}
  }
  
  const closeModal = ()=>{
  	setModalVisible(false);
  	if (quizQuestions[selectedQuestion].answer === quizQuestions[selectedQuestion].options[selectedOption]){
			setScore ((newscore)=>newscore+5)
		}
  	setSelectedQuestion(num => num+1);
  	setSelectedOption(null);
  }
  
  
  return (
  <>
    <TouchableOpacity
	  onPress = {openModal}
	   disabled = {selectedOption == null? true: false} // enable button if user selects an option, else disable btn
	   opacity = {selectedOption == null? 1:0 }
      style={{
        backgroundColor: selectedOption == null? "lightgray": "gray",
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20, // Adjust this margin as needed
        position: "absolute", // Fixed position
        bottom: 10, // Adjust the bottom distance as needed
        left: 15, // Adjust the left distance as needed
        right: 15, // Adjust the right distance as needed
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "bold", color: selectedOption == null? "#777": "black", }}>Continue</Text>
    </TouchableOpacity>
    <QuizScoreModal visible = {modalVisible} onClose ={closeModal}/>
  </>
  );
}



function EndQuizScreen(){
	const { score } = useContext(ScoreContext);
	const exceptionalScore = 10; // if students score above 10/50 
	const navigation= useNavigation();
	return(
		<View style={{flex: 3, padding: 10, backgroundColor: "white"}}>
			<View style={{flex: 2, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#777", borderRadius:3, padding: 15}}>
				<Text style ={{fontSize:18, fontWeight: "bold", marginBottom: 10}}>Total Quiz Score</Text>
				<Text style ={{fontSize: 40, fontWeight: "bold"}}>{score}/30</Text>
				{
					score >= exceptionalScore && (<Text style ={{fontSize: 18, fontWeight: "500", marginTop: 40, textAlign: "center"}}>Ah... Your Literature skills are truly impressive. You remind me of someone</Text>)
				}
				
			</View>
			
			<View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: 2, paddingBottom: 8}}>
			 	<TouchableOpacity onPress= {()=> navigation.navigate("HomeScreen")} style={{ backgroundColor: '#999', borderRadius: 50, padding: 10 , width: "40%" }}>
       			 	<Text style={{ color: 'white', textAlign: 'center', fontSize: 17, fontWeight: "500" }}>Home</Text>
      			</TouchableOpacity>
      
      			<TouchableOpacity onPress= {()=> navigation.navigate("QuizHome")} style={{ backgroundColor: 'blue', borderRadius: 50, padding: 10 , width: "40%" }}>
       			 	<Text style={{ color: 'white', textAlign: 'center', fontSize: 17, fontWeight: "500" }}>Replay</Text>
      			</TouchableOpacity>
			</View>
		</View>
		
	);
}


const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "white",
    paddingBottom: 60,
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
		//backgroundColor: "red",
		marginBottom: 4,
		justifyContent: "center", 
		alignItems: "center",
		padding: 2,
	},
	questionScreenNumber: {
		marginTop: -4,
		fontSize: 18, 
		fontWeight: "bold", 
		borderWidth: 2,
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 5,
		
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
		borderColor: "#666",
		borderRadius: 10, 
		marginBottom: 6, 
		backgroundColor: "white" ,
		minHeight: 50,
		//justifyContent: "center",
		//alignItems: "center",
		
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
  
});








