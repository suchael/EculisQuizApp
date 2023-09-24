import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = useCallback((value) => {
        setInput((prevInput) => prevInput + value);
    }, []);

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculate = () => {
        try {
            // Avoid using eval for security reasons; implement a safer expression parser if needed.
            const calculatedResult = eval(input);
            setResult(calculatedResult.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const handleButtonClick = useCallback((button) => {
        if (button === '=') {
            calculate();
        } else {
            handleInput(button);
        }
    }, [handleInput]);

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
    ];

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                editable={false}
            />
            <Text style={styles.result}>{result}</Text>
            <View style={styles.keypad}>
                {buttons.map((button) => (
                    <CalculatorButton
                        key={button}
                        buttonValue={button}
                        onPress={handleButtonClick}
                    />
                ))}
            </View>
            <TouchableOpacity
                style={styles.clearButton}
                onPress={clearInput}
            >
                <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};

const CalculatorButton = ({ buttonValue, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.button}
            onPress={() => onPress(buttonValue)}
        >
            <Text style={styles.buttonText}>{buttonValue}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    result: {
        fontSize: 24,
        marginBottom: 20,
    },
    keypad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
    },
    clearButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    clearButtonText: {
        fontSize: 18,
        color: 'white',
    },
});

export default Calculator;
