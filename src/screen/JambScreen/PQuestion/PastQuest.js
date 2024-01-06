import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
} from "react-native";
//import { Picker } from "@react-native-picker/picker";
import {Picker} from '@react-native-picker/picker';
import React, { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import { openDatabase } from 'expo-sqlite';
import RNPickerSelect from 'react-native-picker-select';
import * as SQLite from "expo-sqlite";

//import {COLORS} from "../../../../Colors.js";
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

export default function PastQuest(navigation, route) {
//  const navigation = useNavigation();
  const db = openDatabase('myDatabase.db');
  const [subjectNames, setSubjectNames] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const years = ["2022", "2021", "2020"];




  const initializeDatabase = () => {
    // Run the specific SELECT query with LIMIT 5
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM subjects;",
        [],
        (_, result) => {
          if (result.rows.length > 0) {
            const names = [];
            for (let i = 0; i < result.rows.length; i++) {
              const row = result.rows.item(i);
              names.push(row.name);
            }
            setSubjectNames(names);
          } else {
            // If subjects table is empty, generate random subjects
            const randomSubjects = ["Mathematics", "English", "Physics", "Chemistry", "Biology"];
            setSubjectNames(randomSubjects);
          }
        },
        (_, error) => console.error("Error running SELECT query: ", error)
      );
    });
  };
  

  useEffect(() => {
    initializeDatabase();
  }, []);


  const openSubjectModal = (subject) => {
    setSelectedSubject(subject);
    setModalVisible(true);
  };

  const closeSubjectModal = () => {
    setModalVisible(false);
  };
  const insets = useSafeAreaInsets();
//  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <SelectBySubject />

   
        <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
   <ScrollView>
       {subjectNames.map((name, index) => (
        
 <View key={index} style={[styles.container, { backgroundColor: COLORS.secondary }]}>
      <TouchableOpacity 
       style={styles.buttonContainer}
      onPress={() => openSubjectModal(name)}>
      <View
        onPress={() => {}}
        underlayColor="lightgray"
        activeOpacity={0.9}
      //  style={styles.buttonContainer}
      >
        <View style={styles.buttonContainerRect}>
          <Text style={{ fontSize: 17, fontWeight: "500", color: "black" }} numberOfLines={1}>
            {name}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      
    </View>
  
 
))}



        
</ScrollView>
 </View> 


      {/* Display subject names */}
     

      {/* <TouchableHighlight
        onPress={() => navigation.navigate("Show question list")}
        underlayColor="lightgray"
        style={styles.studyButton}
      >
        <Text style={styles.studyButtonText}>Study Now</Text>
      </TouchableHighlight> */}


      <SubjectModal
        isVisible={isModalVisible}
        subject={selectedSubject}
        onClose={closeSubjectModal}
        onTopicChange={setSelectedTopic}
        onYearChange={setSelectedYear}
      />
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
        {/* <View style={{ paddingBottom: 180 }}>
          {Subjects.map((eachSubject, index) => (
            <QuestButton
              key={index}
              scrollFunc={scrollToButton}
              subject={eachSubject}
              pickerType="Year"
              index={index}
            />
          ))}
        </View> */}
      </ScrollView>
      
    </View>
  );
}

function HomeHeader({ route }) {
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
         {"  "}Past{"  "}Questions
      </Text>
    </View>
  );
}

function SubjectModal({ isVisible, subject, onClose, onTopicChange, onYearChange }) {
  const [options, setOptions] = useState([
    { label: "Select Option", value: null },
    { label: "Year", value: "year" },
    { label: "Topic", value: "topic" },
  ]);

  const topicsWithSubTopics = [
    { label: "Math", value: "math", subTopics: ["Algebra", "Geometry", "Calculus"] },
    { label: "Physics", value: "physics", subTopics: ["Mechanics", "Thermodynamics", "Optics"] },
    // Add other topics with their sub-topics here
  ];

  const years = ["2022", "2021", "2020"];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigation = useNavigation();
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
    onTopicChange(null);
    onYearChange(null);
  };

  const handleTopicChange = (itemValue) => {
    setSelectedTopic(itemValue);
    setSelectedSubTopic(null);
    onTopicChange(itemValue);
  };

  const handleSubTopicChange = (itemValue) => {
    setSelectedSubTopic(itemValue);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeaderText}>{subject}</Text>

          <Picker
            selectedValue={selectedOption}
            itemStyle={styles.pickerItem}
            style={styles.pickerItem}
            onValueChange={handleOptionChange}
          >
            {options.map((option, index) => (
              <Picker.Item key={index} label={option.label} value={option.value} />
            ))}
          </Picker>

          {selectedOption === "topic" && (
            <View>
              <Picker
                selectedValue={selectedTopic}
                onValueChange={handleTopicChange}
                style={styles.pickerItem}
              >
                {topicsWithSubTopics.map((topic, index) => (
                  <Picker.Item key={index} label={topic.label} value={topic.value} />
                ))}
              </Picker>

              {selectedTopic && (
                <Picker
                  selectedValue={selectedSubTopic}
                  onValueChange={handleSubTopicChange}
                  style={styles.pickerItem}
                >
                  {topicsWithSubTopics
                    .find((topic) => topic.value === selectedTopic)
                    .subTopics.map((subTopic, index) => (
                      <Picker.Item key={index} label={`\u2022 ${subTopic}`} value={subTopic} />
                    ))}
                </Picker>
              )}
            </View>
          )}

          {selectedOption === "year" && (
            <Picker
              selectedValue={null}
              onValueChange={(itemValue) => onYearChange(itemValue)}
            >
              {years.map((year, index) => (
                <Picker.Item key={index} label={year} value={year} />
              ))}
            </Picker>
          )}

          <TouchableHighlight
            onPress={() => {
              console.log("Selected Option:", selectedOption);
              console.log("Selected Topic:", selectedTopic);
              console.log("Selected Sub-Topic:", selectedSubTopic);
              console.log("Selected Year:", onYearChange);
              onClose();
              navigation.navigate("Show question list")
            }}
            // onPress={() => navigation.navigate("Show question list")}
            underlayColor="lightgray"
            style={styles.studyButton}
          >
            <Text style={styles.studyButtonText}>Study Now</Text>
          </TouchableHighlight>

        
        </View>

     

      </View>
    </Modal>
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
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    bottom: 0, // Adjust this value to control the distance from the bottom
    marginHorizontal: 5,
  },
  studyButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.mainBtnText,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
	marginBottom: 6,
    borderWidth: 1,
	borderColor: "#999",
	elevation: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexDirection: "space-between",
    paddingTop: 10.8,
    paddingBottom: 10.8,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },
  pickerItem: {
    color: 'black', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#3498db', // Example button color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerCircle: {
    borderRightWidth: 3,
    height: 50,
    width: 38,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCircleText: {
    fontSize: 19,
  },
  buttonContainerRect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
  },
  buttonRectText: {
    fontSize: 18,
  },


  // Attached View to Button on clicked
  attachedToButton: {
    minHeight: 100,
    flexDirection: "row",
    marginBottom: 10,
	gap: 10,
  },
  attachedToButtonLeft: {
    flex: 1,
    borderWidth: 2,
	borderColor: COLORS.primary,
	borderRadius: 10, 
    justifyContent: "space-between",
    alignItems: "center",
  },
  attachedToButtonRight: {
	flex: 1,
	borderWidth: 2,
	borderColor: COLORS.primary,
	borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
