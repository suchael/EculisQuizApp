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

import { AntDesign,
				FontAwesome,
				Entypo
				} from '@expo/vector-icons';


export default function OnlineBatGameScreen(){
	return(
		<View style ={styles.homeContainer}>
			<Main/>
		</View>
	);
}

function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView style = {{
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 8,
                      paddingBottom: insets.bottom + 8,
                      
                  }}
		>
			<ScoreBoard/>
			<OnlineBatQuestion/>
		</ScrollView>
	);
}

function ScoreBoard(){
  const navigation = useNavigation();
  
  return(
    <View style ={{borderWidth: 2, marginTop: 4, padding: 4, borderRadius: 10}}>
      <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
      	{/*Left Score board*/}
      	<View style ={{borderWidth: 2, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 6,justifyContent: "center", flexDirection: "column"}}>
      		<Text style ={{fontSize:18, fontWeight: "bold"}}>You</Text>
      
      		{/*Progress Bar*/}
      		<View style ={{marginVertical: 5}}>
      			<ProgressBarIndicator/>
      		</View>
      
      		<Text style ={{fontSize: 15, fontWeight: "500"}}>
					<Text style ={{fontSize: 14, fontWeight: "600"}}>Question: </Text> 
					2 of 10
			  </Text>
      		<Text style ={{fontSize: 17, fontWeight: "500"}}>
					<Text style ={{fontWeight: "600"}}>Score: </Text> 
					5/100
			</Text>
      	</View>
      
      	{/*Right Score board*/}
      	<View style ={{borderWidth: 2, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 6,justifyContent: "center", flexDirection: "column"}}>
      		<Text style ={{fontSize:18, fontWeight: "bold"}}>Michael419</Text>
      
      		{/*Progress Bar*/}
      		<View style ={{marginVertical: 5}}>
      			<ProgressBarIndicator/>
      		</View>
      
      		<Text style ={{fontSize: 15, fontWeight: "500"}}>
					<Text style ={{fontSize: 14, fontWeight: "600"}}>Question: </Text> 
					2 of 10
			  </Text>
      		<Text style ={{fontSize: 17, fontWeight: "500"}}>
					<Text style ={{fontWeight: "600"}}>Score: </Text> 
					15/100
			</Text>
      	</View>
      
      
      </View>
    </View>
  );
}

function ProgressBarIndicator(){
	return(
		<View style ={{borderWidth: 2, height: 12, width: 120}}>
		</View>
	);
}



function OnlineBatQuestion(){
	return(
		<View style ={{borderWidth: 2, height: 40, backgroundColor: "red", marginTop: 20 }}>
		</View>
	);
}


const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
  },
  
  
});








