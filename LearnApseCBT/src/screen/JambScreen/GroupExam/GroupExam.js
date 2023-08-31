<<<<<<< HEAD
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [result, setResult] = useState('');
=======
import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';


// My import
import ReadMoreModal from "./ReadMoreModal.js";
import GroupExamResult from "./GroupExamResult.js";
import CreateExamLinkModal from "./CreateExamLinkModal.js";

const Stack = createNativeStackNavigator();

export default function GroupExam(){
	return (
		<Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "GroupExamHome">
      		<Stack.Screen name ='GroupExamHome' component = {GroupExamHome}/>
      		<Stack.Screen name ='GroupExamResult' component = {GroupExamResult}/>
      		<Stack.Screen name ='CreateExamLinkModal' component = {CreateExamLinkModal}/>	
    	</Stack.Navigator>
	);
}
>>>>>>> FirstBranch

  const handleButtonPress = useCallback((value) => {
    if (value === '=') {
      try {
        const newResult = eval(prevInput + input);
        setResult(newResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      setPrevInput('');
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'sqrt') {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === 'del') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  }, [input, prevInput]);

<<<<<<< HEAD
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['sqrt', '=', 'del'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonsRow}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#EFEFF4',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputText: {
    fontSize: 48,
    color: 'black',
  },
  resultText: {
    fontSize: 32,
    color: 'gray',
  },
  buttonsContainer: {
    flex: 3,
    backgroundColor: '#EFEFF4',
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F6',
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});

export default CalculatorApp;
=======

function GroupExamHome(){
	return(
		<View style={styles.homeContainer}>
			<HomeHeader/>
			<Main/>
		</View>
	);
}


function HomeHeader(){
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return(
  <View style = {{backgroundColor:"lightblue"}}>
    <View style = {[styles.homeHeader, 
                    {
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 12,
                      paddingBottom: insets.bottom + 4,
                      borderBottomWidth: 2,
                      borderBottomColor: "gray",
                  
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: 10}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Group{"  "}Exam</Text>
    </View>
  </View>
  );
}

function Main(){
	return(
		<ScrollView>
			<InstructionBtn/>
			<GroupSession/>
		</ScrollView>
	);
}

function InstructionBtn(){
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
    BackHandler.addEventListener('hardwareBackPress', closeModal);
  };

  const closeModal = () => {
    setModalVisible(false);
    BackHandler.removeEventListener('hardwareBackPress', closeModal);
    return true;
  };
 
	return (
		<View style = {{flexDirection: "column", justifyContent: "center", alignItems: "center", justifyContent: "center",marginVertical: 14,paddingLeft: 10,}}>
				<Text style = {{fontSize:16, fontWeight: "bold"}}>Attention: </Text>
				<Text style = {{fontSize: 16}}>
					This feature allows you to create a unique link to an online exam. The link can be shared with other group of people who can then access the exam and participate. You also have the ability to release scores on request.{"\n"}
              	   <TouchableOpacity onPress = {openModal}>
					 		<Text style ={{color: "blue"}}>{""}...Read More</Text>
					</TouchableOpacity>
				</Text> 
				<ReadMoreModal visible={modalVisible} onClose={closeModal}/>
			</View>
	);
}




function GroupSession(){
	const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
	return(
		<View style ={{padding:10, marginBottom:50,}}>
			<TouchableOpacity onPress={openModal} style ={{backgroundColor: "gray", padding: 8, borderRadius:16,justifyContent: "center", alignItems:"center"}}>
				<Text style ={{fontSize:17, fontWeight:"bold"}}>Create Exam Link</Text>
			</TouchableOpacity>
			<CreateExamLinkModal visible={modalVisible} onClose={closeModal} />
			<View style ={{borderWidth:2, marginTop: 40, borderRadius:15, paddingVertical: 12, paddingHorizontal:10, minHeight: 30}}>
				<View style ={{justifyContent: "center", alignItems: "center"}}>
					<Text style ={{fontSize:17, fontWeight:"bold", marginBottom: 10}}>Group Exam History</Text>
					
					{/*Performance Issue: Copy and Paste  "ExamGrouping" multiple times*/}
					{/* and the Buttons starts to lag*/}
					<ExamGrouping/>
					
				</View>
			</View>
		</View>
	);
}


function ExamGrouping(){
	const navigation = useNavigation();
	return(
		<View style ={{borderBottomWidth: 2, borderColor: "#999", flexDirection: "row", marginTop:6, marginBottom: 15}}>
			<View style ={{width: "15%", borderWidth:2, height:60 , borderRadius: 10}}>
			</View>
			<View style ={{width: "85%", height: 80, paddingHorizontal: 5}}>
				<TouchableOpacity onPress = {()=>navigation.navigate("GroupExamResult")}>
					<>
						<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: -7}}>
							<Text style={{fontSize:19, fontWeight: "500"}}>LearnApse Mock</Text>
							<Text style={{fontSize:12, fontWeight: "900"}}>7/14/23</Text>
						</View>
						<Text style={{fontSize:16}}>Creator: You </Text>
					</>
				</TouchableOpacity>
				<TouchableOpacity style={{padding: 5, backgroundColor: "gray", width: 75, alignItems: "center", justifyContent: "center", borderRadius: 3}}>
						<Text style={{fontSize:15}}>Copy link</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}





const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
    
  },
  homeHeader: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    gap: 2,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});







>>>>>>> FirstBranch
