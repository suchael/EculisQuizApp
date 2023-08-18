import React, {useState} from "react";
import {Text,
				View,
				TouchableHighlight,
				StyleSheet,
				Switch,
				} from "react-native";
				
import {Dimensions} from 'react-native';


import TruncatedText from "./TruncatedText.js";
import PickerModal from "./PickerModal.js";

function QuestButton({subject}){
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = ()=> setIsToggleOn(!isToggleOn);
	
	// PickerModal Visibility 
	const [modalVisible, setModalVisible] = useState(false);
	const handlePickerToggle = () => setModalVisible(!modalVisible);
	
	
	return(
		<View style = {{marginTop: 1}}>
			<View style = {styles.container}>
		  	<View style = {styles.containerCircle}>
             	<Text style = {styles.containerCircleText}>{subject.name[0]}</Text>
          	</View>
		  	<TouchableHighlight 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {styles.buttonContainer}
	      	>
              	<View style = {styles.buttonContainerRect}>
              		<Text style = {styles.buttonRectText}>
						<TruncatedText text = {subject.name} maxLength = {24}/>
					 </Text>
              		<View style = {styles.switchContainer}>
              			<View style = {{width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: "gray", backgroundColor: isToggleOn ?  "red": "white"}}>
              			</View>
              		</View>
              	</View>
          	</TouchableHighlight>                     
			</View>
			{isToggleOn && (
				<View style = {styles.attachedToButton}>
					<View style = {styles.attachedToButtonLeft}>
						<PickerModal/>
					</View>
					<View style = {styles.attachedToButtonRight}>
						<Text style = {{fontWeight: "700", fontSize: 18}}>Total</Text>
						<Text style = {{fontWeight: "500", fontSize: 15}}>80</Text>
					</View>
				</View>
			)}
		</View>
	);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles= StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 8,
		borderColor: "green",
	},
	buttonContainer:{
		flex:1,
		borderWidth: 2,
		backgroundColor: "#C0C0C0",
		flexDirection: "row",
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		flexDirection: "space-between",
		paddingTop: 4,
		paddingBottom: 6, // This is the gap between the button and the  attached View button when clicked 
	},
	containerCircle:{
		borderWidth: 2,
		backgroundColor: "#C0C0C0",
		height: 58,
		width:  38,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	containerCircleText:{
		fontSize: 21,
	},
	buttonContainerRect:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30
	},
	buttonRectText:{
		fontSize: 18,
	},
	
	// Switch Container 
	switchContainer:{
		width:  70,
		height: 44,
		justifyContent: "center",
		alignItems: "center",
		
	},
	
	
	// Attached View to Button on clicked
	attachedToButton:{
		borderWidth: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		height: 90,
		marginLeft: windowWidth * 0.1388,
		marginRight: windowWidth * 0.0722,
		flexDirection: "row",
		paddingBottom: 4,
		paddingLeft: 4,
		paddingRight: 4,
		marginBottom: 4,
	},
	attachedToButtonLeft: {
		flex:1,
		borderRightWidth:2,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 8,
	},
	attachedToButtonRight: {
		flex: 1,
		borderRightWidth:2,
		borderBottomWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomRightRadius: 8,
	},
});




export default (QuestButton);