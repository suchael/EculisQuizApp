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
  TextInput
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, Feather, FontAwesome} from '@expo/vector-icons'; // Import your icon libraries

// My import
import UnderLineTextBtn from "../ExamMode/UnderLineTextBtn.js";



export default function LoginAndSignup() {
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
      <Text style={styles.homeHeaderText}>Login{"  "}or{"  "}Signup</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
  setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
};


  const handleLogin = () => {
    	if (username === 'Success' && password === 'Eculis') {
      		Alert.alert('Login Successful', 'Welcome!');
    	} else {
      		Alert.alert('Login Failed', 'Invalid username or password');
    	}
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
      	<View style ={{backgroundColor: "white", minHeight: 500, borderRadius: 14, marginTop: 15, borderWidth: 2, borderColor: "#999", paddingVertical: 15, paddingHorizontal: 10}}>
      		{/*LearnApse Logo*/}
      		<View style ={{justifyContent: "center", alignItems: "center"}}>
      			<View style ={{borderWidth: 2, height: 80, width: 80, borderRadius: 40}}>
      			</View>
      		</View>
      		{/*Closing - LearnApse Logo*/}
      
      		<View style={{justifyContent: "center", alignItems: "center", marginVertical: 15}}>
      			<Text style ={{fontSize: 17, fontWeight: "500"}}>Welcome to <Text style ={{fontWeight: "600"}}>LearnApse</Text></Text>
      			<Text style ={{fontSize: 17, fontWeight: "500"}}>Your favorite JAMB/SSCE CBT App</Text>
      		</View>
      
      		{/*Email and Password*/}
      		<View style = {{}}>
      			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      				{/*Email*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Email</Text>
      					<TextInput 
								placeholder="Enter Email"
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 46, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      
      				{/*Password*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Password</Text>
      					<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 46, borderWidth: 2, borderColor: "#777", borderRadius: 35, backgroundColor: "lightgray", marginTop: -2,  }}>
      						<TextInput 
									placeholder="Enter Password"
									onChangeText={text => setUsername(text)}
									secureTextEntry={!isPasswordVisible}
          					  	style={{paddingLeft: 20, color: "black", fontSize: 16, height: 46, borderRadius: 35, flex: 1}}
						  	/>
							  <TouchableHighlight underlayColor="transparent" onPress={togglePasswordVisibility} style ={{height: 42, width: 30, justifyContent:"center", alignItems:"center", backgroundColor: "transparent", marginRight: 5}}>
            						{isPasswordVisible ? (
             							 <Feather name="eye-off" size={22} color="black" />
          							    ) : (
              									<AntDesign name="eyeo" size={22} color="black" />
           						 )}
         					 </TouchableHighlight>
          				</View>
      				</View>
      			</KeyboardAvoidingView>
      		</View>
      		{/*Closing - Email and Password*/}
      
      		<TouchableOpacity style ={{height: 46, borderRadius: 35, backgroundColor: "blue", justifyContent:"center", alignItems:"center", marginTop: 30}}>
      			<Text style ={{fontSize: 17, fontWeight: "bold", color: "white", }}>Login</Text>
      		</TouchableOpacity>
      
      		<View style={{justifyContent: "center", alignItems: "center", marginVertical: 15}}>
      			<Text style ={{fontSize: 17, fontWeight: "900"}}>Or</Text>
      		</View>
      		<UnderLineTextBtn text = "Forgot Password?" goTo="NationalWatchers"/>
      	</View>
      	{/*Closing - Login Section*/}
      
      	{/*Signup Section*/}
      	<View style ={{backgroundColor: "white", minHeight: 60, borderRadius: 10, marginTop: 25, borderWidth: 2, borderColor: "#999", paddingVertical: 15, paddingHorizontal: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
      		<Text style ={{fontSize: 17, fontWeight: "600"}}>Don't have an account?</Text>
      		<UnderLineTextBtn text = "Signup" goTo="NationalWatchers"/>
      	</View>
      	{/*closing - Signup Section*/}
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
