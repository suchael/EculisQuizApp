import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';



//icons
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

import * as SQLite from "expo-sqlite";
// import fakeData from "../db.js";

// My import
import UnderLineTextBtn from "./ExamMode/UnderLineTextBtn.js";
import {COLORS}  from "../../../Colors.js";


const JambScreenStack = createNativeStackNavigator();

export default function JambScreen() {
  return (
    <JambScreenStack.Navigator
      initialRouteName="JambHome"
      screenOptions={{ animation: "none" }}
    >
      <JambScreenStack.Screen
        name="JambHome"
        component={JambHome}
        options={{ headerShown: false }}
      />
    </JambScreenStack.Navigator>
  );
}

function JambHome({ navigation }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [names, setNames] = useState([]);
  const [position, setPosition] = useState(new Animated.Value(20));

  const [tokenVal, setTokenVal] = useState();
  const [apiData, setApiData] = useState([]);
  const [productsList, setProductsList] = useState([]);

  const db = SQLite.openDatabase("example.db");

  const fetchDataFromApi = async () => {
    const apiUrl = "https://fakestoreapi.com/products";
    console.log("APiUrl==>>", apiUrl);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data);
      // Step 3: Insert API data into the products table via SQL
      db.transaction((tx) => {
        data.forEach((item) => {
          tx.executeSql(
            "INSERT OR IGNORE INTO products (id, title, price, description, category, image, rating_rate, rating_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              item.id,
              item.title,
              item.price,
              item.description,
              item.category,
              item.image,
              item.rating.rate,
              item.rating.count,
            ],
            (txObj, resultSet) => {
              console.log("Data inserted successfully into products table");
            },
            (txObj, error) =>
              console.log("Error inserting data into products table:", error)
          );
        });
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Call the function to initiate the API request
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const moveText = () => {
      let Token;
      AsyncStorage.getItem("token")
        .then((value) => {
          Token = value;
          setTokenVal(value);
        })
        .catch((error) => {
          console.error("Error retrieving token:", error);
        });
      position.setValue(-25);
      Animated.timing(position, {
        toValue: 22,
        duration: 5600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(moveText);
    };

    moveText();
  }, [tokenVal]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM products",
        [],
        (txObj, resultSet) => {
          const products = resultSet.rows._array;
          setProductsList(products);
        },
        (txObj, error) => console.log("Error retrieving data:", error)
      );
    });
  }, []);

  // console.log('firstSomething', productsList)

  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View style={{ backgroundColor: COLORS.primary }}>
        <ScrollView>
          <View 
            style={[
              styles.container,
              {
                paddingLeft: insets.left + 10,
                paddingRight: insets.right + 10,
                paddingTop: insets.top + 12,
                paddingBottom: insets.bottom + 75,
              },
            ]}
          >
            <View style={styles.midTop}>
              <View style={styles.alert}>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 5,
                  }}
                >
                  <Animated.Text
                    style={[
                      styles.alertText,
                      { transform: [{ translateX: position }] },
                    ]}
                  >
                    {tokenVal
                      ? "Welcome! Bored? Join students in the ongoing"
                      : "You are not logged in, please"}
                  </Animated.Text>
                  {tokenVal ? (
                    <UnderLineTextBtn
                      text="Online Battle"
                      goTo="Online battle"
                    />
                  ) : (
                    <UnderLineTextBtn text="Login" goTo="Login" />
                  )}
                </View>
              </View>

              <View style={styles.midTopContent}>
                <View style={styles.midTopContentRow1}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Past questions")}
                    activeOpacity={0.3}
                    underlayColor="lightgray"
                    style={[
                      styles.midTopContentRow1Btn,
                      { borderTopLeftRadius: 50, borderBottomRightRadius: 30 },
                      styles.boxShadow
                    ]}
                  >
                    <>
                      <FontAwesome5 name="scroll" size={28} color="black" />
                      <Text style={styles.midTopContentRowText}>
                        JAMB{"\n"}Past{"\n"}Questions
                      </Text>
                    </>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Custom test")}
                    activeOpacity={0.3}
                    underlayColor="lightgray"
                    style={[
                      styles.midTopContentRow1Btn,
                      { borderTopRightRadius: 50, borderBottomLeftRadius: 30 },
                      styles.boxShadow
                    ]}
                  >
                    <>
                      <FontAwesome5
                        name="chalkboard-teacher"
                        size={34}
                        color="black"
                      />
                      <Text style={styles.midTopContentRowText}>
                        Customised
                      </Text>
                      <Text style={styles.midTopContentRowText}>Test</Text>
                    </>
                  </TouchableOpacity>
                </View>

                {/*Exam Mode*/}
                <View style={styles.midTopContentRow2}>
                  <View
                    style={{
                      position: "absolute",
                      top: -30,
                      bottom: 0,
                      height: 80,
                      width: "80%",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        height: 60,
                        width: 20,
                        position: "absolute",
                        transform: [{ rotate: "150deg" }, { translateX: -80 }],
                        top: 40,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "white",
                        height: 60,
                        width: 20,
                        position: "absolute",
                        transform: [{ rotate: "-150deg" }, { translateX: 80 }],
                        top: 40,
                        right: 0,
                      }}
                    ></View>
                  </View>

                  {/*Eyes */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 30,
                      width: 120,
                    }}
                  >
                    <View
                      style={{
                        height: 4,
                        width: 14,
                        backgroundColor: "black",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    ></View>
                    <View
                      style={{
                        height: 4,
                        width: 14,
                        backgroundColor: "black",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    ></View>
                  </View>
                  {/*Closing - Eyes */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Exam mode")}
                    activeOpacity={0.3}
                    underlayColor="lightgray"
                    style={[styles.midTopContentRow2Exam, {elevation: 15,}]}
                  >
                    <Text
                      style={[
                        styles.midTopContentRowText,
                        { color: COLORS.mainBtnText, fontSize: 22 },
                      ]}
                    >
                      Exam{"\n"}Mode
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      position: "absolute",
                      bottom: -30,
                      height: 80,
                      width: "80%",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        height: 70,
                        width: 20,
                        position: "absolute",
                        transform: [{ rotate: "-140deg" }, { translateX: -5 }],
                        left: 60,
                      }}
                    ></View>
                    <View
                      style={{
                        backgroundColor: "white",
                        height: 70,
                        width: 20,
                        position: "absolute",
                        transform: [{ rotate: "140deg" }, { translateX: 5 }],
                        right: 60,
                      }}
                    ></View>
                  </View>
                </View>
                {/*Closing: Exam Mode*/}

                <View style={styles.midTopContentRow3}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Online battle")}
                    activeOpacity={0.3}
                    underlayColor="lightgray"
                    style={[
                      styles.midTopContentRow3Btn,
                      { borderTopRightRadius: 50, borderBottomLeftRadius: 30 },
                      styles.boxShadow
                    ]}
                  >
                    <>
                      <FontAwesome5
                        name="people-carry"
                        size={34}
                        color="black"
                      />
                      <Text style={styles.midTopContentRowText}>
                        Online{"\n"}Battle
                      </Text>
                    </>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Quiz mode")}
                    activeOpacity={0.3}
                    underlayColor="lightgray"
                    style={[
                      styles.midTopContentRow1Btn,
                      { borderTopLeftRadius: 50, borderBottomRightRadius: 30 },
                      styles.boxShadow
                    ]}
                  >
                    <>
                      <MaterialCommunityIcons
                        name="head-question-outline"
                        size={37}
                        color="black"
                      />
                      <Text style={styles.midTopContentRowText}>
                        Quiz{"\n"}Mode
                      </Text>
                    </>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/*Bottom*/}
            <View style={styles.bottom}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HallOfFame")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <MaterialCommunityIcons
                    name="nature"
                    size={35}
                    color="black"
                  />
                  <Text style={styles.midTopContentRowText}>Hall of Fame</Text>
                  <AntDesign
                    name="right"
                    size={20}
                    color="black"
                    style={{ position: "absolute", right: 15 }}
                  />
                </>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Novels and Art")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <FontAwesome5 name="diagnoses" size={30} color="black" />
                  <Text style={styles.bottomContentText}>Novels and Art </Text>
                  <AntDesign
                    name="right"
                    size={20}
                    color="black"
                    style={{ position: "absolute", right: 15 }}
                  />
                </>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Bookmarks")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <AntDesign name="book" size={35} color="black" />
                  <Text style={styles.bottomContentText}>Bookmarks</Text>
                </>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Jamb syllabus")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <Entypo name="dropbox" size={35} color="black" />
                  <Text style={styles.bottomContentText}>JAMB syllabus </Text>
                </>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Jamb subject combination")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <AntDesign name="CodeSandbox" size={35} color="black" />
                  <Text style={styles.bottomContentText}>
                    JAMB subject combination{" "}
                  </Text>
                </>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Exam history")}
                activeOpacity={0.3}
                underlayColor="lightgray"
                style={[styles.bottomContent, styles.boxShadow]}
              >
                <>
                  <FontAwesome5 name="parachute-box" size={34} color="black" />
                  <Text style={styles.bottomContentText}>
                    Result and Exam history
                  </Text>
                </>
              </TouchableOpacity>
              <View style={styles.containeras}>
                <ScrollView>
                  {productsList.map((item) => (
                    <View key={item.id}>
                      <Text>Name: {item.title}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight
          onPress={() => navigation.navigate("Group exam")}
          activeOpacity={0.9}
          underlayColor="lightgray"
          style={styles.groupExam}
        >
          <Text style={styles.groupExamText}>Group{"\n"}Exam</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Teacher network")}
          activeOpacity={0.9}
          underlayColor="lightgray"
          style={styles.teacherNetwork}
        >
          <Text style={styles.groupExamText}>Teachers{"\n"}Network</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containeras: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },

  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.tertiary,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 10,
      },
    }),
  },
  midTop: {
    //borderWidth: 2,
    flex: 1,
  },

  //MidTopContent
  midTopContent: {
    //borderWidth: 2,
    flex: 1,
    //marginBottom: 14,
  },
  midTopContentRow1: {
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 1,
    //borderWidth: 2,
  },
  midTopContentRow2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 24,
  },
  midTopContentRow3: {
    justifyContent: "space-between",
    flexDirection: "row",
    //borderWidth: 2,
  },
  midTopContentRow1Btn: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: COLORS.tertiary,
    width: 110,
    height: 110,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  midTopContentRow2Exam: {
    backgroundColor: COLORS.primary,
    width: 120,
    height: 120,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  midTopContentRow3Btn: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: COLORS.tertiary,
    width: 110,
    height: 110,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  midTopContentRowText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  //BottomBtn
  bottom: {
    //borderWidth: 2,
    marginTop: 20,
    marginBottom: 80,
  },
  bottomContent: {
    height: 58,
    //borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 35,
    borderRadius: 35,
    backgroundColor: COLORS.tertiary,
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    //justifyContent: "flex-start",
  },
  bottomContentText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  groupExam: {
    backgroundColor: COLORS.primary,
    width: 68,
    height: 60,
    borderRadius: 5,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    left: 10.6,
    zIndex: 1,
  },
  groupExamText: {
    fontWeight: "bold",
    fontSize: 14,
    color: COLORS.mainBtnText,
  },

  teacherNetwork: {
    backgroundColor: COLORS.primary,
    width: 68,
    height: 60,
    borderRadius: 5,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    right: 10.6,
    zIndex: 1,
  },
  alert: {
    //paddingHorizontal: 20,
    marginTop: 2,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#FAFAFA",
    //borderRadius: 15,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,

    elevation: 10,
  },
  alertText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  underlineText: {
    textDecorationLine: "underline",
    fontWeight: "600",
    fontSize: 17,
    color: "blue",
    backgroundColor: "white",
  },
});
