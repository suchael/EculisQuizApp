import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
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
import Subject from "./SubjectListDb.js";
import QuestButton from "./QuestButton.js";
import ShowQuestionList from "./ShowQuestionList.js";




const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Show question list' component={ShowQuestionList}/>
    </Stack.Navigator>
  )
}

function Home(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
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
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{borderWidth:2, width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>JAMB  Past  Questions</Text>
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
      <Tab.Screen name ="General" component={SelectByGeneral}/>
      <Tab.Screen name ="Topic Based" component={SelectByTopic}/>
    </Tab.Navigator>
  );
}


function SelectByGeneral(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  const instruction = "JAMB CBT era started in 2015, and as a result, JAMB halted the issuance of past questions from that year onwards. Much effort has been put together by teachers all over Nigeria, as well as students who sat for the exam in previous years, to compile questions from 2015 and above.\n"
  const greetings  = "\nKudos to all the Nigerian teachers out there who work tirelessly to educate our children, even in the face of difficult circumstances. You are second to none. \n\nUna do well!"
  return(
    <View style = {{
      	paddingLeft: insets.left + 10,
      	paddingRight: insets.right + 10,
      	paddingBottom: insets.bottom + 20,
      	flex:1,
      }}>
      <ScrollView style = {{marginBottom: 0, marginTop: 0}}> 
		<ReadMoreText text={instruction} msg = {greetings} maxLength={25} />
			<View style = {{paddingBottom: 80, paddingTop:10}}>
				{Subject.map((eachSubject, index)=>(
					<QuestButton key={index} subject= {eachSubject}/>
				))}
			</View>
	 </ScrollView>  
	
      <TouchableHighlight 
		 onPress={()=> navigation.navigate("Show question list")}
	     underlayColor="lightgray"
		 style={ styles.studyButton }
	  >
         <Text style={ styles.studyButtonText }>
              Study Now
         </Text>
      </TouchableHighlight>
    </View>
  );
}



function SelectByTopic(){
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  return(
    <View style = {{
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top + 15,
      paddingBottom: insets.bottom + 12,
    }}>
      <Text>Study Past Questions by topic</Text>  
    </View>
  );
}

// ReadMore Text logic
const ReadMoreText = ({ text, msg ,maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const renderText = () => {
    if (text.length <= maxLength || expanded) {
      return (
      	<>
			{text}
			<Text style={{fontSize:15, color: "#444", fontWeight: "600"}}> {msg}</Text>
		  </>
	)
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View style={{ flexDirection: 'column' , marginBottom: 20,marginTop: 18}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style= {{fontSize: 16, fontWeight: "400"}}>
			<Text style= {{fontWeight: "600", fontSize: 16}}>Note: </Text> 
			{renderText()} 
			
		</Text>
        {!expanded && text.length > maxLength && (
          <TouchableHighlight 
				onPress={toggleExpansion}
			    style={{ width: 80 }} // Apply style to the outer container
			    underlayColor="lightgray"
		  >
            <Text style={{ color: 'green' , width:80}}>
              {' Read More'}
            </Text>
          </TouchableHighlight>
        )}
      </View>
      {expanded && (
        <TouchableHighlight onPress={toggleExpansion} 
			  style={{ width: 80 }} // Apply style to the outer container
			  underlayColor="lightgray"
		>
          <Text style={{ color: 'blue', width: 80 }}>
            {'...Read Less\n'}
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};



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
    fontWeight: "500",
  },
  
  // Study Button
 studyButton:{
 	height: 42,
 	backgroundColor: "gray",
 	borderRadius: 18,
 	justifyContent: "center",
     alignItems: "center",
     position: "absolute",
    bottom:  5, // Adjust this value to control the distance from the bottom
    alignSelf: "center",
    width:  "100%",
     
  },
  studyButtonText: {
  	fontSize: 17,
  	fontWeight: "300",
  	color: "white",
   },
});





