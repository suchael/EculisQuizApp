import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, Feather, FontAwesome} from '@expo/vector-icons'; // Import your icon libraries

// My import
import UnderLineTextBtn from "../ExamMode/UnderLineTextBtn.js";
import RadioBtn from "./RadioBtn.js";
import StateOfOriginModal from "./StateOfOriginModal.js";



export default function Signup () {
  return (
    <View style ={{flex: 1,}}>
      <HomeHeader />
      <Main />
    </View>
  );
}

function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 4,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Signup</Text>
      
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  
  //For Radio Btn
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 10,
          flex: 1,
          backgroundColor: "lightgray",
          
        }}
      >
      	{/*Login Section*/}
      	<View style ={{backgroundColor: "white", minHeight: 500, borderRadius: 14, marginTop: -5, borderWidth: 2, borderColor: "#999", padding: 10,}}>
      		<Text style ={{fontSize: 17, fontWeight: "500", marginBottom: 10}}>Fill the details below to get started</Text>
      			
      
      		{/*Email and Password*/}
      		<View style = {{}}>
      			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      				{/*First name*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>First name</Text>
      					<TextInput 
								placeholder=" "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - first name*/}
      
      				{/*Last name*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Last name</Text>
      					<TextInput 
								placeholder=" "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Last name*/}
      
      
      				{/*Email*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Email</Text>
      					<TextInput 
								placeholder=" "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Email*/}
      
      				{/*Password*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Password</Text>
      					<TextInput 
								placeholder=" "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing - Password*/}
      
      				{/*Username*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Username</Text>
      					<TextInput 
								placeholder=" "
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "black",}}
						  />
      				</View>
      				{/*Closing - Username*/}
      			</KeyboardAvoidingView>
      		</View>
      		{/*Closing - Email and Password*/}
      
      		{/*Location*/}
      		<View style ={{flex: 1, marginTop: 10, alignItems: "flex-start"}}>
      			<StateOfOriginModal Type ="State Of Origin"/>
      		</View>
      		{/*Closing: Location*/}
      
      		<View style ={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
      			<Text style ={{fontSize: 15, fontWeight: "bold"}}>Who are you?</Text>
      		</View>
      		
      		{/*Radio btn*/}
      		<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5}}>
      			<RadioBtn text="Student" selected={selectedOption === 'Student'} onSelect={() => handleOptionSelect('Student')}/>
      			<RadioBtn text="Teacher" selected={selectedOption === 'Teacher'} onSelect={() => handleOptionSelect('Teacher')}/>
      			<RadioBtn text="School" selected={selectedOption === 'School'} onSelect={() => handleOptionSelect('School')}/>
      		</View>
      		{/*Closing - Radio btn*/}
      
      		<TouchableOpacity style ={{height: 42, borderRadius: 35, backgroundColor: "blue", justifyContent:"center", alignItems:"center", marginTop: 25}}>
      			<Text style ={{fontSize: 17, fontWeight: "bold", color: "white", }}>Signup</Text>
      		</TouchableOpacity>
      
      		
      	</View>
      	{/*Closing - Login Section*/}
      
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  homeHeader: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },

});
