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
import { useNavigation } from "@react-navigation/native";




function Header(){
	const dimHeight = useWindowDimensions().height * 0.5;	//height of header
	return(
		<View style= {styles.container}>
			<View style= {styles.top}>
				<Text style= {styles.learnApseText}>LearnApse</Text>
				<TouchableHighlight
					onPress={() => console.log("Right Top Navigation icon")}
					activeOpacity={0.9}
					underlayColor="lightgray" 
				>
					<Text style={styles.text}> <MaterialIcons name="menu" size={35} color="black" /></Text>
				</TouchableHighlight>
			</View>
			<InputFieldViewBox/>
		</View>
	);
}

function InputFieldViewBox(){
	const navigation = useNavigation();
	return(
		<TouchableHighlight
			onPress={() => (
				navigation.navigate("SearchInputScreen")
			)}
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

function SearchInputShowKeyBoard(){
	return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Search past questions"
        autoFocus={true}
      />
      {/* You can add other UI elements below the input field */}
    </KeyboardAvoidingView>
  );
}

//height:  useWindowDimensions().height * 0.1873,
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E4F1FE",
		paddingRight: 16,
		paddingLeft:  16,
		paddingTop: 10,
		paddingBottom: 8,
		},
	learnApseText: {
		fontSize: 26,
		fontWeight: "bold",
	},
	top:{
		flexDirection: "row",
		marginBottom: 5,
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
		fontSize: 15,
		color: "#555",
		fontWeight: "200",
		letterSpacing: 0.18
	},
	inputContainerTouchable:{
		flexDirection: "row",
	},
});


export default Header;
