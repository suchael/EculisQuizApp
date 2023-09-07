import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function SixDigitCodeScreen() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>6 Digit Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          A 6 digit code was sent to your email address.
        </Text>
        <TextInput
          placeholder="Enter Code"
          style={styles.codeInput}
          onChangeText={(text) => setCode(text)}
        />
        <TouchableOpacity>
          <Text style={styles.resendCodeText}>Didn't receive the code? Resend Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 20,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: 'white',
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  resendCodeText: {
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
