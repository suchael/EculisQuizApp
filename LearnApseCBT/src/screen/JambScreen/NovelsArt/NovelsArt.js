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
import RecommendedBooks from "./RecommendedBooks.js";
import Book from "./Book.js";
import BookChapter from "./BookChapter.js";


const Stack = createNativeStackNavigator();


export default function NovelsArt() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "NovelsArtMain">
    	<Stack.Screen name ='NovelsArtMain' component = {NovelsArtMain}/>
        <Stack.Screen name ='RecommendedBooks' component = {RecommendedBooks}/>
        <Stack.Screen name ='Book' component = {Book}/>
        <Stack.Screen name ='BookChapter' component = {BookChapter}/>   
    </Stack.Navigator>
  )
}


function NovelsArtMain() {
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
      <Text style = {styles.homeHeaderText}>Novels{"  "}And{" "}Art</Text>
    </View>
  );
}


function Main(){
	return(
		<ScrollView>
				<JAMB_ProseCarousel/>
				<DepartmentOfArt/>
		</ScrollView>
	);
}


function JAMB_ProseCarousel(){
	const insets = useSafeAreaInsets();
	return(
	<View style = {{
											paddingLeft: insets.left + 10,
                      					  paddingRight: insets.right + 10,
                      					  paddingTop: insets.top + 12,
                      					  paddingBottom: insets.bottom + 15,
									}}>
		<Text style = {{fontSize: 17, fontWeight:"500", color: "#555", marginBottom:20, }}>
						JAMB compulsory prose
		</Text>
		<TouchableOpacity>
			<View style = {{justifyContent: "center", alignItems: "center", paddingVertical: 4}}>
				<View style = {{borderWidth: 2, justifyContent: "center", alignItems: "center", width: 160, height: 160 , borderRadius: 5}}>
					<Text >The Life Changer</Text>
				</View>
				<Text style ={{fontSize: 16, fontWeight: "500", marginTop:5}}>2023/2024</Text>
				<View style = {{borderWidth: 2, width: 40, marginTop: 10}}>
				</View>
		</View>
		</TouchableOpacity>
	</View>
	);
}

function DepartmentOfArt(){
	const insets = useSafeAreaInsets();
	return(
		<View style = {{
											paddingLeft: insets.left + 10,
                      					  paddingRight: insets.right + 10,
                      					  paddingBottom: insets.bottom + 20,
                      					  borderWidth:2, 
                      					  marginTop: 25,
                      					  marginHorizontal: 10,
                      					  borderRadius: 20,
                      					  marginBottom: 140,
                      					  backgroundColor: "lightgray",
                      					  
									}}
		>
			<View style= {{justifyContent: "center", alignItems: "center"}}>
				<Text style = {{fontSize:18, fontWeight: "600", marginBottom: 10, marginTop:10}}>Department of Art</Text>
			</View>
			<Text style = {{fontSize:15, fontWeight: "500", color: "#666", marginBottom:5}}>This section is strictly for Art students</Text>
			
			{/*Literary-Dramatic Terms*/}
			<View style= {{justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingVertical: 20}}>
				<TouchableOpacity style = {{backgroundColor: "#777", borderRadius: 15, paddingHorizontal: 18, paddingVertical: 10, marginTop: 4, width: "44%"}}>
					<View style = {{justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: 2}}>
						<Text style ={{fontSize: 15, fontWeight: "600"}}>Literary{"\n"}Appreciation</Text>
						<FontAwesome name="angle-right" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style = {{backgroundColor: "#777", borderRadius: 15, paddingHorizontal: 18, paddingVertical: 10, marginTop: 4, width: "44%"}}>
					<View style = {{justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: 2}}>
						<Text style ={{fontSize: 15, fontWeight: "600"}}>Dramatic{"\n"}Terminologies </Text>
						<FontAwesome name="angle-right" size={24} color="black" />
					</View>
				</TouchableOpacity>
			</View>
			
			{/*Literare Books*/}
			<View style ={{marginVertical:15}}>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
				<LitYearBtn/>
			</View>
		</View>
	);
}


function LitYearBtn(){
	const navigation= useNavigation ();
	return(
		<TouchableOpacity 
					onPress={()=> navigation.navigate("RecommendedBooks")}
					style = {{backgroundColor: "#777", borderRadius: 15, paddingHorizontal: 18, paddingVertical: 12, marginBottom: 8}}>
					<View style = {{justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
						<Text style ={{fontSize: 17, fontWeight: "600"}}>Literature Text: 2020 - 2024</Text>
						<FontAwesome name="angle-right" size={24} color="black" />
					</View>
		</TouchableOpacity>
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






