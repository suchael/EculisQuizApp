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
        style = {{borderWidth:2, width: 60, height: 40, justifyContent: "flex-start", padding:0}}
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
	return(
		<View  style={[styles.homeContainer,
                {
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingTop: insets.top + 12,
                  paddingBottom: insets.bottom + 4,
                }
    		]}
		>
		
			<Text style = {{borderWidth:2}}> Container </Text>
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
  },
});
