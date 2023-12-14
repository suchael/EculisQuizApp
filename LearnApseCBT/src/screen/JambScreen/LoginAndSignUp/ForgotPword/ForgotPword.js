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
  Image,
} from "react-native";

import React, { useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Icons
import { AntDesign } from "@expo/vector-icons"; // Import your icon libraries
import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "../../../../../Firebase/Firestore";
import HeaderTop from "../../../../components/customComponents/HeaderTop";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderTop title="Forgot Password" />
      <Main />
    </View>
  );
}

function Main() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    if (!username) return alert("Please enter your email address");
    try {
      await sendPasswordResetEmail(Auth, username);
      alert("Password reset email sent. Please check your inbox.");
      navigation.goBack();
    } catch (error) {
      console.error("Failed to send password reset email:", error);
      alert("Error sending password reset email. Please try again later.");
      setError("Invalid Email Address");
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
        <View
          style={{
            backgroundColor: "white",
            minHeight: 300,
            borderRadius: 14,
            marginTop: -5,
            borderWidth: 2,
            borderColor: "#999",
            paddingVertical: 25,
            paddingHorizontal: 20,
          }}
        >
          {/*LearnApse Logo*/}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../../../assets/images/forgot.webp")}
              style={{ width: 120, height: 120, objectFit: "fill" }}
            />
          </View>
          {/*Closing - LearnApse Logo*/}

          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "lightgray",
              padding: 4,
              borderRadius: 4,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              • Enter your Email below
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              • Reset Link will be sent in your email
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
                  style={{
                    paddingLeft: 20,
                    backgroundColor: "lightgray",
                    color: "black",
                    fontSize: 16,
                    marginTop: -2,
                    height: 46,
                    borderRadius: 35,
                    borderWidth: 2,
                    borderColor: "#777",
                  }}
                />
              </View>
              {/*Closing- Email*/}
            </KeyboardAvoidingView>
          </View>
          {/*Closing - Email and Password*/}

          {/*Check if username or password is valid*/}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {error && (
              <Text style={{ fontSize: 15, fontWeight: "600" }}>{error}</Text>
            )}
          </View>
          {/*Closing - Check if username or password is valid*/}

          <TouchableOpacity
            onPress={() => {
              handleResetPassword();
            }}
            style={{
              height: 46,
              borderRadius: 35,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        {/*Closing - Login Section*/}
      </View>
    </ScrollView>
  );
}
