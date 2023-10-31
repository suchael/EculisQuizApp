import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,StatusBar,
        TouchableHighlight } from 'react-native';
        
import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// My imports
import ExamHistResult from "./ExamHistResult.js";
import ViewAnswers from "./ViewAnswers.js";

const Stack = createNativeStackNavigator();



export default function ExamHist() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "ExamHistHome">
      <Stack.Screen name ='ExamHistHome' component = {ExamHistHome}/>
      <Stack.Screen name ='ExamHistResult' component = {ExamHistResult}/>
      <Stack.Screen name ='ViewAnswers' component = {ViewAnswers}/>
    </Stack.Navigator>
  )
}

//<Stack.Screen name ='Result' component = {Result}/>

function ExamHistHome(){
	return(
		<View style={styles.homeContainer}>
			<StatusBar hidden={false} />
			<HomeHeader/>
			<Main/>
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
                      borderBottomWidth: 2,
                      borderBottomColor: "gray",
                  
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Result{"  "}And{" "}Exam{" "}History</Text>
    </View>
  );
}

function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView>
			<View style = {{ 
										paddingTop: insets.top + 20,
										paddingLeft: insets.left + 10, 
										paddingRight: insets.right + 10, 
										paddingBottom: insets.bottom,
										
						}}
			>
				<View style ={{borderWidth: 2, borderColor: "#888", borderRadius: 6, paddingVertical: 20, paddingHorizontal: 5}}>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
					<History/>
				</View>
			</View>
		</ScrollView>
	);
}

function History(){
	const navigation= useNavigation();
	return(
		<View style={{paddingBottom: 15, marginBottom:20}}>
					<Text style = {{fontSize:15,}}>
						<Text style={{fontSize:17, fontWeight: "600"}}>Type: </Text>
						JAMB
					</Text>
					<Text style = {{fontSize: 20}}>
						<Text style={{fontSize:17, fontWeight: "600"}}>Score: </Text>
						210/400
					</Text>
					<Text style = {{fontSize:15}}>
						<Text style={{fontSize:17, fontWeight: "600"}} >Subjects: </Text>
						English, Maths, Physics, Chemistry, Biology, literature 
					</Text>
					<Text style = {{fontSize:15}}>
						<Text style={{fontSize:17, fontWeight: "600"}}>Mode: </Text>
						Custom Exam
					</Text>
					<Text style = {{fontSize:14, fontWeight: "900"}}>
						<Text style={{fontSize:17, fontWeight: "600"}}>Date: </Text>
						Feb 12th, 2023
					</Text>
					<TouchableOpacity 
							onPress={()=> navigation.navigate("ExamHistResult")}
							style={{ height: 40, borderRadius: 25,backgroundColor: "gray", justifyContent: "center", alignItems: "center", marginTop: 8}}
					>
						<Text style = {{fontSize:16, fontWeight: "bold"}}>Details</Text>
					</TouchableOpacity>
					<View style ={{borderBottomWidth: 2, marginHorizontal: -5, marginTop: 12, borderColor: "#888" }}></View>
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
    gap: 20,
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});




