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
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// My import
import JambSyllabusContent from "./JambSyllabusContent.js";

const Stack = createNativeStackNavigator();


export default function JambSyllabus() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "JambSyllabusMain">
      <Stack.Screen name ='JambSyllabusMain' component = {JambSyllabusMain}/>
      <Stack.Screen name ='JambSyllabusContent' component = {JambSyllabusContent}/>
    </Stack.Navigator>
  )
}


function JambSyllabusMain() {
  return (
    <View>
     	<HomeHeader/>
     	<Main/>
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
      <Text style = {styles.homeHeaderText}>Jamb{"  "}Syllabus</Text>
    </View>
  );
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView>
			<View style = {{
											paddingLeft: insets.left + 10,
                      					  paddingRight: insets.right + 10,
                      					  paddingTop: insets.top + 12,
                      					  paddingBottom: insets.bottom + 140,
									}}
			>
				<Text style = {{fontSize: 17, fontWeight:"500", color: "#555", marginBottom:20, }}>
						Select Subject: 
				</Text>
				<JambSubjectList/>
				<JambSubjectList/>
				<JambSubjectList/>
			</View>
		</ScrollView>
	);
}

function JambSubjectList (){
	const navigation = useNavigation();
	return (
		<View style ={{paddingVertical: 2, marginBottom: 0}}>
			<View>
				<TouchableOpacity onPress={()=>navigation.navigate("JambSyllabusContent")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
					<>
						<Text style ={{fontSize: 17, fontWeight: "500"}}>1. Physics</Text>
						<FontAwesome name="angle-right" size={24} color="black" />
					</>
				</TouchableOpacity>
			</View>
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






