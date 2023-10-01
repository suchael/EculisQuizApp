import React, {useState} from "react";
import {Text,
				View,
				TouchableOpacity,
				StyleSheet,
				Switch,
				Dimensions,
				} from "react-native";
				

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// my import 
import TruncatedText from "./TruncatedText.js";
import YearPickerModal from "./YearPickerModal.js";
import SubjectPickerModal from "./SubjectPickerModal.js";

export default function QuestButton({subject, pickerType}){
	const insets = useSafeAreaInsets();
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = ()=> setIsToggleOn(!isToggleOn);
	
	// PickerModal Visibility 
	const [modalVisible, setModalVisible] = useState(false);
	const handlePickerToggle = () => setModalVisible(!modalVisible);
	
	
	return(
		<View style = {{
									paddingLeft: insets.left + 10,
      							  paddingRight: insets.right + 10,
      							  flex:1,
		}}>
			<View style = {[styles.container, {backgroundColor: isToggleOn? "white": "#999"}]}>
		  	<View style = {styles.containerCircle}>
             	<Text style = {styles.containerCircleText}>{subject.name[0]}</Text>
          	</View>
		  	<TouchableOpacity 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {styles.buttonContainer}
	      	>
              	<View style = {styles.buttonContainerRect}>
					  <TruncatedText text = {subject.name} maxLength = {24} color = {isToggleOn? "black": "white"}/>
              		<View style = {styles.switchContainer}>
              			<View style = {{width: 16, height: 16, borderRadius: 8, backgroundColor: isToggleOn ?  "green": "white"}}>
              			</View>
              		</View>
              	</View>
          	</TouchableOpacity>                     
			</View>
			{isToggleOn && (
				<View style = {styles.attachedToButton}>
					<View style = {styles.attachedToButtonLeft}>
						{ pickerType.toLowerCase() === "year" ? <YearPickerModal/> : <SubjectPickerModal/> }
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
		marginTop: 5,
		borderWidth: 2,
		backgroundColor: "lightgray",
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
	containerCircle:{
		borderRightWidth: 3,
		height: 50,
		width:  38,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	containerCircleText:{
		fontSize: 19,
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
	
	
	// Attached View to Button on clicked
	attachedToButton:{
		borderWidth: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		minHeight:  150,
		marginLeft: windowWidth * 0.0639,
		marginRight: windowWidth * 0.0722,
		flexDirection: "row",
		padding: 8,
		marginBottom: 4,
	},
	attachedToButtonLeft: {
		flex:1,
		borderWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 8,
		borderTopLeftRadius: 8,
	},
	attachedToButtonRight: {
		borderWidth:2, 
		flex: 1,
		borderRightWidth:2,
		borderBottomWidth: 2,
		borderTopWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomRightRadius: 8,
		borderTopRightRadius: 8,
	},
});


