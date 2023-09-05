import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';

import React , {useState}from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// my import
import CreateJobModal from "./CreateJobModal";



const Stack = createNativeStackNavigator();


export default function TeacherNetwork() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}} initialRouteName ="TeacherNetworkMain">
      <Stack.Screen name='TeacherNetworkMain' component = {TeacherNetworkMain}/>
      
    </Stack.Navigator>
  )
}


function TeacherNetworkMain(){
  const insets = useSafeAreaInsets();
  return(
    <View style={styles.homeContainer}>
      <HomeHeader/>
      <Main/>
      <StudentButton/>
      <JobsNearbyBtn/>
    </View>
  );
}


function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.homeHeader,{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 4,
          paddingBottom: insets.bottom + 8,
          borderBottomWidth: 0.3,
          borderColor: "gray",
        },]}
    >
        <Text style={styles.homeHeaderText}>LearnApse</Text>
        <TouchableHighlight
          style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2,justifyContent: "center", alignItems: "center", position: "absolute" , top : 0, right: 30}}
          underlayColor= "#555"
          activeOpacity={0.7} // Adjust the opacity as needed
          onPress={() => {
            // Handle bell icon click here
          }}
        >
         	  <MaterialCommunityIcons name="bell-outline" size={28} color="black" />
        </TouchableHighlight>
    </View>
  );
}
 




function Main() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation ();
  
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = ()=>{
  	setModalVisible(true);
  }
  
  const closeModal = ()=>{
  	setModalVisible(false);
  }
  

  // Change the Background and border of JobFinder or Teacher Btn when clicked 
  const [isSchoolJobClicked, setIsSchoolJobClicked] = useState(true);
  const [isTeacherClicked, setIsTeacherClicked] = useState(false);

  const getButtonStyle = (isActive) => ({
    borderWidth: isActive ? 2 : 2,
    borderColor: isActive ? 'white' : '#555',
    backgroundColor: isActive ? 'black' : 'transparent',
  });
	// Closing - Change the Background and border of JobFinder or Teacher Btn when clicked 
	
  return (
    <ScrollView>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 4,
          paddingBottom: insets.bottom + 120,
        }}
      >
        <View style={styles.teacherNetworkJobWrapper}>
          	{/*Teachers Network and Create Job wrapper*/}
          	<View style = {styles.teacherNetwork}>
            		<Text style={styles.teacherNetworkText}>Teachers</Text>
            		<Text style={styles.teacherNetworkText}>Network</Text>
          	</View>
          	<View style={styles.createJobWrapper}>
           		 <TouchableOpacity onPress={openModal}  style={styles.createJobBtn}>
            			  <Text style={{ fontSize: 17, fontWeight: '600' }}>Create Job</Text>
          		  </TouchableOpacity>
          		  <CreateJobModal visible ={modalVisible} onClose={closeModal}/>
        	  </View>
        </View>
        <Text style={{marginVertical: 15,fontSize: 16,fontWeight: '600',}}>
          	Are you in search of School Teachers, a Job or Private Lesson Tutors?
        </Text>

        {/* School Job and Teachers Button Navigation*/}
        <View style={styles.schoolJobTeachersBtnWrapper}>
          <TouchableOpacity
           	 onPress={() => {
             		 setIsSchoolJobClicked(true);
              		setIsTeacherClicked(false);
           	 }}
            	style={{height: '100%',justifyContent: 'center',alignItems: 'center',width: '45%',borderRadius: 25, ...getButtonStyle(isSchoolJobClicked)}}
          >
            	<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              		School Job
            	</Text>
          </TouchableOpacity>
          <TouchableOpacity
            	onPress={() => {
              		setIsSchoolJobClicked(false);
              		setIsTeacherClicked(true);
         	   }}
            	style={{height: '100%',justifyContent: 'center',alignItems: 'center',width: '45%',borderRadius: 25, ...getButtonStyle(isTeacherClicked)}}
            >
            	<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              	Teachers
         	   </Text>
          </TouchableOpacity>
        </View>
        {/*Closing of School Job and Teachers Button Navigation*/}
        
        {isSchoolJobClicked && <SchoolJobView/>}
        {isTeacherClicked && <TeacherJobView/>}
      </View>
    </ScrollView>
  );
}


function SchoolJobView(){
	return(
		<View style ={{borderWidth: 2, paddingHorizontal: 10, paddingVertical: 12, marginTop: 15, borderRadius: 15}}>
			<Text style ={{fontSize: 16, fontWeight: "500", marginBottom: 10}}>
				Schools where you are a top applicant 
			</Text>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			<SchoolJobBtn/>
			
			{/*More btn*/}
			<TouchableOpacity style={{borderWidth: 2, paddingVertical: 6, marginTop: 50, justifyContent: 'center',alignItems: 'center', borderRadius: 25, backgroundColor: "white"}}>
				<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
              		More
            	</Text>
			</TouchableOpacity>
		</View>
	);
}



function SchoolJobBtn(){
	const navigation= useNavigation();
    const screenWidth = Dimensions.get('window').width;
    return(
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ width: screenWidth * 0.67, marginLeft: 10,  }}>
                    <Text style={{ fontSize: 17, fontWeight: "600" ,marginTop: -4, marginBottom: 5}}>
                        Vonman International School
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        Location: <Text style={{fontWeight: "500"}}>Lagos</Text>
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        Vacancy: <Text style={{fontWeight: "500"}}>Full-time Physics and Chemistry teacher</Text>
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        Status: <Text style={{fontWeight: "500"}}>Closed</Text>
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginTop: 6}}>
                        23 mins ago
                    </Text>
                </View>
            </View>
            
            {/*Apply to Job*/}
            <ApplyBtn/>
        </View>
    );
}



function TeacherJobView(){
	return(
		<View style ={{borderWidth: 2, paddingHorizontal: 10, paddingVertical: 12, marginTop: 15, borderRadius: 15}}>
			<Text style ={{fontSize: 16, fontWeight: "500", marginBottom: 10}}>
				Teachers that would match your taste
			</Text>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			<TeacherJobBtn/>
			
			{/*More btn*/}
			<TouchableOpacity style={{borderWidth: 2, paddingVertical: 6, marginTop: 50, justifyContent: 'center',alignItems: 'center', borderRadius: 25, backgroundColor: "white"}}>
				<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
              		More
            	</Text>
			</TouchableOpacity>
		</View>
	);
}


function TeacherJobBtn(){
	const navigation= useNavigation();
    const screenWidth = Dimensions.get('window').width;
    return(
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ width: screenWidth * 0.67, marginLeft: 10,  }}>
                	<Text style={{ fontSize: 17, fontWeight: "600" , marginTop: -4, marginBottom: 5}}>
                        Nicholas Mayowa 
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        Location: <Text style={{fontWeight: "500"}}>Lagos</Text>
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                        Have taught: <Text style={{fontWeight: "500"}}>Physics and Chemistry teacher</Text>
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginTop: 6}}>
                        23 mins ago
                    </Text>
                </View>
            </View>
            
            {/*Apply to Job*/}
            <ApplyBtn/>
        </View>
    );
}




function ApplyBtn(){
	const navigation = useNavigation();
	const [apply, setIsApply] = useState ("Apply now");
	
	const handlePress = () => {
  		setIsApply((prevState) => (prevState === "Apply now" ? "Application received" : "Apply now"));
	}

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{backgroundColor: "gray", paddingVertical: 6, justifyContent: "center", alignItems: "center", borderRadius: 15, marginTop: 10}}
    >
    	<View style ={{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
      		<Text style={styles.jobsNearbyBtnText}>{apply}</Text>
      		{apply === "Application received" && (<Ionicons name="ios-checkmark-circle-outline" size={28} color="blue" />) }
        </View>
    </TouchableOpacity>
  );
}







function StudentButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      style ={{backgroundColor: "white", paddingHorizontal: 12, paddingVertical: 14, borderRadius: 20, justifyContent: "center",  alignItems: "center", position: "absolute", bottom: 12, right: 10.6,}}
    >
      <Text style={[styles.jobsNearbyBtnText, {fontSize: 13, color: "black",}]}>Student{"\n"}Mode</Text>
    </TouchableOpacity>
  );
}

  

function JobsNearbyBtn(){
	const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      style={styles.jobsNearbyBtn}
    >
      <Text style={[styles.studentBtnText, {fontSize: 15, color: "black", fontWeight: "bold"}]}>Jobs Nearby</Text>
    </TouchableOpacity>
  );
}




const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  homeHeaderText: {
    fontSize: 24,
    fontWeight: "900",
  },
  
  // wrapper
	teacherNetworkJobWrapper: {
		height: screenHeight * 0.1441,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
	},
  teacherNetwork: {
  		borderWidth: 2,
          paddingHorizontal: 18,
          paddingVertical: 6,
          borderRadius: 5,
	},
  teacherNetworkText: {
  		fontSize: 30, fontWeight: 'bold' 
	},
  createJobWrapper: {
  		height: '100%',
           justifyContent: 'flex-end',
           alignItems: 'flex-end',
	},
	createJobBtn: {
			paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 25,
            backgroundColor: 'lightgray',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
	},
  
  // Teacher and School Job Btn section
  schoolJobTeachersBtnWrapper:{
  		height: 45,
          paddingHorizontal: 0.1,
          backgroundColor: 'gray',
          borderRadius: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
	},
  
  // Bottom Botton section
  jobsNearbyBtn: {
  	  borderRadius: 20,
        padding: 8,
        backgroundColor: "white",
        position: "absolute",
        right: 150, 
		left: 10, 
		bottom: 2,
        justifyContent: "center",
		alignItems: "center",
		color: "black",
        zIndex: 1, // Adjust the zIndex value as needed
	},
	jobsNearbyBtnText:{
		fontSize: 16, fontWeight: "600",
	},
});





