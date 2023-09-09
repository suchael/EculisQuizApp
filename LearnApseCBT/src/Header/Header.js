import React , {useState} from "react";
import {View,
				Text, 
				StyleSheet, 
				useWindowDimensions,
				KeyboardAvoidingView,
				TouchableHighlight,
				TextInput} from "react-native";

import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
				
				
// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


// My import
import SearchInputScreen from "../SearchInputScreen";
import HeaderNav from "./HeaderNav/HeaderNav.js";





function Header(){
	
	const insets = useSafeAreaInsets();
	
	const navigation = useNavigation ();
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = ()=>{
  		setModalVisible(true);
    }
    const closeModal = ()=>{
  		setModalVisible(false);
    }
	return(
		<View style= {[styles.container,
									{paddingTop: insets.top + 16,
									paddingRight: insets.right + 10,
									paddingLeft: insets.left + 10}]}>
			<View style= {styles.top}>
				<Text style= {styles.learnApseText}>LearnApse</Text>
				<View style={{alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap:8}}>
					<InputFieldViewBox/>
					
					{/*Header Navigation Icon*/}
					<TouchableHighlight
						onPress={openModal}
						activeOpacity={0.9}
						underlayColor="lightgray" 
						style = {[styles.topIcons, {width: 50, height: 50, borderRadius: 25}]}
					>
						<View style ={{justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "white", borderRadius: 4, padding: 2, }}>
							<MaterialIcons name="menu" size={22} color="white" style ={{marginTop: -0.6}}/>
						</View>
					</TouchableHighlight>
					<HeaderNav visible ={modalVisible} onClose={closeModal}/>
					{/*Closing - Header Navigation Icon*/}
					
				</View>
			</View>
		</View>
	);
}


function InputFieldViewBox(){
	const navigation = useNavigation();
	return(
		<TouchableHighlight
			onPress={() => (
				navigation.navigate("SearchInputScreen") // Search input Screen component is in SearchInputScreen.js
			)}
			activeOpacity={0.9}
			underlayColor="lightgray"
			style= {styles.topIcons}         
		>
			<View style={styles.inputContainerTouchable}>
				<Text><Ionicons name="search" size={23} color="white" /></Text>
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
		backgroundColor: "#6EAAF5",
		paddingBottom: 8,
		},
	learnApseText: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white",
	},
	top:{
		flexDirection: "row",
		marginBottom: -5,
		justifyContent: "space-between",
	},
	topIcons:{
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		padding: 4,
		borderRadius: 25,
	},
	inputContainerText:{
		fontSize: 15,
		color: "#555",
		fontWeight: "200",
		letterSpacing: 0.18
	},
	inputContainerTouchable:{
		paddingTop: 3,
	},
	
	
});


export default Header;
