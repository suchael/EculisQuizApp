import {View, 
        Text, 
        StyleSheet,
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


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home}/>
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
                      paddingTop: insets.top + 15,
                      paddingBottom: insets.bottom + 12,
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
      >
        <AntDesign name="arrowleft" size={27} color="#333" />
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Past  Questions</Text>
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
    }}>
      <Tab.Screen name ="General" component={SelectByGeneral}/>
      <Tab.Screen name ="Topic Based" component={SelectByTopic}/>
    </Tab.Navigator>
  );
}

function SelectByGeneral(){
  const insets = useSafeAreaInsets();
  const instruction = "Note: Questions from 2015 and above have been compiled from students who sat for the exam, as JAMB halted the issuance of compiled questions.";
  return(
    <View style = {{
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top + 15,
      paddingBottom: insets.bottom + 12,
  }}>
      <View><ReadMoreText text={instruction} maxLength={50} /></View>
    </View>
  );
}
function SelectByTopic(){
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
const ReadMoreText = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const renderText = () => {
    if (text.length <= maxLength || expanded) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View>
      <Text>{renderText()}</Text>
      {text.length > maxLength && (
        <TouchableHighlight onPress={toggleExpansion}>
          <Text style={{ color: 'blue' }}>
            {expanded ? 'Read Less' : 'Read More'}
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
    gap: 30,
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
});