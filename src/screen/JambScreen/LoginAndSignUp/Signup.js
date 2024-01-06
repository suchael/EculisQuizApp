import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

import React, { useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from 'react-redux';



// Icons
import { AntDesign } from "@expo/vector-icons"; // Import your icon libraries

// My import
import RadioBtn from "./RadioBtn.js";
import StateOfOriginModal from "./StateOfOriginModal.js";

// auth
import { Auth } from "../../../../Firebase/Firestore.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import HeaderTop from "../../../components/customComponents/HeaderTop.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Constants

import { API_URL } from '../../../../Constants';
import axios from "axios";




export default function Signup() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderTop title={"Signup"} />
      <Main />
    </View>
  );
}

function Main() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tfirstname, setTfirstName] = useState("");
  const [tlastname, setTlastname] = useState("");
  const [tusertype, setUsertype] = useState("");
  const [password, setPassword] = useState("");
  const [tstate, setTstate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (text) => {
    setPassword(text);
    // Check if passwords match and update the state accordingly
    setPasswordsMatch(text === confirmPassword || confirmPassword === "");
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    // Check if passwords match and update the state accordingly
    setPasswordsMatch(text === password || text === "");
  };

  //For Radio Btn
  const [selectedOption, setSelectedOption] = useState("Abia");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };




  const signup = async () => {
   
      try {
        setLoading(true);
  
        const apiUrl = `${API_URL}/api/auth/register`;
        const requestData = {
          username: username,
          password: password,
          email: email,
          firstname: tfirstname,
          lastname: tlastname,
          state: tstate,
          usertype: tusertype, 
        };
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          const userId = data?.user._id;
         const userName = data?.user.username;
         const firstName = data?.user?.firstname;
         const lastName = data?.user?.lastname;
         const role = data?.user?.role;
         const state = data?.user?.state;
         const usertype = data?.user?.usertype;
          await AsyncStorage.setItem('authToken', token);
          dispatch({ type: 'UPDATE_ID', payload: userId });
          dispatch({ type: 'UPDATE_NAME', payload: userName });
          dispatch({ type: 'UPDATE_FIRST', payload: firstName });
          dispatch({ type: 'UPDATE_LAST', payload: lastName });
          dispatch({ type: 'UPDATE_ROLE', payload: role });
          dispatch({ type: 'UPDATE_STATE', payload: state });
          dispatch({ type: 'UPDATE_TYPE', payload: usertype });
          navigation.replace("HomeScreen");        
          console.log('Registration successful:', data);


          
     
          
        } else {
          if (response.status === 419) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
          //  setAuthToken(responseData.token);

          alert("This Email has been registered, Please Login!");

          setError("This Email has been registered, Please Login!");

           
            console.error('Registration failed:', errorData);
          
            // Handle conflict error, maybe show an error message to the user
          }
          else if (response.status === 502) {
            // Handle 502 Bad Gateway error
            setErrorMessage('Email Already Exist!');
            setModalVisible(true);

          
          } 
          
          else {
            console.error('Registration failed:', response.status);
            // Handle other errors or display appropriate messages to the user
          }
        }
      } catch (error) {
        console.error('Error during registration:', error);
        // Handle network errors or other exceptions
      } finally {
        setLoading(false);
      }
    
  };
 



  const handleSignUp = async () => {
    try {
      // Make a request to your login endpoint with username and password
      const apiEndpoint = `${API_URL}/api/auth/register`;
      console.log(apiEndpoint);
      const apiResponse = await axios.post(apiEndpoint, {
        username: username,
        password: password,
        email: email,
        firstname: tfirstname,
        lastname: tlastname,
        state: tstate,
        usertype: tusertype, 
      });
  
      // Assuming the token is in the 'token' property of the response
      const token = apiResponse?.data?.user.token;
      const apiUsername = apiResponse?.messsge;
      console(apiUsername)
      
      if (token) {
        // Store the token in AsyncStorage
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("username", apiUsername);
      }
  
      console.log("token=========>>>>>> mugi", token);
  
      navigation.replace("HomeScreen");
    } catch (err) {
      
      console.log(err);

      alert("Sorry wrong email/password");
      setError("Invalid Username or Password");
    }
  };






  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 80,
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        {/*Login Section*/}
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 14,
            marginTop: -5,
            borderWidth: 2,
            borderColor: "#999",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 10 }}>
            Fill the details below to get started
          </Text>

          {/*Email and Password*/}
          <View style={{ flex: 1 }}>
            {/*First name*/}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                }}
              >
                First name
              </Text>
              <TextInput
                placeholder=" "
                onChangeText={(text) => setTfirstName(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: "#777",
                }}
                value=""
              />
            </View>
            {/*Closing - first name*/}

            {/*Last name*/}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                  paddingBottom: 5,
                }}
              >
                Last name
              </Text>
              <TextInput
                placeholder=" "
                value="Noble"
                onChangeText={(text) => setTlastname(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: "#777",
                }}
              />
            </View>
            {/*Closing - Last name*/}

            {/*Email*/}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                  paddingBottom: 5,
                }}
              >
                Email
              </Text>
              <TextInput
                placeholder=" "
                value="Noble@gmail.com"
                onChangeText={(text) => setEmail(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: "#777",
                }}
              />
            </View>
            {/*Closing - Email*/}

            {/*Password*/}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                }}
              >
                Password
              </Text>
              <TextInput
                placeholder=" "
                value="Noble123"
                onChangeText={(text) => handlePasswordChange(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: "#777",
                }}
              />
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                }}
              >
                Confirm Password
              </Text>
              <TextInput
                placeholder=" "
                value="Noble123"
                onChangeText={(text) => handleConfirmPasswordChange(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: passwordsMatch ? "#777" : "red",
                }}
              />
            </View>
            {!passwordsMatch && (
              <Text
                style={{
                  marginTop: -10,
                  marginBottom: 12,
                  fontSize: 15,
                  fontWeight: "500",
                  paddingLeft: 20,
                  color: "red",
                }}
              >
                Password does not match
              </Text>
            )}
            {/*Closing - Password*/}

            {/*Username*/}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  paddingLeft: 20,
                  paddingBottom: 5,
                }}
              >
                Username
              </Text>
              <TextInput
                placeholder=" "
                value="Noble"
                onChangeText={(text) => setUsername(text)}
                style={{
                  paddingLeft: 20,
                  backgroundColor: "lightgray",
                  color: "black",
                  fontSize: 16,
                  marginTop: -2,
                  height: 42,
                  borderRadius: 35,
                  borderWidth: 2,
                  borderColor: "red",
                }}
              />
            </View>

            {/*Closing - Username*/}
          </View>
          {/*Closing - Email and Password*/}

          {/*Location*/}
          <View
            style={{
              flex: 1,
              marginBottom: 5,
              marginLeft: 20,
              alignItems: "flex-start",
            }}
          >
            <StateOfOriginModal Type="State Of Origin" />
          </View>
          {/*Closing: Location*/}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Who are you?
            </Text>
          </View>

          {/*Radio btn*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <RadioBtn
              text="Student"
              selected={selectedOption === "Student"}
              onSelect={() => handleOptionSelect("Student")}
            />
            <RadioBtn
              text="Teacher"
              selected={selectedOption === "Teacher"}
              onSelect={() => handleOptionSelect("Teacher")}
            />
            <RadioBtn
              text="School"
              selected={selectedOption === "School"}
              onSelect={() => handleOptionSelect("School")}
            />
          </View>
          {/*Closing - Radio btn*/}

          <TouchableOpacity
            style={{
              height: 42,
              borderRadius: 35,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
            }}
            onPress={signup}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Signup
            </Text>
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
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
