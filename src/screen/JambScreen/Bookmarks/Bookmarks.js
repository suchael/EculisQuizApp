import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NeumorphicCircle = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#e0e0e0', '#e0e0e0']}
        style={styles.circle}
      />
      <View style={styles.innerCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'transparent',
    shadowColor: '#bebebe',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 60,
  },
  innerCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    top: 5,
    left: 5,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: -20,
      height: -20,
    },
    shadowOpacity: 1,
    shadowRadius: 60,
  },
});

export default NeumorphicCircle;
