import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';


export default function JobsAndTeacherNearby() {
  return (
    <View>
      <HomeHeader />
      <Main/>
    </View>
  );
}




function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log('Searching for:', searchText);
  };

  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 8,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          flexDirection: 'row', // Display items in a row
          alignItems: 'center', // Vertically align items in the center
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ width: '15%', height: 40, justifyContent: 'center' }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>

      {/* search bar */}
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
        <TouchableHighlight
          onPress={handleSearch}
          activeOpacity={0.9}
          underlayColor="lightgray"
          style={{ flex: 1, height: 36, backgroundColor: 'lightgray', borderRadius: 18 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{
                flex: 1,
                height: 36,
                paddingHorizontal: 5,
                paddingLeft: 20,
                fontSize: 16,
              }}
              placeholder="Search by title e.g Maths"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}



function Main() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
  <ScrollView>
    <View
      style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 150,
          backgroundColor: "lightgray",
      }}
    >
    	  <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
            	Jobs and Teachers around you
          </Text>
    	{/*Location Icon*/}
		<View style = {{justifyContent: "center", alignItems: "center", width: "100%", marginTop: 20, marginBottom: 30}}>
			<View style ={{borderWidth: 2, width: 80, height: 80, borderRadius: 40, justifyContent: "center", alignItems: "center"}}>
				<Entypo name="location" size={35} color="black" />
			</View>
		</View>
		{/*Closing - Location Icon*/}
		
		<MainContent/>
    </View>
  </ScrollView>
  );
}



function MainContent() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation ();
  
  //Job Modal//
  const [jobModalVisible, setJobModalVisible] = useState(false);
  const openJobModal = ()=>{
  	setJobModalVisible(true);
  }
  
  const closeJobModal = ()=>{
  	setJobModalVisible(false);
  }
  //Ending of Job Modal//

  // Profile Modal
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const openProfileModal = ()=>{
  	setProfileModalVisible(true);
  }
  
  const closeProfileModal = ()=>{
  	setProfileModalVisible(false);
  }
  // Ending of Profile Modal

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
      <View>
       	
        {/* School Job and Teachers Button Navigation*/}
        <View style={styles.schoolJobTeachersBtnWrapper}>
          <TouchableOpacity
           	 onPress={() => {
             		 setIsSchoolJobClicked(true);
              		setIsTeacherClicked(false);
           	 }}
            	style={{height: '100%',justifyContent: 'center',alignItems: 'center',width: '48%',borderRadius: 25, ...getButtonStyle(isSchoolJobClicked)}}
          >
            	<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              		Nearby SchoolJob
            	</Text>
          </TouchableOpacity>
          <TouchableOpacity
            	onPress={() => {
              		setIsSchoolJobClicked(false);
              		setIsTeacherClicked(true);
         	   }}
            	style={{height: '100%',justifyContent: 'center',alignItems: 'center',width: '48%',borderRadius: 25, ...getButtonStyle(isTeacherClicked)}}
            >
            	<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              	Nearby Teachers
         	   </Text>
          </TouchableOpacity>
        </View>
        {/*Closing of School Job and Teachers Button Navigation*/}
        
        {isSchoolJobClicked && <SchoolJobView/>}
        {isTeacherClicked && <TeacherJobView/>}
      </View>
  );
}

function Profile(){
	const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("JobsAndTeacherNearby")}
      style={{padding: 8, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 2}}
    >
      <Text style={[styles.studentBtnText, {fontSize: 15, color: "black", fontWeight: "bold"}]}>Your Profile</Text>
    </TouchableOpacity>
  );
}



function SchoolJobView(){
	return(
		<View style ={{borderWidth: 2, paddingHorizontal: 10, paddingVertical: 12, marginTop: 15, borderRadius: 15}}>
			<Text style ={{fontSize: 16, fontWeight: "500", marginBottom: 10, marginTop: 10}}>
				Some school Jobs around you
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
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 20}}>
        	<View style ={{backgroundColor: "#777", paddingVertical: 6, paddingHorizontal: 10, marginBottom: 10, borderRadius: 2, justifyContent: "center", alignItems: "center"}}>
        		<Text style = {{fontSize: 16, fontWeight: "500", }}>23 Km away - 5 min drive </Text>
        	</View>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ flex:1 , marginLeft: 10,}}>
                    <Text style={{ fontSize: 18, fontWeight: "600" ,marginTop: -4, marginBottom: 5}}>
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
			<Text style ={{fontSize: 16, fontWeight: "500", marginBottom: 10, marginTop: 10}}>
				Teachers around you
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
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 20 }}>
        	<View style ={{backgroundColor: "#777", paddingVertical: 6, paddingHorizontal: 10, marginBottom: 10, borderRadius: 2, justifyContent: "center", alignItems: "center"}}>
        		<Text style = {{fontSize: 16, fontWeight: "500", }}>23 Km away - 5 min drive </Text>
        	</View>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ flex: 1, marginLeft: 10,  }}>
                	<Text style={{ fontSize: 18, fontWeight: "600" , marginTop: -4, marginBottom: 5}}>
                        Nicholas Mayowa 
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Location: <Text style={{fontWeight: "500"}}>Lagos</Text>
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Have taught: <Text style={{fontWeight: "500"}}>Physics and Chemistry</Text>
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginTop: 6}}>
                        23 mins ago
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
					borderRadius: apply === "Application received" ? 30: 20,
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
					borderRadius: apply === "Hired" ? 30: 20,
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
      <Text style={[styles.studentBtnText, {fontSize: 15, color: "black", fontWeight: "bold"}]}>Nearby Jobs and Teacher</Text>
    </TouchableOpacity>
  );
}





const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeHeader: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
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
            width: 120,
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
        padding: 8,
        backgroundColor: "white",
        position: "absolute",
        right: 110, 
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





