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
			<View style = {styles.container}>
		  	<TouchableOpacity 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {[styles.buttonContainer, {backgroundColor: isToggleOn ? "white" :  "gray"}]}
	      	>
              	<View style = {styles.buttonContainerRect}>
              		<Text style = {[styles.buttonRectText, {color: isToggleOn? "black": "white"}]}>
						<TruncatedText text = {subject.name} maxLength = {24}/>
					 </Text>
              		<View style = {styles.switchContainer}>
              			<View style = {{width: 16, height: 16, borderRadius: 8, backgroundColor: isToggleOn ?  "blue": "#666"}}>
              			</View>
              		</View>
              	</View>
          	</TouchableOpacity>                     
			</View>
		</View>
	);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles= StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
		borderWidth: 2,
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 32,
		borderBottomLeftRadius: 32,
		
	},
	buttonContainer:{
		flex:1,
		flexDirection: "row",
		flexDirection: "space-between",
		paddingTop: 10.8,
		paddingBottom: 10.8, 
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 32,
		borderBottomLeftRadius: 32,
	},
	buttonContainerRect:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30,
	},
	buttonRectText:{
		fontSize: 18,
	},
	
	// Switch Container 
	switchContainer:{
		padding: 2,
		borderRadius: 20,
		marginRight: 20, 
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2.4,
		borderColor: "#666"
	},
	
	
	
});


