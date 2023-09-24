import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const questionBank = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Madrid', 'Paris'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'Question 4',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 5',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 6',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 7',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 8',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 9',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 10',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 11',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 12',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 13',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 14',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 15',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 16',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 17',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 18',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 19',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 20',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 21',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 22',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 23',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 24',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 25',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 26',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 27',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 28',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 29',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 30',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 31',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 32',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 33',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 34',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 35',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 36',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 37',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 38',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 39',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 40',
    options: ['Option A', 'Option B', 'Option C', "Option D"],
	answer: 'Option D',
	},
	{
    question: 'Question 41',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 42',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 43',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 44',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 45',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 46',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  {
    question: 'Question 47',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option C',
  },
  {
    question: 'Question 48',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option D',
  },
  {
    question: 'Question 49',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  },
  {
    question: 'Question 50',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option B',
  },
  // Add more questions here if needed...
];

// Rest of the code remains the same as before

	

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index of the current question
  const [selectedOptions, setSelectedOptions] = useState(Array(questionBank.length).fill(null)); // Selected options for each question

  const handleButtonPress = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  const handleOptionPress = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const currentQuestionData = questionBank[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestionData.question}</Text>
      <FlatList
        data={currentQuestionData.options}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.optionButton,
              item === selectedOptions[currentQuestion] && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionPress(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
      <View style={styles.buttonContainer}>
        {questionBank.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.questionButton,
              index === currentQuestion && styles.selectedQuestionButton,
            ]}
            onPress={() => handleButtonPress(index)}
          >
            <Text style={styles.buttonText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  selectedOptionButton: {
    backgroundColor: 'blue',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16, 
	borderWidth: 2,
	flexWrap: "wrap"
  },
  questionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    margin: 4, 
  },
  selectedQuestionButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
