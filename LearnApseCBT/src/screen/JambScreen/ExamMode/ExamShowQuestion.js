import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
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
   const [isHeaderShown, setIsHeaderShown] = useState(true);
  return (
    <View style={styles.container}>
    		<HomeHeader/>
    		<TabBar/>
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
			<ScrollView >
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
			<PrevBtn/>
			<EndExamBtn toggleModal={toggleModal} />
			<QuitExamNotif navigation={navigation} visible={modalVisible}/>
			<NextBtn/>
		</View>
	);
}


function QuestionInterface() {
  return (
    <View style={styles.questionInterfaceMain}>
        <QuestionInterfaceContainer ind = {1}/>
        <GoToNumbers/>
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

function GoToNumbers(){
	return(
		<View style={{borderRadius: 14,borderWidth:2, backgroundColor: "white", paddingVertical: 12, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, flexWrap:"wrap"}}>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			<GoToBtnList/>
			
		</View>
	);
}

function GoToBtnList(){
	return(
		<TouchableOpacity style = {{borderWidth:2, width: 48, height: 48, borderRadius: 8, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
				<Text style = {{fontSize: 16, fontWeight: "500"}}>1</Text>
		</TouchableOpacity>
	);
}


function PrevBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {left: 10}]}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
	);
}


function EndExamBtn({toggleModal}){
	const windowWidth = Dimensions.get('window').width;
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
        			style= {[styles.nextAndPrevBtn, {right: windowWidth * 0.375}]}
      	>
        	<Text style = {{fontSize: 16, fontWeight: "bold"}}>End Exam</Text>
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
        			style= {[styles.nextAndPrevBtn, {right: 10}]}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
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
  	backgroundColor: "lightblue",
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
		borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 10,
		position: "absolute",
		bottom: 0,
   },
});

