import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = useCallback((value) => {
    if (value === '=') {
      try {
        const newResult = eval(prevInput + input);
        setResult(newResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      setPrevInput('');
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'sqrt') {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === 'del') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  }, [input, prevInput]);

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['sqrt', '=', 'del'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonsRow}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#EFEFF4',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputText: {
    fontSize: 48,
    color: 'black',
  },
  resultText: {
    fontSize: 32,
    color: 'gray',
  },
  buttonsContainer: {
    flex: 3,
    backgroundColor: '#EFEFF4',
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F6',
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});

export default CalculatorApp;
