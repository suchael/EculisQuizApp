import React from "react";
import {View,
				 Text, 
				 StyleSheet, 
				 useWindowDimensions,
				 KeyboardAvoidingView,
				TouchableHighlight,
				TextInput} from "react-native";

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function SearchInputShowKeyBoard(){
	return(
		
			<Text></Text>
		
	);
}

function InputFieldView(){
	return(
		<TouchableHighlight
			onPress={() => console.log("Search Past Questions")}
            activeOpacity={0.9}
            underlayColor="lightgray"
            style= {styles.inputContainer}         
		>
			<View style={styles.inputContainerTouchable}>
				<Text><Ionicons name="search" size={20} color="#333333" /></Text>
				<Text style={styles.inputContainerText} > Search past questions</Text>
			</View>
		</TouchableHighlight>
			
	);
}


function Header(){
	const dimHeight = useWindowDimensions().height * 0.15;	//height of header
	return(
		<View style= {styles.container}>
			<View style= {styles.top}>
				<Text style= {styles.text}>LearnApse</Text>
				<TouchableHighlight
					onPress={() => console.log("Right Top Navigation icon")}
            		activeOpacity={0.9}
            		underlayColor="lightgray" 
				>
					<Text style={styles.text}> <MaterialIcons name="menu" size={35} color="black" /></Text>
				</TouchableHighlight>
			</View>
			<InputFieldView/>
		</View>
	);
}

//height:  useWindowDimensions().height * 0.1873,
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E4F1FE",
		paddingRight: 16,
		paddingLeft:  16,
		paddingTop: 12,
		paddingBottom: 8,
		},
	text: {
		fontSize: 24,
		fontWeight: "bold",
	},
	top:{
		flexDirection: "row",
		marginBottom: 2,
		justifyContent: "space-between",
	},
	inputContainer:{
		backgroundColor: "white",
		flexDirection: "row",
		borderColor: "black",
		borderWidth: 2,
		height: 36,
		alignItems: "center",
		paddingLeft: 12,
		gap: 3,
		borderRadius: 15,
	},
	inputContainerText:{
		fontSize: 14,
		color: "#333333",
		fontWeight: "bold",
	},
	inputContainerTouchable:{
		flexDirection: "row",
	},
});


export default Header;
