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
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
// My import


export default function LoginScreen() {
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
      	<Text style={[styles.homeHeaderText, {marginLeft: -50, }]}>Payment{"  "}Option</Text>
      </View>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const navigation=useNavigation ();
  
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
          
        }}
      >
      	{/* Activate App wrapper*/}
      	<View style ={{backgroundColor: "white", minHeight: 350, borderRadius: 14, borderWidth: 2, borderColor: "#999", alignItems: "center", paddingVertical: 20, paddingHorizontal: 10}}>
				<View style ={{justifyContent: "center", alignItems: "center", paddingHorizontal: 6,  marginBottom: 5 }}>
					<Text style ={{fontSize: 17, fontWeight: "600"}}>Choose your preferred payment method</Text>
				</View>
      		
      			<TouchableOpacity onPress={()=>{}} style ={{height: 46, width: 300, paddingHorizontal: "10%",borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", gap: 20, alignItems:"center", marginTop: 10}}>
					  	<FontAwesome5 name="google-pay" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black",  }}>Google pay</Text>
      			</TouchableOpacity>
      			
      		<TouchableOpacity onPress={()=>{}} style ={{height: 46, width: 300, paddingHorizontal: "10%",borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", gap: 20, alignItems:"center", marginTop: 10}}>
					  <Foundation name="paypal" size={24} color="black" />
      				<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>PayPal</Text>
      		</TouchableOpacity>
         	
      		
      
      	</View>
      	{/*Closing - Activate App wrapper*/}
     
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
