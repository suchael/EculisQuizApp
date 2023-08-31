import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React, {useState} from 'react';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// My import



export default function RecommendedBooks() {
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
      <Text style = {styles.homeHeaderText}>Literature{"  "}2020 - 2024</Text>
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
			
				{/*Top Nav Button to Prose, Drama and Poetry*/}
				<View style = {{marginBottom:20, marginTop: 20,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
					<TouchableOpacity onPress={() => console.log("Poem")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, paddingHorizontal: 15, marginBottom: 15, backgroundColor: "gray", borderRadius: 10}}>
						<View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 20}}>
							<Text style ={{fontSize: 18, fontWeight: "900", lineHeight: 18}}>Poetry</Text>
							<FontAwesome name="angle-right" size={24} color="black" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log("Poem")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, paddingHorizontal: 15, marginBottom: 15, backgroundColor: "gray", borderRadius: 10}}>
						<View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap:20}}>
							<Text style ={{fontSize: 18, fontWeight: "900", lineHeight: 18}}>Drama</Text>
							<FontAwesome name="angle-right" size={24} color="black" />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log("Poem")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, paddingHorizontal: 15, marginBottom: 15, backgroundColor: "gray", borderRadius: 10}}>
						<View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap:20}}>
							<Text style ={{fontSize: 18, fontWeight: "900", lineHeight: 18}}>Prose</Text>
							<FontAwesome name="angle-right" size={24} color="black" />
						</View>
					</TouchableOpacity>
				</View>
				
				{/*Rendering Prose, Poetry and Drama*/}
				<Prose/>
				<Poetry/>
				<Drama/>
			</View>
		</ScrollView>
	);
}

function Poetry (){
	const navigation = useNavigation();
	return (
		<View style ={{paddingVertical: 2, marginBottom: 10, marginTop:20}}>
			<View style = {{justifyContent: "center", alignItems: "center"}}>
				<Text style={{fontSize:17, fontWeight: "bold"}}>Poetry</Text>
			</View>
			
			{/*African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>African Poetry</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			
			{/*Non African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>Non-African Poetry</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
		</View>
	);
}



function Prose (){
	const navigation = useNavigation();
	return (
		<View style ={{paddingVertical: 2, marginBottom: 0, marginTop: 20}}>
			<View style = {{justifyContent: "center", alignItems: "center"}}>
				<Text style={{fontSize:17, fontWeight: "bold"}}>Prose</Text>
			</View>
			
			{/*African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>African Prose</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			
			{/*Non African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>Non-African Prose</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
		</View>
	);
}

function Drama (){
	const navigation = useNavigation();
	return (
		<View style ={{paddingVertical: 2, marginBottom: 10, marginTop:20}}>
			<View style = {{justifyContent: "center", alignItems: "center"}}>
				<Text style={{fontSize:17, fontWeight: "bold"}}>Drama</Text>
			</View>
			
			{/*African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>African Drama</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			
			{/*Non African */}
			<Text style={{fontSize:16, fontWeight: "600", marginTop:15, marginBottom: 10}}>Non-African Drama</Text>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
			<ButtonList/>
		</View>
	);
}



function ButtonList(){
	const navigation = useNavigation ();
	return (
				<TouchableOpacity onPress={()=>navigation.navigate("Book")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: 12, marginBottom: 15}}>
					<>
						<View>
							<Text style ={{fontSize: 17, fontWeight: "500", lineHeight: 18}}>1. Panic of growing old</Text>
							<Text style ={{fontSize: 14, fontWeight: "500", paddingLeft: 18,}}>By: John Thomas</Text>
						</View>
						<FontAwesome name="angle-right" size={24} color="black" />
					</>
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






