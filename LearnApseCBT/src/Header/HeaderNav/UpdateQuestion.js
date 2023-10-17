import React, { useState, useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const totalQuestions = 500; // Replace with the actual total number of questions
const questionsPerPage = 10;  // Adjust the number of questions per page as needed

const dummyQuestions = Array.from({ length: totalQuestions }, (_, i) => `What is a ${i} noun`);

function ExplanationScreen({ route, navigation }) {
  const { questions, currentQuestionIndex } = route.params;
	//console.log(questions)
  const goToNextExplanation = () => {
    if (currentQuestionIndex < questions.length - 1) {
      navigation.replace('ExplanationScreen', {
        questions,
        currentQuestionIndex: currentQuestionIndex + 1,
      });
    }
  };

  const goToPrevExplanation = () => {
    if (currentQuestionIndex > 0) {
      navigation.replace('ExplanationScreen', {
        questions,
        currentQuestionIndex: currentQuestionIndex - 1,
      });
    }
  };

  return (
    <View>
      <Text>Question: {questions[currentQuestionIndex]}</Text>
      <Text>Answer: This is the answer for the question.</Text>
      <Text>Explanations: These are the explanations for the question.</Text>
      <Button title="Prev" onPress={goToPrevExplanation} />
      <Button title="Next" onPress={goToNextExplanation} />
    </View>
  );
}

function PastQuestionsScreen({ route, navigation }) {
  const { currentPage } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef();

  const startQuestionIndex = (currentPage - 1) * questionsPerPage;
  const endQuestionIndex = startQuestionIndex + questionsPerPage;

  // Memoize the questions to display for the current page
  const questionsToDisplay = useMemo(() => dummyQuestions.slice(startQuestionIndex, endQuestionIndex), [currentPage]);

  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  // Memoize the navigation handlers using useCallback
  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      navigation.setParams({ currentPage: currentPage + 1 });
      setIsLoading(false);

      // Scroll to the top
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  }, [currentPage, totalPages, navigation]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setIsLoading(true);
      navigation.setParams({ currentPage: currentPage - 1 });
      setIsLoading(false);

      // Scroll to the top
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  }, [currentPage, navigation]);

  const goToPage = useCallback((pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setIsLoading(true);
      navigation.setParams({ currentPage: pageNumber });
      setIsLoading(false);
    }
  }, [totalPages, navigation]);

  return (
    <View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow:1, gap: 15, paddingHorizontal: 10}}>
        {questionsToDisplay.map((question, index) => (
          <View key={index} style ={{flex: 1}}>
            <Text>{`${startQuestionIndex + index + 1}. ${question}`}</Text>
            <Button
              title="View Explanation"
              onPress={() => {
                navigation.navigate('ExplanationScreen', {
                  	questions: questionsToDisplay, //pass questionToDisplay to the Explanation screen 
                  	currentQuestionIndex: index,
                });
              }}
            />
          </View>
        ))}
        {isLoading && <ActivityIndicator />}
        
        <Button title="Prev" onPress={handlePrevPage} />
      <Button title="Next" onPress={handleNextPage} />
      <View style={{ flexDirection: 'row', flexWrap: "wrap" , flex: 1, marginBottom: 100, marginTop: 30, gap: 4, justifyContent: "space-between", alignItems: "center",}}>
        {Array.from({ length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
          <TouchableOpacity 
            key={pageNumber}
            onPress={() => goToPage(pageNumber)}
            style ={{width: 60, backgroundColor: "blue", height:  30}}
          >
          	<Text>{`Page ${pageNumber}`}</Text>
          </TouchableOpacity>
		
        ))}
      </View>
      </ScrollView>

      
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="PastQuestions">
      <Stack.Screen name="PastQuestions" component={PastQuestionsScreen} initialParams={{ currentPage: 1 }} />
      <Stack.Screen name="ExplanationScreen" component={ExplanationScreen} />
    </Stack.Navigator>
  );
}
