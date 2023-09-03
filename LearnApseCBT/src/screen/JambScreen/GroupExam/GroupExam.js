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
  <View style = {{backgroundColor:"#6EAAF5", paddingHorizontal: 20}}>
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
				<Text style = {{fontSize: 16, flexDirection: "row"}}>
					This feature allows you to create a unique link to an online exam. The link can be shared with other group of people who can then access the exam and participate. You also have the ability to release scores on request.{"\n"}
              	   <TouchableOpacity onPress = {openModal}>
					 		<Text style ={{color: "blue", fontSize: 16}}>{""}...Read More</Text>
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
					<ExamGrouping/>
					<ExamGrouping/>
					<ExamGrouping/>
					<ExamGrouping/>
					<ExamGrouping/>
					<ExamGrouping/>
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







