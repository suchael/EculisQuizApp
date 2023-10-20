import {View, 
        Text, 
        StyleSheet,
        Switch, 
        ScrollView,
		TouchableOpacity, 
		FlatList,
        TouchableHighlight,
		ActivityIndicator } from 'react-native';
        
import React , {useState, 
							  useMemo, 
							  useCallback, 
							  useContext, 
							  useRef} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';

// Icons
import { AntDesign , 
				FontAwesome, 
				MaterialIcons, 
				Feather} from '@expo/vector-icons';

// My import
import { Subjects, Questions } from  "./SubjectListDb.js";
import PageSelectorModal from "./PageSelectorModal.js";
import {ShowQuestionContext} from "./ShowQuestionContext/Context.js";


function ShowQuestionList() {
	const navigation = useNavigation()
	const route = useRoute()
	
	const { currentPage } = route.params;
    const [ isLoadingQuestion, setIsLoadingQuestion ] = useState(true);
    const [ showAllAnswer, setShowAllAnswer ] = useState(false);
    
    const totalQuestions = Questions.length ; // Replace with the actual total number of questions
	const questionsPerPage = 5;  // Adjust the number of questions per page as needed
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);
	
	const scrollViewRef = useRef();

    //Memoize the navigation handlers using useCallback
	const handleNextPage = useCallback(() => {
    	if (currentPage < totalPages) {
      		setIsLoadingQuestion(true);
      		const newPage = currentPage + 1;
      		navigation.setParams({ currentPage: newPage }); //Go to next page if currentPage changes
      		setIsLoadingQuestion(false);
      		console.log("Page nxt: ", currentPage)
      
      		// Scroll to the top when user click next btn
    		  if (scrollViewRef.current) {
      			scrollViewRef.current.scrollTo({ y: 0, animated: true });
    		  }
    	}
  	}, [currentPage, totalPages, navigation]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      	setIsLoadingQuestion(true);
      	const newPage = currentPage - 1;
      	navigation.setParams({ currentPage: newPage  });
      	setIsLoadingQuestion(false);
      	
      	// Scroll to the top when user click on Prev Btn
    	  if (scrollViewRef.current) {
      			scrollViewRef.current.scrollTo({ y: 0, animated: true });
    	  }
    }
  }, [currentPage, navigation]);
	
  const goToPage = useCallback((pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setIsLoadingQuestion(true);
      navigation.setParams({ currentPage: pageNumber });
      setIsLoadingQuestion(false);
      
      // Scroll to the top when user click on Prev Btn
      if (scrollViewRef.current) {
      	scrollViewRef.current.scrollTo({ y: 0, animated: true });
       }
    }
  }, [totalPages, navigation]);


   const contextValue ={
   	currentPage,
   	showAllAnswer,
   	setShowAllAnswer,
   	isLoadingQuestion,
   	setIsLoadingQuestion,
   	handleNextPage,
   	handlePrevPage,
   	goToPage,
   	totalPages,
   	totalQuestions,
   	questionsPerPage,
   	scrollViewRef,
	}
	
  return (
  <ShowQuestionContext.Provider value={contextValue}>
  	<View style={styles.container}>
    		<HomeHeader/>
			<MainContainer/>
      </View>
  </ShowQuestionContext.Provider>
    
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
      <View style = {{flexDirection: "column",flex: 1 }}>
      	<Text style = {styles.homeHeaderText} numberOfLines ={1}>English Language and literature</Text>
      	<Text style = {{fontSize: 15, fontWeight: "900"}} numberOfLines ={1}>JAMB: 2004</Text>
      </View>
      <PageSelectorModal/>
    </View>
  );
}


function MainContainer(){
	const insets = useSafeAreaInsets();
	const { currentPage, 
				  setShowAllAnswer,
				  showAllAnswer,
			  	isLoadingQuestion,
				  setIsLoadingQuestion,
				  scrollViewRef } = useContext(ShowQuestionContext);
	
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    	setShowAllAnswer(previousState => !previousState)
    };
    
    // Timeout function for Activity indicator 
	setTimeout(() => {
    	setIsLoadingQuestion(false);
     }, 500); // 1000 milliseconds = 1 second

	return(
		<View style = {styles.mainContainer}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 ,}}  ref={scrollViewRef} scrollEventThrottle={900}>
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 10,
                  	paddingBottom: insets.bottom + 100, 
					  flex:1,    
                }}
				>
					{isLoadingQuestion && 
						<View style = {{flex: 1,   justifyContent: "center", alignItems: "center" }}>
							<ActivityIndicator size="large" color="#0000ff" />
							<Text style={{fontSize: 18, fontWeight: "600", marginTop: 20}}>
              							Loading... 
            				</Text>
						</View>
					}
					
					{/*Toggle Switch*/}
					{currentPage == 1 &&  isLoadingQuestion == false && (
						<TouchableOpacity onPress={toggleSwitch} style={{backgroundColor: isEnabled? "white": "gray", borderWidth: 4,  borderColor: isEnabled? "#00A86B": "gray" , justifyContent: "center", alignItems: "center", padding: 4, borderRadius: 25, marginVertical:20}}>
              					<Text style={{fontSize: 17, fontWeight: "600"}}>
              							Show all answers
            					  </Text>
            			</TouchableOpacity>
      		   	)}
      		 	{/*Closing: Toggle Switch*/}
      
      			  {isLoadingQuestion == false && <QuestionInterface/>}
					
				</View>
			</ScrollView>
			{isLoadingQuestion == false && <BottomBtn/> }
			
		</View>
	);
}


const QuestionInterface = React.memo(() => {
	return (
    	<View style={styles.questionInterfaceMain}>
      		<QuestionInterfaceContainer  />
    	</View>
  	);
});



function QuestionInterfaceContainer(){
	const navigation= useNavigation ()
	const [copiedText, setCopiedText] = useState('');

	const { currentPage,
				  questionsPerPage, 
				  showAllAnswer,
				  totalQuestions,
				  isLoadingQuestion,
				  setIsLoadingQuestion,
				 } = useContext(ShowQuestionContext);
	
    const startQuestionIndex = (currentPage - 1) * questionsPerPage;
	const endQuestionIndex = startQuestionIndex + questionsPerPage;
	
	// Memoize the questions to display for the current page
	const questionsToDisplay = useMemo(() => Questions.slice(startQuestionIndex, endQuestionIndex), [currentPage]);
	
	const copyToClipboard = async (eachQuestion) => {
  		const { question, options } = eachQuestion;
  
		 // Combine all options into a single string
  		const allQuestionOptions = options.map((option) => {
    		return Object.keys(option)[0] + ". " +option[Object.keys(option)[0]];
  		}).join('\n');

  		// Combine the question and options
  		const textToCopy = `${question} \n${allQuestionOptions}`;

  		try { // Attempt to copy the text to the clipboard
    		await Clipboard.setString(textToCopy);
    		alert("Question copied successfully");
  		} catch (error) {
    		alert("Copy failed. Please try again.");
  		}
	};
	
	return (
  <View> 
    {questionsToDisplay.map((eachQuestion, index) => (
      <View style={styles.questionInterfaceContainer} key={index} >
        <View style={styles.questionScreen}>
          <View style={styles.questionScreenNumberView}>
            <TouchableHighlight 
				activeOpacity={0.9}
        		underlayColor="#00A86B"
				style={{backgroundColor: "white", justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 5 }}
			>
              	<Feather name="bookmark" size={24} color="black" />
            </TouchableHighlight>
            <Text style={styles.questionScreenNumber}>
              Question {`${startQuestionIndex + index + 1} of ${totalQuestions}`}
            </Text>
            <TouchableHighlight 
				onPress={()=>copyToClipboard(eachQuestion)} 
				activeOpacity={0.9}
        		underlayColor="#00A86B"
				style={{backgroundColor: "white", justifyContent: "center", alignItems: "center", padding: 5, borderRadius: 5 }}
			>
              	<MaterialIcons name="content-copy" size={24} color="black" />
            </TouchableHighlight>
          </View>
          <Text style={styles.questionScreenQuestionContent}>
            {eachQuestion.question}
          </Text>
        </View>
        
        <View style={styles.optionMain}>
        	{eachQuestion.options.map((eachOption, index)=>(
        			<View style={[styles.optionContainer, { borderWidth: Object.keys(eachOption)[0] === eachQuestion.answer.slice(-1) && showAllAnswer == true ? 3.6 : 2, borderColor: Object.keys(eachOption)[0] === eachQuestion.answer.slice(-1) && showAllAnswer == true? "#00A86B" : "#777" }]} key={index}>
            				<Text style={{ fontSize: 18, fontWeight: "bold", marginTop: -4 }}>
              					{ Object.keys(eachOption)[0]}{".  "}
              					<Text style={styles.optionContainerOptions}>
                						{ eachOption[Object.keys(eachOption)[0]] }
              					</Text>
            				</Text>
          			</View>
				))
			}
        </View>
        
        <View style={styles.screenContBottomBtn}>
          <TouchableHighlight
            onPress={() => { 
				navigation.navigate("Analysis", {
					questions: questionsToDisplay, //pass questionToDisplay to the Explanation screen 
					currentQuestionIndex: index,
					startQuestionIndexPerPage: startQuestionIndex,
					totalQuestions: totalQuestions,
				})
			}}
            underlayColor="lightgray"
            activeOpacity={0.9}
            style={{ height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5 }}
          >
            <Text style={styles.screenBottomBtnText}>
              Analysis
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { 
				navigation.navigate("Explanation", {
					questions: questionsToDisplay, //pass questionToDisplay to the Explanation screen 
					currentQuestionIndex: index,
					startQuestionIndexPerPage: startQuestionIndex,
					totalQuestions: totalQuestions,
				})
			}}
            underlayColor="lightgray"
            activeOpacity={0.9}
            style={{ height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5 }}
          >
            <Text style={styles.screenBottomBtnText}>
              Explanation
            </Text>
          </TouchableHighlight>
        </View>
        
      </View>
    ))}
  </View>
);

}



const BottomBtn = React.memo(() => {
  const { handlePrevPage, 
				  handleNextPage, 
			  	totalPages,
				  currentPage } = useContext(ShowQuestionContext);
				
	return (
		<View style = {{ position: "absolute", bottom: 0, left: 22, right: 22, flexDirection: "row", justifyContent: "space-between", alignItems: "center",  paddingBottom: 18, backgroundColor: "transparent"}}>
			<TouchableHighlight
        			onPress = {handlePrevPage}
        			disabled = {currentPage == 1}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == 1?  "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowleft" size={30} color={currentPage == 1? "#777": "black"}  />
      	</TouchableHighlight>
      
      
      	<TouchableHighlight
        			onPress={handleNextPage}
        			disabled = {currentPage == totalPages}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == totalPages ?  "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowright" size={30} color={currentPage == totalPages? "#777": "black"} />
      	</TouchableHighlight>  
		</View>
	);
});


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
  	backgroundColor: "white",
	  padding: 3, 
	  alignItems: "center", 
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  borderRadius: 4,
	  paddingHorizontal: 20,
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
	  justifyContent: "center", 
	  alignItems: "center", 
   },
   questionInterfaceContainer: {
   	backgroundColor: "white",
   	borderWidth: 2, 
	   padding:4, 
	   borderColor: "#999", 
	   borderRadius: 15, 
	   marginBottom: 35,
	   maxWidth: 420,
	},
	questionScreen: {
		borderWidth:2, 
		borderColor: "#999", 
	    paddingHorizontal: 8, 
		paddingVertical: 12,
		flexDirection: "column", 
		borderRadius: 15,  
		backgroundColor: "white", 
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "space-between", 
		alignItems: "center",
		flexDirection: "row",
		paddingBottom: 10, 
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
		paddingVertical: 6,
		borderWidth: 2, 
		borderRadius: 7, 
		marginTop: 3, 
		backgroundColor: "white" 
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		
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
		borderRadius: 5, 
   },
});

export default ShowQuestionList;