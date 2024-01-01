import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";

import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useRef,
} from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

// Icons
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

// My import
import { Questions } from "./SubjectListDb.js";
import PageSelectorModal from "./PageSelectorModal.js";
import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";
import { COLORS } from "../../../../Colors.js";

function ShowQuestionList() {
  const navigation = useNavigation();
  const route = useRoute();

  const { currentPage } = route.params;
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
  const [showAllAnswer, setShowAllAnswer] = useState(false);

  const totalQuestions = Questions.length; // Replace with the actual total number of questions
  const questionsPerPage = 5; // Adjust the number of questions per page as needed
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const scrollViewRef = useRef();

  //Memoize the navigation handlers using useCallback
  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setIsLoadingQuestion(true);
      const newPage = currentPage + 1;
      navigation.setParams({ currentPage: newPage }); //Go to next page if currentPage changes
      setIsLoadingQuestion(false);
      console.log("Page nxt: ", currentPage);

      // Scroll to the top when user click next btn
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  }, [currentPage, totalPages, navigation]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setIsLoadingQuestion(true);
      const newPage = currentPage - 1;
      navigation.setParams({ currentPage: newPage });
      setIsLoadingQuestion(false);

      // Scroll to the top when user click on Prev Btn
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  }, [currentPage, navigation]);

  const goToPage = useCallback(
    (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setIsLoadingQuestion(true);
        navigation.setParams({ currentPage: pageNumber });
        setIsLoadingQuestion(false);

        // Scroll to the top when user click on Prev Btn
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ y: 0, animated: true });
        }
      }
    },
    [totalPages, navigation]
  );

  const contextValue = {
    currentPage,
    showAllAnswer,
    setShowAllAnswer,
    isLoadingQuestion,
    setIsLoadingQuestion,
    handleNextPage,
    handlePrevPage,
    goToPage,
    totalPages,
    totalQuestions,
    questionsPerPage,
    scrollViewRef,
  };

  return (
    <ShowQuestionContext.Provider value={contextValue}>
      <View style={styles.container}>
        <HomeHeader />
        <MainContainer />
      </View>
    </ShowQuestionContext.Provider>
  );
}

function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const topic = "Topic: Particulate nature of matter";
  const examInfo = "JAMB: 2004";

  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 10,
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
          justifyContent: "flex-start",
          padding: 0,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={27}
          color={COLORS.mainBtnText}
          style={{ marginLeft: -4 }}
        />
      </TouchableHighlight>
      <View style={{ flexDirection: "column", flex: 1, marginRight: 60 }}>
        <Text style={styles.homeHeaderText} numberOfLines={1}>
          English Language
        </Text>
        <Text
          style={{ fontSize: 15, fontWeight: "900", color: COLORS.mainBtnText }}
          numberOfLines={2}
        >
          {examInfo}
        </Text>
      </View>
    </View>
  );
}

function MainContainer() {
  const insets = useSafeAreaInsets();
  const {
    currentPage,
    setShowAllAnswer,
    isLoadingQuestion,
    setIsLoadingQuestion,
    scrollViewRef,
  } = useContext(ShowQuestionContext);

  //Toggle for Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setShowAllAnswer((previousState) => !previousState);
  };

  // Timeout function for Activity indicator
  setTimeout(() => {
    setIsLoadingQuestion(false);
  }, 500); // 1000 milliseconds = 1 second

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        ref={scrollViewRef}
        scrollEventThrottle={900}
      >
        <View
          style={{
            paddingLeft: insets.left + 10,
            paddingRight: insets.right + 10,
            paddingTop: insets.top + 10,
            paddingBottom: insets.bottom + 100,
            flex: 1,
          }}
        >
          {isLoadingQuestion && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 20 }}>
                Loading...
              </Text>
            </View>
          )}

          {/*Toggle Switch*/}
          {currentPage == 1 && isLoadingQuestion == false && (
            <View>
              <TouchableOpacity
                onPress={toggleSwitch}
                style={{
                  backgroundColor: isEnabled
                    ? COLORS.mainBtnText
                    : COLORS.primary,
                  borderWidth: 4,
                  borderColor: isEnabled ? "#00A86B" : COLORS.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 4,
                  paddingVertical: 6,
                  borderRadius: 25,
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: isEnabled ? "black" : COLORS.mainBtnText,
                  }}
                >
                  Show all answers
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/*Closing: Toggle Switch*/}

          {isLoadingQuestion == false && <QuestionInterface />}
        </View>
      </ScrollView>
      {isLoadingQuestion == false && <BottomBtn />}
    </View>
  );
}

const QuestionInterface = React.memo(() => {
  return (
    <View style={styles.questionInterfaceMain}>
      <QuestionInterfaceContainer />
    </View>
  );
});

function QuestionInterfaceContainer() {
  const navigation = useNavigation();

  const { currentPage, questionsPerPage, showAllAnswer, totalQuestions } =
    useContext(ShowQuestionContext);

  const startQuestionIndex = (currentPage - 1) * questionsPerPage;
  const endQuestionIndex = startQuestionIndex + questionsPerPage;

  // Memoize the questions to display for the current page
  const questionsToDisplay = useMemo(
    () => Questions.slice(startQuestionIndex, endQuestionIndex),
    [currentPage]
  );

  const copyToClipboard = async (eachQuestion) => {
    const { question, options } = eachQuestion;

    // Combine all options into a single string
    const allQuestionOptions = options
      .map((option) => {
        return Object.keys(option)[0] + ". " + option[Object.keys(option)[0]];
      })
      .join("\n");

    // Combine the question and options
    const textToCopy = `${question} \n${allQuestionOptions}`;

    try {
      // Attempt to copy the text to the clipboard
      Clipboard.setString(textToCopy);
      alert("Question copied successfully");
    } catch (error) {
      alert("Copy failed. Please try again.");
    }
  };

  return (
    <View style={{ width: "100%" }}>
      {questionsToDisplay.map((eachQuestion, index) => (
        <View style={styles.questionInterfaceContainer} key={index}>
          <View style={styles.questionScreen}>
            <View style={styles.questionScreenNumberView}>
              <TouchableHighlight
                activeOpacity={0.9}
                underlayColor="#00A86B"
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Feather name="bookmark" size={24} color="black" />
              </TouchableHighlight>
              <Text style={styles.questionScreenNumber}>
                Question{" "}
                {`${startQuestionIndex + index + 1} of ${totalQuestions}`}
              </Text>
              <TouchableHighlight
                onPress={() => copyToClipboard(eachQuestion)}
                activeOpacity={0.9}
                underlayColor="#00A86B"
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <MaterialIcons name="content-copy" size={24} color="black" />
              </TouchableHighlight>
            </View>
            <Text style={styles.questionScreenQuestionContent}>
              {eachQuestion.question}
            </Text>
          </View>

          <View style={styles.optionMain}>
            {eachQuestion.options.map((eachOption, index) => (
              <View
                style={[
                  styles.optionContainer,
                  {
                    borderWidth:
                      Object.keys(eachOption)[0] ===
                        eachQuestion.answer.slice(-1) && showAllAnswer == true
                        ? 3.6
                        : 1,
                    borderColor:
                      Object.keys(eachOption)[0] ===
                        eachQuestion.answer.slice(-1) && showAllAnswer == true
                        ? "#00A86B"
                        : "#777",
                    backgroundColor:
                      Object.keys(eachOption)[0] ===
                        eachQuestion.answer.slice(-1) && showAllAnswer == true
                        ? "lightgreen"
                        : "white",
                  },
                ]}
                key={index}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: -4 }}
                >
                  {Object.keys(eachOption)[0]}
                  {".  "}
                  <Text style={styles.optionContainerOptions}>
                    {eachOption[Object.keys(eachOption)[0]]}
                  </Text>
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.screenContBottomBtn}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Analysis", {
                  questions: questionsToDisplay, //pass questionToDisplay to the Explanation screen
                  currentQuestionIndex: index,
                  startQuestionIndexPerPage: startQuestionIndex,
                  totalQuestions: totalQuestions,
                });
              }}
              underlayColor="lightgray"
              activeOpacity={0.9}
              style={{
                height: 36,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={styles.screenBottomBtnText}>Analysis</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Explanation", {
                  questions: questionsToDisplay, //pass questionToDisplay to the Explanation screen
                  currentQuestionIndex: index,
                  startQuestionIndexPerPage: startQuestionIndex,
                  totalQuestions: totalQuestions,
                });
              }}
              underlayColor="lightgray"
              activeOpacity={0.9}
              style={{
                height: 36,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={styles.screenBottomBtnText}>Explanation</Text>
            </TouchableHighlight>
          </View>
        </View>
      ))}
    </View>
  );
}

const BottomBtn = React.memo(() => {
  const { handlePrevPage, handleNextPage, totalPages, currentPage } =
    useContext(ShowQuestionContext);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 15,
        right: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 18,
        backgroundColor: "transparent",
      }}
    >
      <TouchableHighlight
        onPress={handlePrevPage}
        disabled={currentPage == 1}
        activeOpacity={0.9}
        underlayColor="white"
        style={styles.nextAndPrevBtn}
      >
        <AntDesign name="arrowleft" size={32} color={COLORS.mainBtnText} />
      </TouchableHighlight>

      <PageSelectorModal />

      <TouchableHighlight
        onPress={handleNextPage}
        disabled={currentPage == totalPages}
        activeOpacity={0.9}
        underlayColor="white"
        style={[
          styles.nextAndPrevBtn,
          {
            backgroundColor:
              currentPage == totalPages ? "lightgray" : COLORS.primary,
          },
        ]}
      >
        <AntDesign
          name="arrowright"
          size={32}
          color={currentPage == totalPages ? "#777" : COLORS.mainBtnText}
        />
      </TouchableHighlight>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.mainBtnText,
  },

  // main container
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
    borderWidth: 2,
    padding: 3,
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: 10,
    backgroundColor: "gray",
  },
  topBtnTouchables: {
    backgroundColor: "white",
    padding: 3,
    alignItems: "center",
  },
  topBtnTouchablesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  topBtnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
  },

  // Question Interface
  questionInterfaceMain: {
    flex: 1,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  questionInterfaceContainer: {
    elevation: 10,
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: COLORS.secondary,
    padding: 4,
    borderRadius: 15,
    marginBottom: 35,
    maxWidth: 420,
  },
  questionScreen: {
    elevation: 10,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: "column",
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 6,
  },
  questionScreenNumberView: {
    marginTop: -2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },
  questionScreenNumber: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 6,
    paddingRight: 2,
    paddingTop: 1,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    backgroundColor: COLORS.mainBtnText,
  },
  questionScreenQuestionContent: {
    fontSize: 16.7,
    fontWeight: "500",
  },

  optionMain: {
    //borderWidth:2,
    paddingTop: 8,
  },
  optionContainer: {
    elevation: 10,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 6,
    backgroundColor: COLORS.mainBtnText,
  },
  optionContainerOptions: {
    fontSize: 17,
    fontWeight: "500",
    paddingVertical: 20,
  },
  screenContBottomBtn: {
    elevation: 2,
    borderWidth: 2,
    borderColor: "#777",
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    backgroundColor: "lightgray",
  },
  screenBottomBtnText: {
    elevation:5,
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 2,
  },

  // Bottom Buttons
  nextAndPrevBtn: {
    width: 100,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
});

export default ShowQuestionList;
