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

export default function NewsContent() {
  return (
    <View style={styles.container}>
      <HeaderTop title={"LearnApse"} />
      <Main />
      <CommentBtn />
    </View>
  );
}

function Main() {
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
          <Text style={styles.headingText}>
            School of nursing form is out now read it below to verify more news
          </Text>
        </View>
        {/* News Heading closing */}

        {/* News content */}
        <Text style={styles.newsContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        {/* News content closing */}
      </View>
    </ScrollView>
  );
}

function CommentBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsCommentSection")}
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
});
