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
      	<Text style={[styles.homeHeaderText, {marginLeft: -50, }]}>Basic{"  "}or{"  "}Advance plan</Text>
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
      	<View style ={{backgroundColor: "white", maxHeight: 350, borderRadius: 14, borderWidth: 2, borderColor: "#999", alignItems: "center", paddingVertical: 20, paddingHorizontal: 10}}>
				<View style ={{justifyContent: "center", alignItems: "center", paddingHorizontal: 6,  marginBottom: 5 }}>
					<Text style ={{fontSize: 17, fontWeight: "600"}}>Note: Subscription is to be renewed every 6 months </Text>
				</View>
      		
      		<View style ={{justifyContent: "center", alignItems: "center"}}>
      			<TouchableOpacity onPress={()=>navigation.navigate("PaymentOption")} style ={{height: 46, paddingHorizontal: "10%",borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", gap: 20, alignItems:"center", marginTop: 10}}>
					  	<MaterialIcons name="payments" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black",  }}>Advance Plan:</Text>
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>₦3,200</Text>
      					<AntDesign name="right" size={18} color="black"  style ={{position: "absolute", right: 7}}/>
      			</TouchableOpacity>
      			<View style ={{ width: "90%", justifyContent: "center", alignItems: "center", padding: 10, borderRadius: 4, backgroundColor: "lightgray", borderWidth: 2, borderColor: "gray", marginBottom: 30 }}>
						<Text style ={{fontSize: 15, fontWeight: "600"}}>This package includes the LearnApse official Global UTME mock</Text>
			 	 </View>
      		</View>
      
      		<TouchableOpacity onPress={()=>navigation.navigate("PaymentOption")} style ={{height: 46, paddingHorizontal: "10%",borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", gap: 20, alignItems:"center", marginTop: 60}}>
					  <MaterialIcons name="payments" size={24} color="black" />
      				<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Starter Plan:</Text>
      				<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>₦2,200</Text>
      				<AntDesign name="right" size={18} color="black"  style ={{position: "absolute", right: 7}}/>
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
