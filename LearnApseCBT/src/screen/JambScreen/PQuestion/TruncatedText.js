import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TruncatedText({ text, maxLength }) {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (<Text style={styles.container}>{truncatedText}</Text>);
}

const styles = StyleSheet.create({
  container: {
    fontSize: 17,
  },
});

export default TruncatedText;
