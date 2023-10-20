import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler, FlatList,ActivityIndicator,
        TouchableHighlight } from 'react-native';
        
import React , {useState, 
							  useEffect,
							  useMemo, 
							  useCallback, 
							  useContext, 
							  useRef} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// My import
import QuitExamNotif from "./QuitExamNotif.js";
import { Subjects, Questions } from  "../PQuestion/SubjectListDb.js";
import {ShowQuestionContext} from "./ShowQuestionContext/Context.js";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function ShowQuestionList() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
      <Stack.Screen name='Home' component = {Home} initialParams={{ currentPage: 1 }} />
    </Stack.Navigator>
  )
}



function Home({navigation, route}) {
	const { currentPage } = route.params;
    const [ isLoadingQuestion, setIsLoadingQuestion ] = useState(true);
    const [ showAllAnswer, setShowAllAnswer ] = useState(false);
    
    const totalQuestions = Questions.length ; // Replace with the actual total number of questions
	const questionsPerPage = 1;  // Adjust the number of questions per page as needed
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
    			<TabBar/>
    			<BottomButtons/>
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
                      paddingBottom: insets.bottom + 4,
                  }]}>
      <View style= {{flexDirection: "row", gap:15}}>
      	<View style = {{backgroundColor: "gray", width: 100, padding: 4, borderRadius: 4, flexDirection: "row", gap: 5, justifyContent: "center", alingitems: "center"}}>
      		<Text style = {{fontSize:20, fontWeight: "bold"}}>00:00:00</Text>
      	</View>
      	<Text style = {styles.homeHeaderText}>LearnApse</Text>
      </View>
      
      <TouchableOpacity>
      	   <Ionicons name="ios-calculator-sharp" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

// Top Tab Bar
function TabBar(){
	const examSubject = ["Maths", "Phy", "Chem", "Biol", "Yor", "Lit"]
	const [scrollTopTab, setScrollTopTab] = useState(false);
	
	const deviceWidth = Dimensions.get('window').width;
	const maxTopTabSubject = 6; 
	const minDeviceWidth = 360; 
	const enableTopTabScroll = ()=>(
		// if total subject > maxTopTabSubject and device width is lesser than 360
		// then enable scrolling horizontally 
		examSubject.length > maxTopTabSubject && deviceWidth <= minDeviceWidth ?	true: false
	)
	
  return(
    <Tab.Navigator initialRouteName="General"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#777",
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "none",
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 40, // Adjust the height of the tab bar
          borderBottomWidth: 0, // Remove top border
          backgroundColor: "lightgray",
        },
        tabBarIndicatorStyle: {
          bottom: 0, // Adjust the position of the indicator
          backgroundColor: "black",
          height: 3,
        },
        //animation: "default",
        
    	lazy: true, // Enable lazy rendering
    	//lazyPreloadDistance: 10, // Set the preload distance to 500 pixels
    	lazyPlaceholder: () => (
    		<View style ={{flex:1, justifyContent: "center", alignItems: "center"}}>
      			<ActivityIndicator size="large" color="blue" /> 
			</View>
   	 ),
   	tabBarScrollEnabled: enableTopTabScroll(),
    }}>
    
    
		{examSubject.map((subject, ind)=>( // map and create each tab 
				<Tab.Screen name ={subject} component={MainContainer} key={ind}/>
		))}
    </Tab.Navigator>
  );
}


function MainContainer({navigation}){
	const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
    	setModalVisible(!modalVisible);
     };

	const insets = useSafeAreaInsets();
	return(
		<View style = {styles.mainContainer}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 10,
                  	paddingBottom: insets.bottom + 80,      	
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
		</View>
	);
}


const QuestionInterface = React.memo(() => {
	return (
    	<View style={styles.questionInterfaceMain}>
      		<QuestionInterfaceContainer  />
      		<GoToBtnList/>
    	</View>
  	);
});



function QuestionInterfaceContainer({ind}){
	const navigation = useNavigation()
	
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
	
	
	return(
	<View style ={{justifyContent: "center", alignItems: "center"}}>
		{	questionsToDisplay.map((eachQuestion, index) => (
			  <View key ={index} style = {styles.questionInterfaceContainer}>
					<View style = {styles.questionScreen}>
							<View style = {styles.questionScreenNumberView}>
								<Text style = {styles.questionScreenNumber}>
									Question {`${startQuestionIndex + index + 1} of ${totalQuestions}`}
								</Text>
							</View>
							<Text style = {styles.questionScreenQuestionContent}>
								{eachQuestion.question}
							</Text>
					</View>
			
					<View style = {styles.optionMain}>
						{eachQuestion.options.map((eachOption, index)=>(
							<TouchableOpacity key = {index} style= {styles.optionContainer}>
								<Text style = {{fontSize: 20, fontWeight: "bold"}}>
									{ Object.keys(eachOption)[0]}{".  "}
									<Text style = {styles.optionContainerOptions}>
              				  		{ eachOption[Object.keys(eachOption)[0]] }
									</Text>
								</Text>			
         	   			</TouchableOpacity>
						 ))}
					</View>
				</View>
			  ))
		}		
	</View>
	);
}




// Display List of nswered numbers

const GoToBtnList = React.memo(()=>{
  // Create an array of numbers representing the question buttons (1 to 20)
  const questionNumbers = Array.from({ length: 44 }, (_, index) => index + 1);
  const navigation = useNavigation ();
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingHorizontal: 2 ,  paddingLeft: 10, borderWidth: 2, paddingVertical: 5, borderRadius: 10}}>

      {questionNumbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={{ width: '15%',  height: 40, borderWidth: 2, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: "white", margin: 2 }}
          onPress={() => navigation.navigate("Logout")}
        >
          <Text style={{ fontSize: 16, fontWeight: '900', color: "black" }}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
})


const BottomButtons = React.memo(()=>{
  const navigation = useNavigation ();
  
  const { handlePrevPage, 
				  handleNextPage, 
			  	totalPages,
				  currentPage } = useContext(ShowQuestionContext);
			
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleBackPress = () => {
    if (!modalVisible) {
      setModalVisible(true); // Open the modal
      return true; // Prevent default back behavior
    }
    return false; // Allow default back behavior
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    	return () => {
      	BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    	};
  }, [modalVisible]);

	const openModal = () => {
    	setModalVisible(true);
     };

  const closeModal = () => {
    	setModalVisible(false);
    	setInputValue('');
  };

  const PASSWORD = '555';
  const handleSubmit = () => {
    	if (inputValue === PASSWORD) {
      		closeModal();
      		navigation.navigate("Exam history", {screen: "ExamHistResult"}); // Navigate to the previous screen
    	}
    };
	return (
		<View style ={{paddingVertical: 0, height: 60, backgroundColor: "transparent", position: "absolute", bottom:0, left: 15, right: 15, zIndex: 1, paddingHorizontal: 10, paddingBottom: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<TouchableHighlight
        			onPress = {handlePrevPage}
        			disabled = {currentPage == 1}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == 1?  "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowleft" size={30} color={currentPage == 1? "#777": "black"}  />
      	</TouchableHighlight>
			<EndExamBtn toggleModal={openModal} />
			<TouchableHighlight
        			onPress={handleNextPage}
        			disabled = {currentPage == totalPages}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == totalPages ?  "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowright" size={30} color={currentPage == totalPages? "#777": "black"} />
      	</TouchableHighlight>  
			<QuitExamNotif navigation={navigation} visible={modalVisible} PASSWORD= {PASSWORD} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} closeModal={closeModal}/>
		</View>
	);
})


function EndExamBtn({toggleModal}){
	//const windowWidth = Dimensions.get('window').width;
	const handleBackPress = () => {
    toggleModal(); // Toggle the modal visibility
    return true; // Prevent default back behavior
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
	return(
	  <>
		<TouchableHighlight
        			onPress={handleBackPress}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        	<Text style = {{fontSize: 16, fontWeight: "bold"}}>End Exam</Text>
      	</TouchableHighlight>  
      	
      </>
	);
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homeContainer:{
    flex:1,
    backgroundColor: "white",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
  },
  homeHeaderText: {
    fontSize: 22,
    fontWeight: "600",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "white",
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
	   paddingHorizontal: 6, 
	   paddingTop: 6,
	   paddingBottom: 10,
	   //borderColor: "blue", 
	   borderRadius: 25, 
	   marginBottom: 50,
   	maxWidth: 420,
	   width: "100%",
	},
	questionScreen: {
		borderWidth:2, 
	    padding: 8, 
		//borderColor: "red", 
		flexDirection: "column", 
		borderRadius: 20,  
		backgroundColor: "white", 
		marginBottom: 12,
	},
	questionScreenNumberView: {
		marginTop: -2, 
		marginBottom: 4,
		justifyContent: "center", 
		alignItems: "center",
	},
	questionScreenNumber: {
		fontSize: 18, 
		fontWeight: "bold", 
		borderWidth: 2, 
		paddingLeft: 10, 
		paddingRight: 8, 
		paddingTop: 1, 
		borderRadius: 5
	},
   questionScreenQuestionContent: {
   	fontSize: 16.7, 
	   fontWeight: "500", 
		marginTop: 15,
		marginBottom: 7,
		//color: "black",
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		//justifyContent: "center",
		paddingHorizontal: 8 ,
		paddingVertical: 4,
		borderWidth: 2, 
		borderRadius: 10, 
		//marginBottom: 6, 
		marginTop: 6,
		backgroundColor: "white" ,
		minHeight: 45
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
  
  // Bottom Buttons
	nextAndPrevBtn: {
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 5,
   },
});