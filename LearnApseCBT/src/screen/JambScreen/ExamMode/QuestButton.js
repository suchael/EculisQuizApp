import React, {useState} from "react";
import {Text,
				View,
				TouchableHighlight,
				TouchableOpacity,
				StyleSheet,
				Switch,
				Dimensions,
				} from "react-native";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// my import 
import TruncatedText from "../PQuestion/TruncatedText.js";

export default function QuestButton({subject}){
	const insets = useSafeAreaInsets();
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = ()=> setIsToggleOn(!isToggleOn);
	return(
		<View style = {{
									paddingLeft: insets.left + 10,
      							  paddingRight: insets.right + 10,
      							  flex:1,
		}}>
			
		  	<TouchableOpacity 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {[styles.buttonContainer, {backgroundColor: isToggleOn ? "white" :  "gray"}]}
	      	>
              	<View style = {styles.buttonContainerRect}>
              		<View style = {styles.switchContainer}>
              			<View style = {{width: 16, height: 16, borderRadius: 8, backgroundColor: isToggleOn ?  "blue": "#666"}}>
              			</View>
              		</View>
					  <View style = {{flex:1,}}>
							<TruncatedText text = {subject.name} color = {isToggleOn? "black": "white"} style ={{borderWidth: 2}}/>
					 </View>
              		
              	</View>
          	</TouchableOpacity>                     
			
		</View>
	);
}



const styles= StyleSheet.create({
	
	buttonContainer:{
		flex:1,
		flexDirection: "row",
		marginTop: 6,
		paddingVertical: 14,
		borderRadius: 10
	},
	buttonContainerRect:{
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
		flex:1,
	},
	buttonRectText:{
		fontSize: 18,
	},
	
	// Switch Container 
	switchContainer:{
		padding: 3,
		borderRadius: 20,
		marginRight: 20, 
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2.4,
		borderColor: "#666"
	},
	
	
	
});


