import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    },
    // Add more questions here
  ];

  return (
    <ScrollView style={styles.container}>
      {questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text selectable={true} onLongPress={() => alert(q.question)} style={styles.questionText}>{`${index + 1}. ${q.question}`}</Text>
          {q.options.map((option, optionIndex) => (
            <Text
              key={optionIndex}
              selectable={true}
              onLongPress={() => alert(option)}
              style={styles.optionText}
            >{`${String.fromCharCode(65 + optionIndex)}. ${option}`}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export default QuizApp;
