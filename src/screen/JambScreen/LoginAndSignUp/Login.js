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
  Image, ActivityIndicator
} from "react-native";

import React, { useState, useEffect } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Icons
import { AntDesign, Feather } from "@expo/vector-icons";
// My import
import UnderLineTextBtn from "../ExamMode/UnderLineTextBtn.js";

// auth
import HeaderTop from "../../../components/customComponents/HeaderTop.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

//Constants

import { API_URL } from '../../../../Constants';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Main />
    </View>
  );
}

function Main() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    homeContainer: {
      paddingLeft: insets.left + 15,
      paddingRight: insets.right + 15,
      paddingTop: insets.top + 12,
      paddingBottom: insets.bottom + 10,
      flex: 1,
      backgroundColor: "lightgray",
    },
    loginContainer: {
      backgroundColor: "white",
      minHeight: 500,
      borderRadius: 14,
      marginTop: -5,
      borderWidth: 2,
      borderColor: "#999",
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    loginHeader: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      marginBottom: 20,
      backgroundColor: "lightgray",
      padding: 6,
      borderRadius: 4,
      paddingVertical: 20,
    },

    inputContainer: {
      paddingLeft: 20,
      backgroundColor: "lightgray",
      color: "black",
      fontSize: 16,
      marginTop: -2,
      height: 46,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: "#777",
    },
    passwordContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 46,
      borderWidth: 2,
      borderColor: "#777",
      borderRadius: 35,
      backgroundColor: "lightgray",
      marginTop: -2,
    },
    passwordTextInput: {
      paddingLeft: 20,
      color: "black",
      fontSize: 16,
      height: 46,
      borderRadius: 35,
      flex: 1,
    },
    loginButton: {
      height: 46,
      borderRadius: 35,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
    signupContainer: {
      backgroundColor: "white",
      minHeight: 60,
      borderRadius: 10,
      marginTop: 8,
      borderWidth: 2,
      borderColor: "blue",
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    homeHeaderText: {
      fontSize: 20,
      fontWeight: "600",
    },
    loadingContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  //for storing useremail as userName since displayname is not being passed on
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {

         const apiEndpoint = `${API_URL}/api/auth/login`;
         setLoading(true);
      console.log(apiEndpoint);
      const apiResponse = await axios.post(apiEndpoint, {
        username: username,
        password: password,
      });
  
      // Assuming the token is in the 'token' property of the response
      const token = apiResponse?.data?.user.token;
      const apiUsername = apiResponse?.data?.user.username;
      console.log(apiResponse);
      
      if (token) {
        // Store the token in AsyncStorage
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("username", apiUsername);
      }
  
    
  
      navigation.replace("HomeScreen");
    } catch (err) {
      
      console.log(err);

      alert("Sorry wrong email/password");
      setError("Invalid Username or Password");

      setLoading(false);
    }

    finally {
      setLoading(false); // Set loading to false whether the request is successful or not
    }

  };

  useEffect(() => {
    // Check if the user is already logged in
    const checkLoginStatus = async () => {
      try {
        const getToken = await AsyncStorage.getItem("token");
        const getUserEmail = await AsyncStorage.removeItem("userEmail");
        console.log("check token==>", getToken);
        console.log("check email==>", getUserEmail);


        if (getToken?.token) {
          // Redirect to HomeScreen if the user is logged in
          navigation.navigate("HomeScreen" );
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

{loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}

      <View style={styles.homeContainer}>
        {/*Login Section*/}
        <View style={styles.loginContainer}>
          {/*LearnApse Logo*/}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../../assets/images/quiz.png")}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          {/*Closing - LearnApse Logo*/}

          <View style={styles.loginHeader}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              Welcome to <Text style={{ fontWeight: "600" }}>LearnApse</Text>
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              Your favorite JAMB/SSCE CBT App
            </Text>
          </View>

          {/*Email and Password*/}
          <View style={{}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              {/*Email*/}
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    paddingLeft: 20,
                    paddingBottom: 5,
                  }}
                >
                  Email
                </Text>
                <TextInput
                  placeholder="Enter Email"
                  onChangeText={(text) => setUsername(text)}
                  style={styles.inputContainer}
                />
              </View>

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
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Enter Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!isPasswordVisible}
                    style={styles.passwordTextInput}
                  />
                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={togglePasswordVisibility}
                    style={{
                      height: 42,
                      width: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      marginRight: 5,
                    }}
                  >
                    {isPasswordVisible ? (
                      <AntDesign name="eyeo" size={22} color="black" />
                    ) : (
                      <Feather name="eye-off" size={22} color="black" />
                    )}
                  </TouchableHighlight>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
          {/*Closing - Email and Password*/}

          {/*Check if username or password is valid*/}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {error && (
              <Text style={{ fontSize: 15, fontWeight: "600", color: "red" }}>
                {error}
              </Text>
            )}
          </View>
          {/*Closing - Check if username or password is valid*/}

          <TouchableOpacity onPress={handleSignIn} style={styles.loginButton}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Login

              
            </Text>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "900" }}>Or</Text>
          </View>
          <UnderLineTextBtn text="Forgot Password?" goTo="ForgotPword" />
        </View>
        {/*Closing - Login Section*/}

        {/*Signup Section*/}
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={styles.signupContainer}
        >
          <Text style={{ fontSize: 17, fontWeight: "600" }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "blue",
              textDecorationLine: "underline",
            }}
          >
            SignUp
          </Text>
        </TouchableOpacity>
        {/*closing - Signup Section*/}
      </View>


      {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}


    </ScrollView>
  );
}
