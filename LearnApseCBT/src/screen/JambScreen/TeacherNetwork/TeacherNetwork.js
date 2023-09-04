import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';

import React , {useState}from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { AntDesign } from '@expo/vector-icons';


// my import


const Stack = createNativeStackNavigator();


export default function TeacherNetwork() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}} initialRouteName ="TeacherNetworkMain">
      <Stack.Screen name='TeacherNetworkMain' component = {TeacherNetworkMain}/>
      
    </Stack.Navigator>
  )
}


function TeacherNetworkMain(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <Main/>
      <StudentButton/>
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
                      paddingTop: insets.top + 4,
                      paddingBottom: insets.bottom + 8,
                      //borderBottomWidth: 2,
                      //borderColor: "gray",
                  }]}>
      	<Text style = {styles.homeHeaderText}>LearnApse</Text>
    </View>
  );
}


function Main(){
	const insets = useSafeAreaInsets();
	const screenHeight = Dimensions.get("window").height;
	return(
			<View style = {{ 
						
					  paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 4,
                      paddingBottom: insets.bottom}}
			>
                      <View style ={{ height:  screenHeight * 0.1441, padding: 2, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                      	<View style ={{borderWidth:2, paddingHorizontal: 18, paddingVertical: 6, borderRadius: 5}}>
                      		<Text style={{fontSize: 30, fontWeight: "bold",}}>Teachers</Text>
                      		<Text style={{fontSize: 30, fontWeight: "bold",}}>Network</Text>
                      	</View>
                      	<View style ={{height: "100%",justifyContent: "flex-end", alignItems: "flex-end"}}>
                      		<TouchableOpacity style ={{paddingVertical: 6, paddingHorizontal: 16, borderRadius: 15, backgroundColor: "lightgray", borderWidth: 2, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                      			<Text style={{fontSize: 17, fontWeight: "600",}}>Create Job</Text>
                      		</TouchableOpacity>
                      	</View>
                      </View>
                      <Text style ={{ marginVertical: 15,fontSize: 16, fontWeight: "600"}}>Are you searching for a job, teachers at your school, or private lesson tutors?</Text>
			</View>
	);
}


const Tab = createMaterialTopTabNavigator();
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
      <Tab.Screen name ="School Job" component={School}/>
      <Tab.Screen name ="Teachers" component={School}/>
    </Tab.Navigator>
  );
}

function School(){
	return(
		<View style ={{borderWidth: 2, height: 30}}>
			<Text>Hello</Text>
		</View>
	);
}



function StudentButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      style={{
        borderRadius: 20,
        padding: 8,
        backgroundColor: "gray",
        borderWidth: 2,
        position: "absolute",
        bottom: 16,
        right: 16,
        zIndex: 1, // Adjust the zIndex value as needed
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Student{"\n"}Mode</Text>
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
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 24,
    fontWeight: "900",
  },
  
  
});





