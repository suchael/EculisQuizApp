import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function AlertBox() {
  const userStatus = {
    loggedIn: false,
    appActivated: false,
  };

  const setUserStatus = (loggedIn, appActivated) => {
    userStatus.loggedIn = loggedIn;
    userStatus.appActivated = appActivated;
  };

  setUserStatus(true, false); // Example user status

  let content;

  if (!userStatus.loggedIn) {
    content = (
      <Text style={styles.alertText}>
        You are not logged in. Please{" "}
        <TouchableHighlight
          onPress={() => console.log("Login")}
          activeOpacity={0.9}
          underlayColor="lightgray"
        >
          <Text style={styles.clickableText}>Login</Text>
        </TouchableHighlight>
      </Text>
    );
  } else if (!userStatus.appActivated) {
    content = (
      <Text style={styles.alertText}>
        Your App has not been activated.{" "}
        <TouchableHighlight
          onPress={() => console.log("Activate Now")}
          activeOpacity={0.9}
          underlayColor="lightgray"
        >
          <Text style={styles.clickableText}>Activate now</Text>
        </TouchableHighlight>
      </Text>
    );
  } else {
    content = <Text style={styles.alertText}>Welcome Success!</Text>;
  }

  if (userStatus.loggedIn && userStatus.appActivated) {
    content = <Text style={styles.alertText}>Two weeks to JAMB</Text>;
  }

  return <View style={styles.alert}>{content}</View>;
}



function Jamb() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              paddingLeft: insets.left + 16,
              paddingRight: insets.right + 16,
              paddingTop: insets.top + 15,
              paddingBottom: insets.bottom + 15,
            },
          ]}
        >
          <View style={styles.midTop}>
            <AlertBox />
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
                <TouchableHighlight
                  onPress={() => console.log("Past Question")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow1PQuestion}
                >
                  <>
                    <View><MaterialCommunityIcons name="notebook-multiple" size={40} color="white" /></View>
                    <Text style={styles.boxesInnerText}>Past{"\n"}Questions</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => console.log("Custom Exam")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow1CustomExam}
                >
                  <>
                    <View><MaterialIcons name="my-library-books" size={45} color="white" /></View>
                    <Text style={styles.boxesInnerText}>Custom{"\n"}Exam </Text>
                  </>
                </TouchableHighlight>
              </View>
              <View style={styles.midTopContentRow2}>
                <TouchableHighlight
                  onPress={() => console.log("Exam")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow2Exam}
                >
                  <>
                    <View><Ionicons name="ios-finger-print-sharp" size={50} color="gray" /></View>
                    <Text style={styles.boxesInnerText}>Exam</Text>
                  </>
                </TouchableHighlight>
              </View>
              <View style={styles.midTopContentRow3}>
                <TouchableHighlight
                  onPress={() => console.log("Online Battle")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow3OnlineBattle}
                >
                  <>
                    <View><MaterialIcons name="online-prediction" size={47} color="white" /></View>
                    <Text style={styles.boxesInnerText}>Online{"\n"}Battle</Text>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => console.log("Quiz Mode")}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={styles.midTopContentRow3Quiz}
                >
                  <>
                    <View><MaterialCommunityIcons name="head-question-outline" size={45} color="white" /></View>
                    <Text style={styles.boxesInnerText}>Quiz{"\n"}Mode</Text>
                  </>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableHighlight
              onPress={() => console.log("National score ranking")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>National score ranking</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("Novels and Art")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>Novels and Art </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("Bookmarks")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>Bookmarks</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("Jamb syllabus ")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>Jamb syllabus </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("Jamb subject combination ")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>Jamb subject combination </Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("Exam history ")}
              activeOpacity={0.9}
              underlayColor="lightgray"
              style={styles.bottomContent}
            >
              <>
                <View></View>
                <Text>Exam history</Text>
              </>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  midTop: {
    borderWidth: 2,
  },
  alert: {
    borderWidth: 2,
    padding: 4,
    marginBottom: 10,
    backgroundColor: "yellow",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },
  alertText: {
    fontSize: 13,
    paddingBottom: 2,
    //fontWeight:  "100",
  },

  //MidTopContent
  midTopContent: {
    borderWidth: 2,
    flex: 1,
    marginBottom: 10,
  },
  midTopContentRow1: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  midTopContentRow2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  midTopContentRow3: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 2,
  },
  midTopContentRow1PQuestion: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow1CustomExam: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  midTopContentRow2Exam: {
    borderWidth: 2,
    backgroundColor: "yellow",
    width: 115,
    height: 115,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3OnlineBattle: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow3Quiz: {
    borderWidth: 2,
    backgroundColor: "orange",
    width: 110,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  //Bottom
  bottom: {
    borderWidth: 2,
    marginTop: 10,
    borderColor: "red",
  },
  bottomContent: {
    height: 65,
    borderWidth: 2,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "orange",
  },
  clickableText: {
    textDecorationLine: "underline",
    fontSize: 13,
  },
  boxesInnerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Jamb;
