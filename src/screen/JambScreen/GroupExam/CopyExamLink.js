import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';

export default function CopyExamLink(){
	const navigation = useNavigation();
	
	const EXAMLINK = "https://LearnApse.com/GroupExam/AsMNiM1ImvwQNwgLVdk1lA";
	const copyToClipboard = async () => {
  		const textToCopy = EXAMLINK;

  		try { // Attempt to copy the text to the clipboard
    		await Clipboard.setString(textToCopy);
    		alert("Link copied successfully");
  		} catch (error) {
    		alert("Copy failed. Please try again.");
  		}
	};
	
	return(
	<ScrollView>
		<View style ={{flex: 1, paddingVertical: 50, paddingHorizontal: 10}}>
			<Text style ={{fontSize: 18, fontWeight: "500", marginBottom: 25}}>
				You created{" "} 
				<Text style ={{fontSize: 20, fontWeight: "600"}} >
					EdPlug Mock
				</Text>
			</Text>
			
			<View style ={{flexDirection: "row", gap: 10, marginBottom: 25}}>
				<MaterialIcons name="link" size={50} color="black" />
				<View>
					<Text style ={{fontSize: 20, fontWeight: "600"}} >
						Exam Link
					</Text>
					<Text style ={{fontSize: 16, fontWeight: "500"}} >
						{EXAMLINK}
					</Text>
				</View>
			</View>
			
			<TouchableOpacity onPress={()=>copyToClipboard()}  style = {{borderWidth: 2, padding: 5, borderRadius: 6, flexDirection: "row", gap: 20, alignItems: "center"}}>
				<MaterialIcons name="content-copy" size={30} color="black" />
				<Text style ={{fontSize: 16, fontWeight: "500"}} >
						Copy link
				</Text>
			</TouchableOpacity>
			<Text style ={{fontSize: 16, fontWeight: "500"}} >
				Anyone with LearnApse can use this link to join this exam. 
			</Text>
			
			<TouchableOpacity
           	 style={styles.doneButton}
           	 onPress={() => navigation.navigate("GroupExamHome")}
         	 >
           	 	<Text style={styles.buttonText}>Done</Text>
          	</TouchableOpacity>
		</View>
	</ScrollView>
	);
}


const styles = StyleSheet.create({
  doneButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
