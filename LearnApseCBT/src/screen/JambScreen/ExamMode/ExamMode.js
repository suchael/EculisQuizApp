import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

  
  
function HomeContainer (){
	return(
		<ScrollView style = {{borderWidth:2, height:400}}  >
			<View style = {{
				width: 40,
				height: 40,
				borderWidth:2,
				position: "absolute",
				bottom: 0,
				right: 0,
				backgroundColor: "green",
				
}}>
</View>

		</ScrollView>
	);
}

export default HomeContainer;

