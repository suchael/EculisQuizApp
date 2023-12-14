import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//icon
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function CommentSection() {
  const [commentData, setCommentData] = useState([]);

  const addComment = (comment) => {
    setCommentData([...commentData, comment]);
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <CommentMain commentData={commentData} />
      <SearchInputScreen addComment={addComment} />
    </View>
  );
}

function CommentMain({ commentData }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{ paddingTop: 20, paddingBottom: 100, paddingHorizontal: 10 }}
      >
        <CommentView commentData={commentData} />
      </View>
    </ScrollView>
  );
}

function CommentView({ commentData }) {
  return (
    <View
      style={{
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 15,
        borderRadius: 15,
      }}
    >
      {commentData.map((comment, index) => (
        <StudentView key={index} comment={comment} />
      ))}
      {/* <StudentView />
      <StudentView />
      <StudentView />
      <StudentView />
      <StudentView />
      <StudentView /> */}

      {/*More btn*/}
      {commentData.length > 0 ? (
        <TouchableOpacity
          style={{
            borderWidth: 2,
            paddingVertical: 6,
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
            More
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

function StudentView({ comment }) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        backgroundColor: "#999",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {/*Picture*/}
        <View
          style={{ borderWidth: 2, width: 40, height: 40, borderRadius: 10 }}
        />
        {/*Closing ofPicture*/}

        <View style={{ flex: 1, marginLeft: 10, marginBottom: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginTop: -4 }}>
            john smith
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#333",
              marginTop: 0,
            }}
          >
            13 mins ago
          </Text>
        </View>
      </View>

      {/*Student Answer goes here*/}
      <View>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{comment}</Text>
      </View>
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
          borderBottomColor: "gray",
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ width: 60, height: 40, justifyContent: "center" }}
      >
        <AntDesign
          name="arrowleft"
          size={27}
          color="#333"
          style={{ marginLeft: -4 }}
        />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Comment{"  "}Section</Text>
    </View>
  );
}

function SearchInputScreen({ addComment }) {
  const [textInputValue, setTextInputValue] = useState("");
  const handleSendButtonPress = () => {
    // Log the user-typed message to the console
    console.log("User Typed Message:", textInputValue);

    // Add the comment to the CommentView
    addComment(textInputValue);

    // Clear the input field
    setTextInputValue("");
  };
  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: "white" }]}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post your answer"
          autoFocus={false}
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
          <Text style={styles.sendButtonText}>
            <FontAwesome name="send-o" size={24} color="white" />
          </Text>
        </TouchableHighlight>
      </View>
      {/* You can add other UI elements below the input field */}
    </KeyboardAvoidingView>
  );
}

const screenWidth = Dimensions.get("window").width;
const GAP = 0.7905; // This is the best gap between the input box anf the send button
const inputGap = screenWidth * GAP;

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
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "space-between", // Align input at the bottom
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  inputContainer: {
    paddingBottom: 3,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12, // Add margin at the bottom to separate from other content
  },
  input: {
    maxHeight: 175,
    flex: 1,
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
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
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
