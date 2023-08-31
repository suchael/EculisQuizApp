import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign,
				FontAwesome,
				Entypo
				} from '@expo/vector-icons';


// My import
import Subject from "../PQuestion/SubjectListDb.js";
import QuestButton from "../ExamMode/QuestButton.js";
import OnlineBatGameScreen from "./OnlineBatGameScreen.js";

const Stack = createNativeStackNavigator();


export default function OnlineBat() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "OnlineBatMain">
    	<Stack.Screen name ='OnlineBatMain' component = {OnlineBatMain}/>
        <Stack.Screen name ='OnlineBatGameScreen' component = {OnlineBatGameScreen}/>
    </Stack.Navigator>
  )
}


function OnlineBatMain() {
  return (
    <View style ={{paddingHorizontal: 16,backgroundColor: "gray", flex: 1}}>
     	<HomeHeader/>
     	<Main/>
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
                      paddingBottom: insets.bottom + 4,
                      borderTopRightRadius: 22,
                      borderTopLeftRadius: 22
                  }]}>
      <Text style = {styles.homeHeaderText}>Online{"  "}Battle</Text>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{marginRight: -65,width: 60, height: 40, justifyContent: "center", alignItems: "center", }}
      >
      		<Entypo name="circle-with-cross" size={28} color="black" />
      </TouchableHighlight>
    </View>
  );
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView style ={{height: "100%", backgroundColor: "white"}}>
			<View style = {{backgroundColor: "white", flex: 1, 
										paddingLeft: insets.left + 10,
                      				  paddingRight: insets.right + 10,
                      				  paddingTop: insets.top + 12,
                      				  paddingBottom: insets.bottom + 160,
										}}
			>
				<Text style = {{fontSize: 15, fontWeight: "500", color: "black"}}>
					It is time to show your skills. Compete with people in an Online Battle within your country. 
				</Text>
				<Text style = {{fontSize: 17, fontWeight: "600", color: "black", marginTop: 15, }}>
					Choose a subject:
				</Text>
				
				{/*Subject List*/}
				<View style  ={{marginHorizontal: -10}}>
					{Subject.map((eachSubject, index)=>(
						<QuestButton key={index} subject= {eachSubject}/>
					))}
				</View>
				
			</View>
		</ScrollView>
	);
}





function BottomBtn() {
  const navigation = useNavigation ();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 0, paddingHorizontal: 16, width: "100%" , backgroundColor: "white"}}>
      <View style={{ borderWidth: 2, justifyContent: "flex-end" }}>
        	<Text style={{ fontSize: 17, fontWeight: "bold", textDecorationLine: "underline" }}>Friendly match ? </Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("OnlineBatGameScreen")} style={{ borderWidth: 2, backgroundColor: "white", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, paddingVertical: 6, borderRadius: 5 }}>
        	<Text style={{ fontSize: 17, fontWeight: "bold" }}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
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






