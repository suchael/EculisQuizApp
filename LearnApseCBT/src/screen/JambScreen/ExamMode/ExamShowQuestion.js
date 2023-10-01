import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler, FlatList,
        TouchableHighlight } from 'react-native';
        
import React , {useState, useEffect} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// My import
import QuitExamNotif from "./QuitExamNotif.js";
//import subjects from  "../../../SubjectDb.js";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function ShowQuestionList() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component = {Home}/>
    </Stack.Navigator>
  )
}



function Home() {
  
  return (
    <View style={styles.container}>
    		<HomeHeader/>
    		<TabBar/>
    		<BottomButtons/>
    	
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
                      paddingBottom: insets.bottom + 4,
                  }]}>
      <View style= {{flexDirection: "row", gap:15}}>
      	<View style = {{backgroundColor: "gray", width: 120, padding: 4, borderRadius: 4, flexDirection: "row", gap: 5, justifyContent: "center", alingitems: "center"}}>
      		<Ionicons name="md-alarm-outline" size={26} color="black" style = {{marginLeft: -4}}/>
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
        animation: "none",
    }}>
      <Tab.Screen name ="Maths" component={MainContainer}/>
      <Tab.Screen name ="Phys" component={MainContainer}/>
      <Tab.Screen name ="Chem" component={MainContainer}/>
	  <Tab.Screen name ="Biol" component={MainContainer}/>
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


function QuestionInterface() {
  return (
    <View style={styles.questionInterfaceMain}>
        <QuestionInterfaceContainer ind = {1}/>
        <GoToBtnList/>
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
						Question {ind}/40
					</Text>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			<View style = {styles.optionMain}>
				<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						A{". "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>			
         	   </TouchableOpacity>
         	<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						B{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </TouchableOpacity>
				<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						C{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </TouchableOpacity>
         	<TouchableOpacity style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						D{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>			
         	   </TouchableOpacity>
			</View>
		</View>
	);
}




// Display List of nswered numbers

function GoToBtnList() {
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
}







function BottomButtons(){
	const navigation = useNavigation ();
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
		<View style ={{paddingVertical: 0, height: 60, backgroundColor: "transparent", position: "absolute", bottom:0, left: 15, right: 15, zIndex: 1, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
			<EndExamBtn toggleModal={openModal} />
			<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
			<QuitExamNotif navigation={navigation} visible={modalVisible} PASSWORD= {PASSWORD} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} closeModal={closeModal}/>
		</View>
	);
}


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
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 22,
    fontWeight: "600",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "lightgray",
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
		marginTop: -2, 
		marginBottom: 4,
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
		borderRadius: 10, 
		marginBottom: 6, 
		backgroundColor: "white" ,
		minHeight: 50
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
		borderRadius: 18,
		marginBottom: -13
   },
});

