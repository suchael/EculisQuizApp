import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons'; // Import your icon libraries



export default function SixDigitCode () {
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
      <View style ={{flex: 1 ,flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      	<Text style={[styles.homeHeaderText, {marginLeft: -50, }]}>Digit{"  "}Passcode</Text>
      </View>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null); // Initialize it as true initially

  const togglePasswordVisibility = () => {
  setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
};

  const PASSWORD= "Eculis";
  const NAME= "Success";
  const handleLogin = () => {
    	if (password === PASSWORD) {
      		setLoginSuccess(true)
    	} else {
      		setLoginSuccess(false)
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      	{/*Login Section*/}
      	<View style ={{backgroundColor: "white", minHeight: 300, borderRadius: 14, marginTop: -5, borderWidth: 2, borderColor: "blue", paddingVertical: 25, paddingHorizontal: 20}}>
      		{/*LearnApse Logo*/}
      		<View style ={{justifyContent: "center", alignItems: "center"}}>
      			<View style ={{borderWidth: 2, height: 120, width: 120, borderRadius: 5, justifyContent: "center", alignItems: "center"}}>
      				<Text>Six Digit code Logo </Text>
      			</View>
      		</View>
      		{/*Closing - LearnApse Logo*/}
      
      		<View style={{marginTop: 20 , marginBottom: 20, backgroundColor: "lightgray", padding: 6, borderRadius: 4}}>
      			<Text style ={{fontSize: 17, fontWeight: "500"}}>A 6 digit code was sent to your Email address</Text>
      		</View>
      
      		{/*Email and Password*/}
      		<View style = {{}}>
      			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      				{/*Email*/}
      				<View style ={{marginBottom: 12}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Code</Text>
      					<TextInput 
								placeholder="Enter Code"
								onChangeText={text => setUsername(text)}
          					  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 46, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
						  />
      				</View>
      				{/*Closing- Email*/}
      
      			</KeyboardAvoidingView>
      		</View>
      		{/*Closing - Email and Password*/}
      
      		{/*Check if username or password is valid*/}
         			<View style ={{justifyContent: "center", alignItems: "center"}}>
         				
							<Text style ={{fontSize: 15, fontWeight: "600"}}>Invalid or expired code</Text>
						 
         			</View>
         	{/*Closing - Check if username or password is valid*/}
         
      
      		<View style ={{flexDirection: "row", gap: 10, marginBottom: 3, justifyContent: "center", alignItems: "center"}}>
      			<Text style ={{fontSize: 16, fontWeight: "500"}}>
						Didn't receive it?
			  	</Text>
				  <TouchableHighlight style ={{padding: 6}} onPress ={()=>console.log("resend")} >
					<Text style ={{fontSize: 17, fontWeight: "600", textDecorationLine: "underline"}}>Resend code</Text>
				 </TouchableHighlight>
			</View>
      
      
      		
      		<TouchableOpacity onPress={handleLogin} style ={{height: 46, borderRadius: 35, backgroundColor: "blue", justifyContent:"center", alignItems:"center", marginTop: 30}}>
      			<Text style ={{fontSize: 17, fontWeight: "bold", color: "white", }}>Continue</Text>
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
    alignItems: 'center',
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },

});
