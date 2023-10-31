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
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

// My import
import ReadMoreModal from "./ReadMoreModal.js";
import GroupExamResult from "./GroupExamResult.js";
import CreateExamLink from "./CreateExamLink.js";
import LEGOMOModal from "./LEGOMOModal.js";
import CopyExamLink from "./CopyExamLink.js";


const Stack = createNativeStackNavigator();

export default function GroupExam(){
	return (
		<Stack.Navigator screenOptions={{headerShown: false, animation: "none", }} initialRouteName = "GroupExamHome">
      		<Stack.Screen name ='GroupExamHome' component = {GroupExamHome}/>
      		<Stack.Screen name ='GroupExamResult' component = {GroupExamResult}/>
      		<Stack.Screen name ='CreateExamLink' component = {CreateExamLink}/>	
      		<Stack.Screen name ='CopyExamLink' component = {CopyExamLink}/>	
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
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Group{"  "}Exam</Text>
    </View>
  );
}


function Main(){
	return(
	  	<View style={{flex: 1}}>
			<ScrollView style={{flex: 1, backgroundColor: "white",  padding: 5, }}>
				<View>
					<LearnApseGlobalMock/>
					<GroupSession/>
				</View>
			</ScrollView>
     	</View>
	);
}


function LearnApseGlobalMock(){
	const navigation= useNavigation();
	
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
    return(
    <View style ={{flex: 1, marginVertical: 16, marginHorizontal: 10, }}>
    	<Text style ={{fontSize: 17, fontWeight: "500", textAlign: "center"}}>What if you could test your JAMB UTME preparation before the actual exam? </Text>
        <TouchableOpacity onPress = {openModal} style={{ backgroundColor: "#999", paddingHorizontal: 15, paddingVertical: 12, marginTop: 15 , borderRadius: 5, }}>
        	<Text style ={{fontSize: 17, fontWeight: "500", textAlign: "center", marginTop: -4}}>Introducing...</Text>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , alignItems: "center", marginTop: 10, borderTopWidth: 2, borderColor: "lightgray", marginHorizontal: -15, paddingHorizontal: 10, paddingTop: 12}}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }}>
                	<Text> LA</Text>
                </View>
                {/*Closing ofPicture*/}
                
                <View style={{ flex: 1, marginLeft: 10,  }}>
                	<Text style={{ fontSize: 20, fontWeight: "600" , marginTop: -4, marginBottom: 5}}>
                        LEGOMO
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#333", marginTop: 4}}>
                        LearnApse Global Mock
                    </Text>
                </View>
                <FontAwesome name="angle-right" size={30} color="black"  />
            </View>
        </TouchableOpacity>
        <LEGOMOModal visible={modalVisible} onClose={closeModal}/>
        <LearnApseExamHistory/>
    </View>
    );
}

function LearnApseExamHistory(){
	const navigation=useNavigation ();
	const [historyToggle, setHistoryToggle] = useState(null);
	
	const handleToggleHistory = () =>{
		setHistoryToggle(!historyToggle)
	}
	
	return(
		<View style ={{flex: 1, justifyContent: 'center', alignItems: "center", }}>
			<View style ={{flex: 1, marginTop: -5, width: "100%", paddingTop: 10,}}>
				<View style={{ justifyContent: "center", alignItems: "center", marginBottom: 12, marginTop: -2  }}>
					<TouchableOpacity onPress = {handleToggleHistory} style ={{borderWidth: 2, paddingHorizontal: 12, paddingVertical: 4, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "58%", borderRadius: 4}}>
        				<Text style ={{fontSize: 18, fontWeight: "600"}}>LEGOMO{"  "}Exam</Text>
        				{historyToggle? 
							(<FontAwesome name="angle-up" size={24} color="black" />):(
        					<FontAwesome name="angle-down" size={24} color="black" />)
						}
        			</TouchableOpacity>
				</View>
        
        		{historyToggle && 
        			<>
        		<TouchableOpacity style ={{borderBottomWidth: 2, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5, }} onPress = {()=>navigation.navigate("GroupExamResult")}>
					<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
						<View style ={{  justifyContent: "center", marginTop: -7,}}>
							<Text style={{fontSize:19, fontWeight: "500"}}>LEGOMO{" "}-{" "}1</Text>
							<Text style={{fontSize:16, fontWeight: "500"}}>Originator: LearnApse </Text>
							<Text style={{fontSize:15, fontWeight: "900", marginTop: 4}}>January 28th, 2024</Text>
						</View>
						<FontAwesome name="angle-right" size={24} color="black"  />
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style ={{borderBottomWidth: 2, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5, }} onPress = {()=>navigation.navigate("GroupExamResult")}>
					<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
						<View style ={{  justifyContent: "center", marginTop: -7,}}>
							<Text style={{fontSize:19, fontWeight: "500"}}>LEGOMO{" "}-{" "}2</Text>
							<Text style={{fontSize:16, fontWeight: "500"}}>Originator: LearnApse </Text>
							<Text style={{fontSize:15, fontWeight: "900", marginTop: 4}}>February 28th, 2024</Text>
						</View>
						<FontAwesome name="angle-right" size={24} color="black"  />
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style ={{borderBottomWidth: 2, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5, }} onPress = {()=>navigation.navigate("GroupExamResult")}>
					<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
						<View style ={{  justifyContent: "center", marginTop: -7,}}>
							<Text style={{fontSize:19, fontWeight: "500"}}>LEGOMO{" "}-{" "}3</Text>
							<Text style={{fontSize:16, fontWeight: "500"}}>Originator: LearnApse </Text>
							<Text style={{fontSize:15, fontWeight: "900", marginTop: 4}}>March 28th, 2024</Text>
						</View>
						<FontAwesome name="angle-right" size={24} color="black"  />
					</View>
				</TouchableOpacity>
        			</>
				}
				
        	</View>
        </View>
	);
}

function GroupSession(){
	const navigation=useNavigation ();
	const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
	return(
		<View style ={{borderWidth:2.5, borderColor: "red", marginTop: 40, borderRadius: 25, paddingTop: 30,  paddingHorizontal: 10, marginBottom:50, flex: 1}}>
			<TouchableOpacity onPress={()=> navigation.navigate("CreateExamLink")} style ={{borderWidth:2, borderColor: "red", backgroundColor: "gray", paddingHorizontal: 12, paddingVertical: 8, flex: 1, flexDirection: "row",  justifyContent: 'space-between', alignItems: "center", borderRadius: 5}}>
				<MaterialIcons name="link" size={30} color="black" />
				<View>
					<Text style ={{fontSize:17, fontWeight:"bold"}}>Create Exam Link</Text>
					<Text style ={{fontSize:15, fontWeight:"500"}}>You can share a link to your exam</Text>
				</View>
				<FontAwesome name="angle-right" size={30} color="black" />
			</TouchableOpacity>
			
			<View style ={{minHeight: 30, paddingBottom: 20}}>
				<View style ={{marginTop: 15, justifyContent: "center", alignItems: "center"}}>
					<Text style ={{fontSize:17, fontWeight:"bold", marginBottom: 10}}>Group Exam History</Text>
					
					{/*Performance Issue: Copy and Paste  "ExamGrouping" multiple times*/}
					{/* and the Buttons starts to lag*/}
					
					
				</View>
			</View>
		</View>
	);
}


function ExamGrouping(){
	const navigation = useNavigation();
	return(
		<View style ={{flex: 1, borderBottomWidth: 2, borderColor: "#999", flexDirection: "row", marginTop:6, marginBottom: 15}}>
			<View style ={{flex: 1, height: 80, paddingHorizontal: 5}}>
				<TouchableOpacity onPress = {()=>navigation.navigate("GroupExamResult")}>
					<>
						<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: -7}}>
							<Text style={{fontSize:19, fontWeight: "500"}}>Mozilla Mock</Text>
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
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});













