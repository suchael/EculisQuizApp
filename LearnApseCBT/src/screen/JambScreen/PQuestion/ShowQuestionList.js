import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';


export default function ShowQuestionList() {
  return (
  	<>
  	  <HomeHeader/>
    	<HomeContainer/>
  	</>
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
                  paddingBottom: insets.bottom + 10,
             }]}
	>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "flex-start", padding:0}}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{marginLeft: -4}} />
      </TouchableHighlight>
      <View style = {{flexDirection: "column"}}>
      	<Text style = {styles.homeHeaderText}>English Language</Text>
      	<Text style = {{fontSize: 13, fontWeight: "700"}}>JAMB: 2004 </Text>
      </View>
    </View>
  );
}

function HomeContainer (){
	const insets = useSafeAreaInsets();
	
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    };
    
	return(
		<View  style={[styles.homeContainer,
                {
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingBottom: insets.bottom,
                }
    		]}
		>
			<HomeContainerTop/>
			<HomeContainerMiddle/>
			<HomeContainerBottomBtn/>
		</View>
	);
}

function HomeContainerTop(){
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    };
   
	return(
			<View style={{flexDirection: "row", justifyContent: "space-between"}}>
				<TouchableHighlight
        			onPress={() => console.log("Page Selector")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style = {{borderWidth:2, padding: 3, alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}
      		  >
      			  <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 14}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", color:"#222"}}>Page 1</Text>
      					<FontAwesome name="angle-down" size={28} color="black" />			 
					</View>
      		</TouchableHighlight>
			  <TouchableHighlight
        			onPress={toggleSwitch}
        			activeOpacity={0.5}
        			underlayColor="white"
        			style = {{borderWidth:2, padding: 3, paddingTop: 5, alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}
      		  >
      			  <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 14}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", color:"#222"}}>Show answers</Text>
      					<View style = {{borderWidth:2, height: 20, width: 40, justifyContent: "center", alignItems: "center"}}>
      						<Switch  style={{borderWidth: 2, borderColor: "red"}}
        							trackColor={{ false: "#767577", true: "white" }}
        							thumbColor={isEnabled ? "green" : "#f4f3f4"}
        							ios_backgroundColor="#3e3e3e"
        							onValueChange={toggleSwitch}
        							value={isEnabled}
      						/>
						</View>		 
					</View>
      		</TouchableHighlight>
			</View>
	);
}

function HomeContainerMiddle(){
	const middleStyles = StyleSheet.create({
		container: {
			borderWidth: 2,
			marginTop: 10,
			paddingBottom:  66
		},
	});
	return(
		<View style = {middleStyles.container}> 
			<ScrollView style = {{marginBottom: 20}}>
				<Text>
					hiI am a software engineer, a Company messaged me to write a website upgrade proposal to them

The name of the Company is glovs4africa, they are into selling of boxing materials around Africa and are trying to build a brand that other companies around the world can then invest in their ideas. Some of the problems they laid was
1. They have a website built with WordPress (I am a React developer 8nclude reasons why react is better) this website does not look great

2. The logo: the logo used in their website is boxing gloves, do you find any problem with this?

3. They want authentication for users

This is what I said I could do for them to make them stand out

 1. I will get a uiux designer to give them an amazing design (this cost separately)

2. The designer will help them with the logo and 

3.ill build the website with the best techniques and handle performance and all (include reasons why this is better)

4. I'll create an admin dash board where they can put content (they don't have this before include reasons why this is better and how it saves cost)

5. I'll build a database for them (they don't have this before)

6. Authentication and basic security. (Include the fact that advance security features may be added if need with extra cost)

7. Admin dash board with authentication (they can post contents)

8.I am a software engineer, a Company messaged me to write a website upgrade proposal to them

The name of the Company is glovs4africa, they are into selling of boxing materials around Africa and are trying to build a brand that other companies around the world can then invest in their ideas. Some of the problems they laid was
1. They have a website built with WordPress (I am a React developer 8nclude reasons why react is better) this website does not look great

2. The logo: the logo used in their website is boxing gloves, do you find any problem with this?

3. They want authentication for users

This is what I said I could do for them to make them stand out

 1. I will get a uiux designer to give them an amazing design (this cost separately)

2. The designer will help them with the logo and 

3.ill build the website with the best techniques and handle performance and all (include reasons why this is better)

4. I'll create an admin dash board where they can put content (they don't have this before include reasons why this is better and how it saves cost)

5. I'll build a database for them (they don't have this before)

6. Authentication and basic security. (Include the fact that advance security features may be added if need with extra cost)

7. Admin dash board with authentication (they can post contents)

8.
				</Text>
			</ScrollView>
	    </View>
	);
}

function HomeContainerBottomBtn(){
	const btnStyles = StyleSheet.create({
		container: {
			flexDirection:"row",
		    justifyContent: "space-between",
			alignItems: "center",
			position: "absolute",
			bottom: 2,
			width: "100%",
			borderWidth: 2,
			marginHorizontal: 8,
			backgroundColor: "transparent",
		},
		btn: {
			width: 90, 
			height: 46,  
			backgroundColor: "#B2BEB5", 
			alignItems: "center", 
			justifyContent: "center",
			borderRadius: 8,
			borderWidth:2,
		},
	});
	return(
		<View style={btnStyles.container} >
			<TouchableHighlight
        		onPress={() => console.log("left") }
        		activeOpacity={0.9}
        		underlayColor="lightgray"
        		style= {btnStyles.btn}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight> 
      	<TouchableHighlight
        		onPress={() => console.log("right")}
        		activeOpacity={0.9}
        		underlayColor="lightgray"
        		style= {btnStyles.btn}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>
	   </View>
	);
}

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderColor: "#999",
    borderBottomWidth:2,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  //Home Container
  homeContainer:{
    flex: 1,
    backgroundColor: "lightgray",
    //justifyContent: "space-between",
  },
});