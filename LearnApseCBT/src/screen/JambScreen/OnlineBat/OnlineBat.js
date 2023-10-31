import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler, ActivityIndicator,
        TouchableHighlight } from 'react-native';
        
import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';

// Icons
import { AntDesign,
				FontAwesome,
				Entypo
				} from '@expo/vector-icons';


// My import
import {Subjects} from "../PQuestion/SubjectListDb.js";
import QuestButton from "./QuestButton.js";
import OnlineBatGameScreen from "./OnlineBatGameScreen.js";
import UnderLineTextBtn from "../ExamMode/UnderLineTextBtn.js";
import FindFrndByUsernameModal from "./FindFrndByUsernameModal.js";


const Stack = createNativeStackNavigator();


export default function OnlineBat() {
  return (
    <Stack.Navigator 
		screenOptions={{
			headerShown: false, 
			animation: "none", 
			lazy: true, // Enable lazy rendering
    		//lazyPreloadDistance: 1000, // Set the preload distance to 500 pixels
    		lazyPlaceholder: () => (
    			<View style ={{flex:1, justifyContent: "center", alignItems: "center"}}>
      				<ActivityIndicator size="large" color="blue" /> 
				</View>
   		  ),
		}} 
		initialRouteName = "OnlineBatMain"
	>
    	<Stack.Screen name ='OnlineBatMain' component = {OnlineBatMain} initialParams={{ showTopicBar: false }}/>
        <Stack.Screen name ='OnlineBatGameScreen' component = {OnlineBatGameScreen}/>
    </Stack.Navigator>
  )
}


function OnlineBatMain() {
  return (
    <View style ={{paddingHorizontal: 16,backgroundColor: "rgba(0,0,0,0.6)", flex: 1}}>
     	<HomeHeader/>
     	<TabBar/>
     	<BottomBtn/>
    </View>
  )
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
                      paddingBottom: insets.bottom + 6,
                      borderTopRightRadius: 12,
                      borderTopLeftRadius: 12
                  }]}>
      <Text style = {styles.homeHeaderText}>Online{"  "}Battle</Text>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{position: "absolute", bottom: 2, right: 10, width: 60, height: 40, justifyContent: "center", alignItems: "center", }}
      >
      		<Entypo name="circle-with-cross" size={28} color="black" />
      </TouchableHighlight>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function TabBar(){
	const route = useRoute()
	
	const {showTopicBar} = route.params // "showTopicBar" was passed as params in the Stack.screen 
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
      <Tab.Screen name ="Subject" component={SelectBySubject}   />
      { 
			showTopicBar && (<Tab.Screen name ="Topic" component={SelectByTopic}/>)
	  }
    </Tab.Navigator>
  );
}


function SelectBySubject(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView contentContainerStyle ={{flexGrow: 1, backgroundColor: "white"}}>
			<View style = {{backgroundColor: "white", flex: 1, 
										paddingHorizontal: insets.left + 10,            				  
                      				  paddingTop: insets.top + 12,
                      				  paddingBottom: insets.bottom + 160,
										}}
			>
				<Text style = {{fontSize: 15, fontWeight: "500", color: "black", textAlign: "center"}}>
					Compete randomly with people in an Online Battle within your country. 
				</Text>
				<Text style = {{fontSize: 17, fontWeight: "600", color: "black", marginTop: 15, }}>
					Choose a subject:
				</Text>
				
				{/*Subject List*/}
				<View style  ={{marginHorizontal: -10}}>
					{Subjects.map((eachSubject, index)=>(
						<QuestButton key={index} subject= {eachSubject} showTopicBar = {false}/>
					))}
				</View>
				
			</View>
		</ScrollView>
	);
}


function SelectByTopic(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView contentContainerStyle ={{flexGrow: 1, backgroundColor: "white"}}>
			<View style = {{backgroundColor: "white", flex: 1, 
										paddingHorizontal: insets.left + 10,            				  
                      				  paddingTop: insets.top + 12,
                      				  paddingBottom: insets.bottom + 160,
										}}
			>
				<Text style = {{fontSize: 15, fontWeight: "500", color: "black", }}>
					Compete with your friend on a topic
				</Text>
				<Text style = {{fontSize: 17, fontWeight: "600", color: "black", marginTop: 15, }}>
					Choose a subject and topic:
				</Text>
				
				{/*Subject List*/}
				<View style  ={{marginHorizontal: -10}}>
					{Subjects.map((eachSubject, index)=>(
						<QuestButton key={index} subject= {eachSubject} showTopicBar = {true}/>
					))}
				</View>
				
			</View>
		</ScrollView>
	);
}




function BottomBtn() {
  const navigation = useNavigation ();
  const route = useRoute()
  const {showTopicBar} = route.params 
  
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = ()=>{
  	setModalVisible(true);
  }
  
  const closeModal = ()=>{
  	setModalVisible(false);
  }
  
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 0, paddingHorizontal: 8, paddingBottom: 8, width: "100%" , backgroundColor: "white", paddingTop: 8, gap: 20}}>
    	{/*Underline Text button*/}
    	{
    		showTopicBar === false && (
    			<>
    				<TouchableOpacity onPress={openModal} style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", paddingHorizontal: 26, paddingVertical: 10, borderRadius: 25, backgroundColor: "black", flex: 2 }}>
        				<Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>Friendly Match ?</Text>
      		  	</TouchableOpacity>
      		  	<FindFrndByUsernameModal visible ={modalVisible} onClose={closeModal}/>
      		</>
			)
		}
      
      {/*Play Button*/}
      <TouchableOpacity onPress={()=>navigation.navigate("OnlineBatGameScreen")} style={{  backgroundColor: "gray", justifyContent: "center", alignItems: "center", paddingHorizontal: 26, paddingVertical: 10, borderRadius: 25, flex: 1 }}>
        	<Text style={{ fontSize: 17, fontWeight: "bold" }}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "white",
  },
  homeHeader: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});






