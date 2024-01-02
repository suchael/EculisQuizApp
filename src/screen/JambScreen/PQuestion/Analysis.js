import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import React, { useMemo } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as Clipboard from "expo-clipboard";

// Icons
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { COLORS } from "../../../../Colors.js";

export default function Analysis() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            paddingLeft: insets.left + 10,
            paddingRight: insets.right + 10,
            paddingTop: insets.top + 14,
            paddingBottom: insets.bottom + 100,
          }}
        >
          <QuestionInterfaceContainer ind="1" />
        </View>
      </ScrollView>
      <BottomBtn />
    </View>
  );
}

function QuestionInterfaceContainer({ ind }) {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    questions,
    currentQuestionIndex,
    startQuestionIndexPerPage,
    totalQuestions,
  } = useMemo(() => route.params, [route.params]); //get the questions passed from the Prev screen

  const copyToClipboard = async (eachQuestion) => {
    const { question, options, answer, explanation } = eachQuestion;

    // Combine all options into a single string
    const allQuestionOptions = options
      .map((option) => {
        return (
          "\n" +
          Object.keys(option)[0] +
          ". " +
          option[Object.keys(option)[0]] +
          "\n\t---" +
          option[Object.keys(option)[1]]
        );
      })
      .join("\n");

    // Combine the question and options
    const textToCopy = `${question} \n${allQuestionOptions} \n\n*Correct Answer:* ${answer} \n\n*Explanation* \n${explanation}`;

    // Attempt to copy the text to the clipboard
    try {
      Clipboard.setString(textToCopy);
      alert("Question and Analysis copied successfully");
    } catch (error) {
      alert("Copy failed. Please try again.");
    }
  };

  return (
    <View style={styles.questionInterfaceContainer}>
      <View
        style={[styles.questionAndExplanationScreen, { paddingBottom: 20, backgroundColor: COLORS.secondary }]}
      >
        <View style={styles.questionScreenNumberView}>
          <Text style={styles.questionScreenNumber}>
            Question {startQuestionIndexPerPage + currentQuestionIndex + 1} of{" "}
            {totalQuestions}
          </Text>
          <TouchableOpacity
            onPress={() => copyToClipboard(questions[currentQuestionIndex])}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 3,
              position: "absolute",
              top: 0,
              right: 2,
            }}
          >
            <MaterialIcons name="content-copy" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.questionScreenQuestionContent}>
          {questions[currentQuestionIndex].question}
        </Text>
      </View>

      <View
        style={[
          styles.questionAndExplanationScreen,
          {
            backgroundColor: "lightgray",
            borderRadius: 25,
          },
        ]}
      >
        <Text style={styles.correctAnswerText}>
          Correct Answer: {questions[currentQuestionIndex].answer.slice(-1)}
        </Text>
        <View style={styles.optionMain}>
          {questions[currentQuestionIndex].options.map((eachOption, index) => (
            <View
              key={index}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={[
                  styles.optionContainer,
                  {
                    borderColor:
                      Object.keys(eachOption)[0] ===
                      questions[currentQuestionIndex].answer.slice(-1)
                        ? COLORS.primary
                        : "red",
                    borderWidth: 2.5,
                    backgroundColor:
                      Object.keys(eachOption)[0] ===
                      questions[currentQuestionIndex].answer.slice(-1)
                        ? COLORS.primary
                        : "pink",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    {
                      color:
                        Object.keys(eachOption)[0] ===
                        questions[currentQuestionIndex].answer.slice(-1)
                          ? COLORS.mainBtnText
                          : "black",
                    },
                  ]}
                >
                  {Object.keys(eachOption)[0]}
                  {".  "}
                  <Text
                    style={[
                      styles.optionText,
                      { fontWeight: "500", fontSize: 17 },
                    ]}
                  >
                    {eachOption[Object.keys(eachOption)[0]]}
                  </Text>
                </Text>
              </View>

              {/*Each Option Analysis*/}
              <View style={styles.attachToOption}>
                <Text
                  style={{ fontSize: 16.5, fontWeight: "600", marginTop: -4 }}
                >
                  Why is this
                  {Object.keys(eachOption)[0] ===
                  questions[currentQuestionIndex].answer.slice(-1) ? (
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#00A86B",
                      }}
                    >
                      {"  "}Correct?{"  "}
                    </Text>
                  ) : (
                    <Text
                      style={{ fontSize: 20, fontWeight: "bold", color: "red" }}
                    >
                      {"  "}Wrong?{"  "}
                    </Text>
                  )}
                </Text>
                <Text style={{ fontSize: 17, fontWeight: "500", marginTop: 5 }}>
                  {eachOption[Object.keys(eachOption)[1]]}
                </Text>
              </View>
              {/*Closing - Each Option Analysis*/}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function Header() {
  // This is an Empty Header... From the screen to question
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        paddingBottom: insets.bottom + 2,
        height: 12,
        width: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: COLORS.secondary,
      }}
    ></View>
  );
}

function BottomBtn() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    currentQuestionIndex,
    questions,
    totalQuestions,
    startQuestionIndexPerPage,
  } = route.params;
  //console.log(currentQuestionIndex)

  const goToNextExplanation = () => {
    console.log(questions.length, startQuestionIndexPerPage);
    if (currentQuestionIndex < questions.length - 1) {
      navigation.replace("Analysis", {
        questions,
        currentQuestionIndex: currentQuestionIndex + 1,
        startQuestionIndexPerPage: startQuestionIndexPerPage,
        totalQuestions: totalQuestions,
      });
    }
  };

  const goToPrevExplanation = () => {
    if (currentQuestionIndex > 0) {
      navigation.replace("Analysis", {
        questions,
        currentQuestionIndex: currentQuestionIndex - 1,
        startQuestionIndexPerPage: startQuestionIndexPerPage,
        totalQuestions: totalQuestions,
      });
    }
  };

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
        onPress={goToPrevExplanation}
        disabled={currentQuestionIndex == startQuestionIndexPerPage}
        activeOpacity={0.9}
        underlayColor="white"
        style={styles.nextAndPrevBtn}
      >
        <AntDesign name="arrowleft" size={32} color={COLORS.mainBtnText} />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="white"
        style={styles.nextAndPrevBtn}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: COLORS.mainBtnText,
          }}
        >
          Cancel
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={goToNextExplanation}
        disabled={currentQuestionIndex + 1 == questions.length}
        activeOpacity={0.9}
        underlayColor="white"
        style={[
          styles.nextAndPrevBtn,
          {
            backgroundColor:
              currentQuestionIndex + 1 == questions.length
                ? "lightgray"
                : COLORS.primary,
          },
        ]}
      >
        <AntDesign
          name="arrowright"
          size={32}
          color={
            currentQuestionIndex + 1 == questions.length
              ? "#777"
              : COLORS.mainBtnText
          }
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  // main container
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  // Question Interface
  questionInterfaceContainer: {
    backgroundColor: "white",
    //borderWidth: 2,
    //padding:4,
    //borderColor: "blue",
    borderRadius: 15,
    marginBottom: 35,
    maxWidth: 420,
    flex: 1,
  },
  questionAndExplanationScreen: {
    elevation: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: "column",
    borderRadius: 18,
    marginBottom: 12,
    flex: 1,
  },

  questionScreenNumberView: {
    marginTop: -2,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 6,
  },

  questionScreenNumber: {
    fontSize: 17,
    fontWeight: "bold",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },

  questionScreenQuestionContent: {
    fontSize: 16.7,
    fontWeight: "500",
  },

  optionMain: {
    //borderWidth:2,
    paddingTop: 5,
  },

  optionContainer: {
    elevation: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 2.1,
    borderColor: "red",
    borderRadius: 10,
    marginTop: 7,
    backgroundColor: "pink",
    minHeight: 46,
    width: "100%", 
  },

  optionText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: -4,
    flex: 1,
  },

  correctAnswerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
    flex: 1,
    textAlign: "center",
  },

  attachToOption: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#777",
    width: "86%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },

  // Bottom Buttons
  nextAndPrevBtn: {
    //borderWidth: 2,
    width: 90,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
});

