import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, FontAwesome} from '@expo/vector-icons'; // Import your icon libraries

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
      	<Text style={[styles.homeHeaderText, {marginLeft: -50, }]}>Activate{"  "}App</Text>
      </View>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const navigation= useNavigation ();
  
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
      	<View style ={{backgroundColor: "white", minHeight: 350, borderRadius: 14, borderWidth: 2, borderColor: "#999", paddingVertical: 25, paddingHorizontal: 10, justifyContent: "center", alignItems: "center"}}>
      		  <View style ={{flex: 1, marginHorizontal: -10, backgroundColor: "white", paddingHorizontal: 10, }}>
      				<View style ={{justifyContent: "center", alignItems: "center", padding: 6, borderRadius: 4, backgroundColor: "lightgray", marginBottom: 15}}>
							<Text style ={{fontSize: 17, fontWeight: "600"}}>This App have not been activated</Text>
					 </View>
      		
      				<TouchableOpacity onPress={()=>navigation.navigate("BasicAdvancePaymentPlan")} style ={{height: 46, borderRadius: 35, backgroundColor: "blue", justifyContent:"center", alignItems:"center", marginTop: 4}}>
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "white", }}>Activate Now</Text>
      				</TouchableOpacity>
      		  </View>
				
      		
      
      		<View style ={{flex: 1, marginHorizontal: -10, backgroundColor: "white", marginTop: 40,  paddingHorizontal: 10, justifyContent: "flex-end"}}>
      			  <View style ={{justifyContent: "center", alignItems: "center", padding: 6, borderRadius: 4,  marginBottom: 1}}>
							<Text style ={{fontSize: 17, fontWeight: "600"}}>For enquiries and support</Text>
					</View>
					<TouchableOpacity onPress={handleLogin} style ={{height: 46, paddingHorizontal: "8%",borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", justifyContent:"space-between", alignItems:"center", marginTop: 4, gap: 15}}>
						  <FontAwesome name="whatsapp" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Message us via WhatsApp</Text>
      			</TouchableOpacity>
      		</View>
      
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
