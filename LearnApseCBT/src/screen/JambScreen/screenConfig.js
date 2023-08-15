import {View, 
        Text, 
        StyleSheet,
        TouchableHighlight } from 'react-native'
import React from 'react';
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
    <View style={[styles.homeContainer,
                {
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingTop: insets.top + 15,
                  paddingBottom: insets.bottom + 12,
                }
    ]}>
      <HomeHeader/>
    </View>
  );
}

function HomeHeader(){
  const navigation = useNavigation();
  console.log(navigation)
  return(
    <View style = {styles.homeHeader}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
      >
        <AntDesign name="arrowleft" size={27} color="#333" />
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Past Questions</Text>
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
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
});