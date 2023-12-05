import React, {useState} from "react";
import {Text,
		View,
		TouchableOpacity,
		StyleSheet,
		} from "react-native";
		

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";


// Icons


// my import 
import TruncatedText from "./TruncatedText.js";

import SubjectPickerModal from "./SubjectPickerModal.js";
import NumberPickerModal from "./NumberPickerModal.js"; 



export default function QuestButton({subject}){
	const insets = useSafeAreaInsets();
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = () => {	
  	//	requestAnimationFrame(() => { // Wrap the state change in requestAnimationFrame for optimisation 
    			setIsToggleOn(!isToggleOn);
  	//	});
	  };

	// PickerModal Visibility 
	const [modalVisible, setModalVisible] = useState(false);
	const handlePickerToggle = () => {
  	//	requestAnimationFrame(() => { // Wrap the state change in requestAnimationFrame for optimisation 
    			setModalVisible(!modalVisible);
		//  });
	};
	
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
					  <TruncatedText text = {subject.name} color = {isToggleOn? "black": "white"}/>
              		<View style = {styles.switchContainer}>
              			<View style = {{width:  isToggleOn? 22: 16, height:  isToggleOn? 22:16, borderRadius: isToggleOn? 11:8, backgroundColor: isToggleOn ?  "green": "white"}}>
              			</View>
              		</View>
              	</View>
          	</TouchableOpacity>                     
			</View>
			{isToggleOn && (
				<View style ={{ justifyContent: "center", paddingHorizontal: 25}}>
  					<View style={styles.attachedToButton}>
    						<View style={[styles.attachedToButtonLeft, {borderRadius: 10}]}>
      								<SubjectPickerModal />
    						</View>
         				   <View style={[styles.attachedToButtonRight, {borderRadius: 10}]}>
        							  <NumberPickerModal/>
      					  </View>
  					</View>
  			</View>
			)}
		</View>
	);
}


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
		borderTopWidth: 0,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		//minHeight:  150,
		minHeight: 80,
		flexDirection: "row",
		padding: 5,
		marginBottom: 12,
	},
	attachedToButtonLeft: {
		flex:1,
		borderWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 14,
		borderTopLeftRadius: 14,
	},
	attachedToButtonRight: {
		borderWidth:2,
		flex: 1,
		borderRightWidth:2,
		borderBottomWidth: 2,
		borderTopWidth: 2,
		padding: 6,
		gap: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderBottomRightRadius: 14,
		borderTopRightRadius: 14,
	},
});


