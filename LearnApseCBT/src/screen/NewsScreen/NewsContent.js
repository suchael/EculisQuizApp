import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import HeaderTop from "../../components/customComponents/HeaderTop";

// My import

export default function NewsContent({ route }) {
  const { description, title, comments, id } = route.params;
  console.log("comments----->>>>", comments);
  console.log("iddddd----->>>>", id);

  return (
    <View style={styles.container}>
      <HeaderTop title={"LearnApse"} />
      <Main title={title} description={description} />
      <CommentBtn comments={comments} id={id} />
    </View>
  );
}

function Main({title, description}) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.mainContainer}>
      <View
        style={[
          styles.contentContainer,
          {
            paddingLeft: insets.left + 10,
            paddingRight: insets.right + 10,
            paddingTop: insets.top + 14,
            paddingBottom: insets.bottom + 160,
          },
        ]}
      >
        {/* Picture */}
        <View style={styles.picture}></View>
        {/* Picture closing */}

        {/* News Heading */}
        <View style={styles.newsHeading}>
          <View style={styles.headingLine}></View>
          <Text style={styles.headingText}>{title} </Text>
        </View>
        {/* News Heading closing */}

        {/* News content */}
        <Text style={styles.newsContent}>{description}</Text>
        {/* News content closing */}

        {/* Comments Section */}
        {/* <View style={styles.commentsSection}>
          <Text style={styles.commentsHeading}>Comments</Text>
          {comments?.map((value, index) => (
            <View key={index} style={styles.commentContainer}>
              <Text style={styles.commentText}>{value}</Text>
            </View>
          ))}
        </View> */}
        {/* Comments Section closing */}
      </View>
    </ScrollView>
  );
}

function CommentBtn({comments, id}) {
  const navigation = useNavigation();
  console.log('first___', comments, id)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsCommentSection", {comments: comments, id: id})}
      style={styles.commentButton}
    >
      <Text style={styles.commentButtonText}>Post or View comments (5)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 60,
    height: 40,
    justifyContent: "center",
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  picture: {
    borderWidth: 2,
    height: 230,
    borderRadius: 10,
    marginBottom: 20,
  },
  newsHeading: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    marginBottom: 20,
    gap: 10,
  },
  headingLine: {
    width: "2%",
    height: "100%",
    borderWidth: 3,
    backgroundColor: "black",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    width: "94.5%",
  },
  newsContent: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "justify",
  },
  commentButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: 12,
    left: 15,
    right: 15,
  },
  commentButtonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  commentsSection: {
    marginTop: 20,
  },

  commentsHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  commentContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  commentText: {
    fontSize: 16,
    color: 'black',
  },
});
