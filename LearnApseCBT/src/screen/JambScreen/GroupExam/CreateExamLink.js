import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// My import 
//import CopyExamLink from "./CopyExamLink.js";


function CreateExamLink({ visible, onClose }){
  const [examTitle, setExamTitle] = useState(''); // State for exam title
  const [createdBy, setCreatedBy] = useState(''); // State for created by
  const navigation = useNavigation();
  
  return (

      <View style={styles.modal}>
      
      	{/* Exit Button */}
        <TouchableHighlight 
					onPress={()=>{navigation.goBack()}} 
					style={styles.exitButton}
					underlayColor="lightgray"
			 		activeOpacity={0.9}
		>
          	<Entypo name="cross" size={30} color="gray" />
        </TouchableHighlight>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        	<View style ={{justifyContent: "center", alignItems: "center"}}>
        		<Text style={styles.heading}>Create Exam Link</Text>
        	</View>
          
          
          <View style ={{marginTop: 50}}>
    	      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      				{/*Exam  Title*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Exam Title</Text>
      					<TextInput 
								placeholder="E.g XYZ Mock "
								onChangeText={(text) => setExamTitle(text)} // Update exam title state
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Exam Title*/}
      
      				{/*Created By*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Created by</Text>
      					<TextInput 
								placeholder="E.g Mr Samuel"
								onChangeText={(text) => setCreatedBy(text)} // Update created by state
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Created by*/}
      			</KeyboardAvoidingView>
       
       		<View style ={{ justifyContent: "center", alignItems: "center"}}>
       			<View style ={{width: "80%", borderWidth: 2, borderColor: "#888", backgroundColor: "lightgray", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 3, marginTop: 20, marginBottom: 30}}>
       				<Text style={styles.instruction}>
        	    			Note: To reduce exam malpractice, we ensure that students cannot use multiple tabs or web browsers. Attempting to do so would quit the exam.
       	  		 </Text>
       			</View>
       		</View>
       	   
       	   <TouchableOpacity
           	 style={styles.continueButton}
           	 onPress={() => navigation.navigate("CopyExamLink")}
         	 >
           	 	<Text style={styles.buttonText}>Continue</Text>
          	</TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 20,
  },
  exitButton: {
    position: 'absolute',
    top: 0,
    left: 15,
    padding: 10,
    zIndex: 1,
    borderRadius: 15,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  
  instruction: {
    fontSize: 16,
    //textAlign: "justify",
  },
  continueButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateExamLink;
