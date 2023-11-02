import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, Feather, Fontisto} from '@expo/vector-icons'; // Import your icon libraries

// My import



export default function Signup () {
  return (
    <View style ={{flex: 1,}}>
      <HomeHeader />
      <Main />
    </View>
  );
}

function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 4,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Create School Ads</Text>
      
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 80,
          flex: 1,
          backgroundColor: "lightgray",
          
        }}
      >
      	{/*Login Section*/}
      	<View style ={{flex:1, backgroundColor: "white", borderRadius: 14, marginTop: -5, borderWidth: 2, borderColor: "#999", padding: 10,}}>
      		<Text style ={{fontSize: 17, fontWeight: "500", marginBottom: 10}}>Fill the details below to get started with your school advertisements</Text>
      
      		{/*Email and Password*/}
      		<View style = {{flex: 1}}>
      			
      				{/*School name*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>School name</Text>
      					<TextInput 
								placeholder="What's the name of your school? "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - School name*/}
      
      				{/*Vacancy*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Vacancy</Text>
      					<TextInput 
								placeholder="E.g fulltime Chemistry teacher"
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Vacancy*/}
      
      
      				{/*Contact*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Contact</Text>
      					<TextInput 
								placeholder="Your School's contact "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Contact*/}
      
      
      				{/*Location*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Location</Text>
      					<TextInput 
								placeholder="Your School's location"
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2,}}
						  />
      				</View>
      				{/*Closing - Location*/}
      
      		<TouchableOpacity 
        			underlayColor="lightgray"
					style ={{borderWidth: 2, borderColor: "#888", borderRadius: 6, paddingHorizontal: 16, paddingVertical: 8, width: "100%", backgroundColor: "white", }}
	  		>
      			<View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
      				<Text style = {{fontSize: 16, fontWeight: "600"}}>Your School's picture</Text>
      				<Fontisto name="angle-down" size={16} color="black" />
      			</View>
      		</TouchableOpacity>
      			
      		</View>
      		{/*Closing - Email and Password*/}
      
      
      		<TouchableOpacity style ={{height: 42, borderRadius: 35, backgroundColor: "blue", justifyContent:"center", alignItems:"center", marginTop: 25}}>
      			<Text style ={{fontSize: 17, fontWeight: "bold", color: "white", }}>Done</Text>
      		</TouchableOpacity>
      
      		
      	</View>
      	{/*Closing - Login Section*/}
      
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  homeHeader: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },

});
