import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import * as SQLite from "expo-sqlite";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Icons
import { AntDesign } from "@expo/vector-icons";

// my import
import { Subjects } from "./SubjectListDb.js";
import QuestButton from "./QuestButton.js";
import ShowQuestionList from "./ShowQuestionList.js";
import Explanation from "./Explanation.js";
import Analysis from "./Analysis.js";
import ErrorQuestion from "./ErrorQuestion.js";
import ReadMore from "./ReadMore.js";
import CommentSection from "./CommentSection.js";
import {COLORS} from "../../../../Colors.js";


const Stack = createNativeStackNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Show question list"
        component={ShowQuestionList}
        initialParams={{ currentPage: 1 }}
      />
      <Stack.Screen name="Explanation" component={Explanation} />
      <Stack.Screen name="Analysis" component={Analysis} />
      <Stack.Screen name="ErrorQuestion" component={ErrorQuestion} />
      <Stack.Screen name="CommentSection" component={CommentSection} />
    </Stack.Navigator>
  );
}

function Home() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <SelectBySubject />
      <TouchableHighlight
        onPress={() => navigation.navigate("Show question list")}
        underlayColor="lightgray"
        style={styles.studyButton}
      >
        <Text style={styles.studyButtonText}>Study Now</Text>
      </TouchableHighlight>
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
          paddingBottom: insets.bottom + 8,
          zIndex: 2,
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={27}
          color= {COLORS.mainBtnText}
          style={{ marginLeft: -4 }}
        />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>
        JAMB{"  "}Past{"  "}Questions
      </Text>
    </View>
  );
}

function SelectBySubject() {
  const navigation = useNavigation(); // Use the useNavigation hook
  const insets = useSafeAreaInsets();
  const db = SQLite.openDatabase("learnApse.db");
  const [apiData, setApiData] = useState([]);
  const [questionsDB, setQuestionsDB] = useState([]);

  const instruction =
    "JAMB CBT began in 2015, leading to JAMB discontinuing the issuance of past questions from that year onward. Teachers all over Nigeria have collaborated to compile some questions from 2015 and beyond while keeping in mind the structure of the exam syllabus. So, the length of questions from these years may vary\n";
  const greetings = "";

  const { height } = Dimensions.get("window");

  const scrollViewRef = useRef(null);
  const BUTTON_HEIGHT = height * 0.082;
  const scrollToButton = (buttonIndex) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: buttonIndex * BUTTON_HEIGHT, // Replace BUTTON_HEIGHT with the actual button height
        animated: true,
      });
    }
  };

  const fetchDataFromApi = async () => {
    const apiUrl = "http://192.168.1.94:4000/questions/find";

    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found in local storage");
      }

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = response.data;
      const questionData = data.questionData;
      setApiData(data);

      db.transaction((tx) => {
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS questions (
            _id TEXT PRIMARY KEY,
            subject TEXT,
            year TEXT,
            number INTEGER,
            question_type TEXT,
            exam_type TEXT,
            class TEXT,
            topic TEXT,
            difficulty TEXT,
            question TEXT,
            answer TEXT,
            explanation TEXT
          );
        `;
      
        tx.executeSql(createTableQuery, [], (txObj, resultSet) => {
          console.log("Table 'questions' created successfully");
        }, (txObj, error) => {
          console.log("Error creating table 'questions':", error);
        });
      });

      db.transaction((tx) => {
        // Make sure to use data.questionData if that's the correct structure
        questionData.forEach((item) => {
          tx.executeSql(
            "INSERT OR IGNORE INTO questions (_id, subject, year, number, question_type, exam_type, class, topic, difficulty, question, answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              item._id,
              item.subject,
              item.year,
              item.number,
              item.question_type,
              item.exam_type,
              item.class,
              item.topic,
              item.difficulty,
              item.question,
              item.answer,
              item.explanation,
            ],
            (txObj, resultSet) => {
              console.log("Data inserted successfully into questions table");
            },
            (txObj, error) =>
              console.log("Error inserting data into questions table:", error)
          );
          
        });
      });

      // Other code...
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // const fetchDataFromApi = async () => {
  //   const apiUrl = "http://192.168.1.94:4000/questions/find";
  //   console.log("APiUrl==>>", apiUrl);

  //   try {
  //     const token = await AsyncStorage.getItem("token");

  //     if (!token) {
  //       throw new Error("Token not found in local storage");
  //     }

  //     const response = await axios.get(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.status !== 200) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = response.data;
  //     setApiData(apiData);
  //     console.log('lado jasto mc',JSON.stringify(apiData.questionData, null, 2))
  //     // Step 3: Insert API data into the products table via SQL
  //     db.transaction((tx) => {
  //       apiData.questionsData.forEach((item) => {
  //         tx.executeSql(
  //           "INSERT OR IGNORE INTO products (id, title, price, description, category, image, rating_rate, rating_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
  //           [
  //             item.id,
  //             item.title,
  //             item.price,
  //             item.description,
  //             item.category,
  //             item.image,
  //             item.rating.rate,
  //             item.rating.count,
  //           ],
  //           (txObj, resultSet) => {
  //             console.log("Data inserted successfully into products table");
  //           },
  //           (txObj, error) =>
  //             console.log("Error inserting data into products table:", error)
  //         );
  //       });
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };


  useEffect(() => {
    fetchDataFromApi();
  }, []);

  // useEffect(()=>{
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "SELECT * FROM products",
  //       [],
  //       (txObj, resultSet) => {
  //         const products = resultSet.rows._array;
  //         setQuestionsDB(products);
  //       },
  //       (txObj, error) => console.log("Error retrieving data:", error)
  //     );
  //   });
  // },[])

  useEffect(()=>{
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM questions",
        [],
        (txObj, resultSet) => {
          const products = resultSet.rows._array;
          setQuestionsDB(products);
        },
        (txObj, error) => console.log("Error retrieving data:", error)
      );
    });
  },[])
  
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "#888",
            borderRadius: 5,
            backgroundColor: "lightgray",
            paddingHorizontal: 8,
            paddingVertical: 12,
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 5 }}>
            Internet connection is not required.
          </Text>
          <ReadMore text={instruction} msg={greetings} maxLength={16} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 4,
            paddingLeft: insets.left + 10,
            textAlign: "center",
          }}
        >
          Select a subject:{" "}
        </Text>
        <ScrollView></ScrollView>
        <View style={{ paddingBottom: 180 }}>
          {Subjects.map((eachSubject, index) => (
            <QuestButton
              key={index}
              scrollFunc={scrollToButton}
              subject={eachSubject}
              pickerType="Year"
              index={index}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          borderWidth: 10,
          padding: 5,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  homeHeader: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.mainBtnText,
  },

  // Study Button
  studyButton: {
    height: 46,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10, // Adjust this value to control the distance from the bottom
    left: 15,
    right: 15,
    alignSelf: "center",
  },
  studyButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.mainBtnText,
  },
});
