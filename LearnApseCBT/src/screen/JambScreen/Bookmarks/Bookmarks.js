import React from 'react';
import { View, StyleSheet } from 'react-native';

const RectangleWithDiagonalsX = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.diagonal} />
        <View style={[styles.diagonal, { transform: [{ rotate: '90deg' }], backgroundColor: "red" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    position: 'relative',
  },
  diagonal: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: 2,
    height: '100%',
    backgroundColor: 'black',
    transformOrigin: { x: 0, y: 0 },
    transform: [{ rotate: '45deg' }, { translateX: -1 }],
  },
});

export default RectangleWithDiagonalsX;
