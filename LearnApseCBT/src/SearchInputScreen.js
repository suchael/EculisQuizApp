import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Platform,
  Dimensions 
} from "react-native";

//icon
import { FontAwesome } from '@expo/vector-icons';

function SearchInputScreen() {
  const [textInputValue, setTextInputValue] = useState(""); 
  const handleSendButtonPress = () => {
    console.log("User Typed Message:", textInputValue); // Log the user-typed message to the console
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a keyword or sentence"
          autoFocus={true}
          multiline
          scrollEnabled
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
        <TouchableHighlight 
          style={styles.sendButton}
          onPress={handleSendButtonPress} // Call the function to log user-typed message
          activeOpacity={0.9}
          underlayColor="lightgray" 
        >
          <Text style={styles.sendButtonText}><FontAwesome name="send-o" size={24} color="white" /></Text>
        </TouchableHighlight>
      </View>
      {/* You can add other UI elements below the input field */}
    </KeyboardAvoidingView>
  );
}


const screenWidth = Dimensions.get('window').width;
const GAP = 0.7905// This is the best gap between the input box anf the send button
const inputGap = screenWidth * GAP;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Align input at the bottom
    padding: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -4, // Add margin at the bottom to separate from other content
  },
  input: {
    maxHeight: 175,
    width: "85%",
    borderWidth: 2,
    borderRadius: 25,
    padding: 8,
    paddingLeft: 16,
    fontSize: 16,
    marginRight: 6,
  },
  sendButton: {
    backgroundColor: "orange",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginLeft: 4,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SearchInputScreen;
