import React, { useEffect, useState } from "react";
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
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//icon
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HeaderTop from "../../components/customComponents/HeaderTop";

import { firebase } from "../../../Firebase/Firestore";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export default function CommentSection({ route }) {
  const [commentData, setCommentData] = useState([]);
  const { comments, id } = route.params;
  console.log("comments", comments, id);
  const [textInputValue, setTextInputValue] = useState("");

  const handleSendButtonPress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userName = await AsyncStorage.getItem("username");
      if (!token) {
        console.error("Bearer token not found");
        return;
      }
      const commentData = {
        comment: textInputValue,
        username: userName ?? "suchael",
        newsId: id,
      };

      const response = await fetch(
        "http://192.168.1.94:4000/news/createComment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(commentData,null,2),
        }
      );

      if (response.ok) {
        console.log("Comment added successfully");
      } else {
        console.error("Failed to add comment:", response.statusText);
      }

      setTextInputValue("");
      Keyboard.dismiss();
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error accordingly
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderTop title={"comment section"} />
      <View
        style={{ paddingTop: 20, paddingBottom: 100, paddingHorizontal: 10 }}
      >
        <View
          style={{
            borderWidth: 2,
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          {comments?.map((comment, index) => {
            return (
              <StudentView
                key={index}
                username={comment?.username}
                comment={comment?.comment}
                time={comment?.time}
              />
            );
          })}
          {/* <StudentView />
      // <StudentView />
      <StudentView />
      <StudentView />
      <StudentView />
      <StudentView /> */}

          {/*More btn*/}
          {comments?.length > 0 ? (
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
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "black" }}
              >
                More
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

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
    </ScrollView>
  );
}

function StudentView({ username, comment, time }) {
  const displayName = username?.split("@")[0];
  console.log("first", displayName);
  // console.log('0',comment)
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.commentHeader}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={{
              uri: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNF9mdWxsX2JvZHlfM2RfYXZhdGFyXzNkX3JlbmRlcl9vZl9hX2J1c2luZXNzd19jOWYzODYxYy1lZTYzLTQxOGYtOThmNC02MWJkNGM3OGE1YTZfMS5wbmc.png",
            }}
            style={styles.profilePictureImage}
          />
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.displayName}>{displayName}</Text>
          <Text style={styles.timestamp}>{moment(time).fromNow()}</Text>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      </View>
    </View>
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
  container: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Add shadow
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profilePictureContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  profilePictureImage: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flex: 1,
  },
  displayName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  timestamp: {
    fontSize: 12,
    fontWeight: "400",
    color: "#555",
  },
  commentBody: {},
  commentText: {
    fontSize: 20,
    marginTop: 4,
    fontWeight: "500",
    color: "#333",
  },
});
