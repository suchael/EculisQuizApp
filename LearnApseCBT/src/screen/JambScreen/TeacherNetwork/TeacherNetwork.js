import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        Animated,
        Easing,
        TouchableHighlight } from 'react-native';

import React , {useState, useEffect}from 'react';
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
import CreateJobModal from "./CreateJobModal.js";
import JobsAndTeacherNearby from "./JobsAndTeacherNearby.js";
import Profile from "./Profile.js";
import CreateJob from "./CreateJob.js";


const Stack = createNativeStackNavigator();


export default function TeacherNetwork() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}} initialRouteName ="TeacherNetworkMain">
      <Stack.Screen name='TeacherNetworkMain' component = {TeacherNetworkMain}/>
      <Stack.Screen name='JobsAndTeacherNearby' component = {JobsAndTeacherNearby}/>
      <Stack.Screen name='Profile' component = {Profile}/>
      <Stack.Screen name='CreateJob' component = {CreateJob}/>
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
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 120,
        }}
      >
      <ScrollLoginText/>
      {/*Teachers Network and Create Job wrapper*/}
        <View style={styles.teacherNetworkJobWrapper}>
        	  
                    
          	<View style = {styles.teacherNetwork}>
            		<Text style={styles.teacherNetworkText}>Teachers</Text>
            		<Text style={styles.teacherNetworkText}>Network</Text>
          	</View>
          	<View style={[styles.createJobWrapper, {backgroundColor: "#888", borderRadius: 20}]}> 
				   <TouchableOpacity onPress ={ ()=>navigation.navigate("CreateJob") }  style={styles.createJobBtn}>
            			  <Text style={{ fontSize: 14, fontWeight: '600', color: "white"  }}>Create School Ads</Text>
          	    </TouchableOpacity>		  
          		<TouchableOpacity onPress ={ ()=>navigation.navigate("Profile") } style={styles.createJobBtn}>
            			  <Text style={{ fontSize: 14, fontWeight: '600', color: "white" }}>Your profile</Text>
          		  </TouchableOpacity>
    
        	  </View>
        </View>
        {/*Closing -*Teachers Network and Create Job wrapper*/}
        
       
        <Text style={{marginVertical: 35,  fontSize: 16,fontWeight: '600',}}>
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
              		School Ads
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

function ScrollLoginText(){
	const [position, setPosition] = useState(new Animated.Value(30));

  useEffect(() => {
    const moveText = () => {
      position.setValue(-30); // Reset the position to the initial value
      Animated.timing(position, {
        toValue:  30, // Adjust this value for the desired range of movement
        duration: 5600, // decreasing this value will increase the Text speed
        easing: Easing.linear, // You can use other easing functions
        useNativeDriver: true,
      }).start(moveText); // Recursively call moveText when the animation is done
    };

    moveText(); // Start the initial animation
  }, []);
	return(
		<Animated.Text style={{ transform: [{ translateX: position }], fontSize: 14, fontWeight: "500" , marginTop: -4, paddingVertical: 4, textAlign: "center", backgroundColor: "white", marginBottom: 25}} numberOfLines={2}>
                    You're not logged in, please Login
      </Animated.Text>
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
                
                <View style={{ flex:1 , marginLeft: 10,}}>
                    <Text style={{ fontSize: 18, fontWeight: "600" ,marginTop: -4, marginBottom: 5}} numberOfLines ={2}>
                        Vonman International School of Nigeria and Abroad 
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Location: <Text style={{fontWeight: "500"}}>Lagos</Text>
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Vacancy: <Text style={{fontWeight: "500"}}>Full-time Physics and Chemistry teacher</Text>
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" , marginTop: 6}}>
                        Number of Applicants: <Text style={{fontWeight: "500"}}>20</Text>
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#333",}}>
                        23 mins ago
                    </Text>
                </View>
            </View>
            
            {/*Apply to Job*/}
            <SchoolApplyBtn/>
        </View>
    );
}



function TeacherJobView(){
	return(
		<View style ={{borderWidth: 2, paddingHorizontal: 10, paddingVertical: 12, marginTop: 15, borderRadius: 15}}>
			<Text style ={{fontSize: 16, fontWeight: "500", marginBottom: 10}}>
				Checkout some exotic teachers
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
    
    return(
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ flex: 1, marginLeft: 10,  }}>
                	<Text style={{ fontSize: 18, fontWeight: "600" , marginTop: -4, marginBottom: 5}} numberOfLines={2}>
                        Nicholas Mayowa 
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Location: <Text style={{fontWeight: "500"}}>Lagos</Text>
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Have taught: <Text style={{fontWeight: "500"}}>Physics and Chemistry</Text>
                    </Text>
                </View>
            </View>
            
            {/*Apply to Job*/}
            <TeacherApplyBtn/>
        </View>
    );
}




function SchoolApplyBtn(){
	const navigation = useNavigation();
	const [apply, setIsApply] = useState ("Apply now");
	
	const handlePress = () => {
  		setIsApply((prevState) => (prevState === "Apply now" ? "Application received" : "Apply now"));
	}

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{backgroundColor: apply ==="Application received"? "#666":"#777", 
      			  borderWidth: apply === "Application received" ? 2:2, 
					borderColor: apply === "Application received" ? "black": "gray",
					borderRadius: apply === "Application received" ? 30: 15,
					paddingVertical: 6, justifyContent: "center", alignItems: "center", marginTop: 10}}
    >
    	<View style ={{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
      		<Text style={styles.jobsNearbyBtnText}>{apply}</Text>
      		{apply === "Application received" && (<Ionicons name="ios-checkmark-circle-outline" size={28} color="blue" />) }
        </View>
    </TouchableOpacity>
  );
}

function TeacherApplyBtn(){
	const navigation = useNavigation();
	const [apply, setIsApply] = useState ("Hire me");
	
	const handlePress = () => {
  		setIsApply((prevState) => (prevState === "Hire me" ? "Hired" : "Hire me"));
	}

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{backgroundColor: apply ==="Hired"? "#666":"#777", 
      			  borderWidth: apply === "Hired" ? 2:2, 
					borderColor: apply === "Hired" ? "black": "gray",
					borderRadius: apply === "Hired" ? 30: 15,
					paddingVertical: 6, justifyContent: "center", alignItems: "center", marginTop: 10}}
    >
    	<View style ={{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
      		<Text style={styles.jobsNearbyBtnText}>{apply}</Text>
      		{apply === "Hired" && (<Ionicons name="ios-checkmark-circle-outline" size={28} color="blue" />) }
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
      onPress={() => navigation.navigate("JobsAndTeacherNearby")}
      style={styles.jobsNearbyBtn}
    >
      <Text style={[styles.studentBtnText, {fontSize: 15, color: "black", fontWeight: "bold"}]}>Nearby{"\n"}Jobs</Text>
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
           justifyContent: "space-between",
           alignItems: 'flex-end',
	},
	createJobBtn: {
			paddingVertical: 6,
            paddingHorizontal: 5,
            width: 145,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "white",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
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
          //marginBottom: 5,
	},
  
  // Bottom Botton section
  jobsNearbyBtn: {
  	  borderRadius: 20,
        padding: 11,
        backgroundColor: "white",
        position: "absolute",
		left: 10.6, 
		bottom: 12,
        justifyContent: "center",
		alignItems: "center",
		color: "black",
        zIndex: 1, // Adjust the zIndex value as needed
	},
	jobsNearbyBtnText:{
		fontSize: 16, fontWeight: "600",
	},
});





