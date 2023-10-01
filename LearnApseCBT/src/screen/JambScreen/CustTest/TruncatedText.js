import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TruncatedText({ text, color }) {
  //const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  //return (<Text style={styles.container} numberOfLines ={1}>{truncatedText}</Text>);
  return (<Text style={[styles.container, {color: color}]} numberOfLines ={1}>{text}</Text>);
}

const styles = StyleSheet.create({
  container: {
    fontSize: 17,
  },
});

export default TruncatedText;
