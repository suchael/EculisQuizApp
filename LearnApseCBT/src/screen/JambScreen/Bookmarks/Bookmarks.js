import React from 'react';
import { View } from 'react-native';

const Triangle = () => {
  return (
  <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <View style={styles.triangle} />
  </View>
  );
};

const styles = {
  triangle: {
    width: 0,
    height: 2,
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 2,
    borderLeftWidth: 50, // Adjust the width as needed
    borderRightWidth: 50, // Adjust the width as needed
    borderBottomWidth: 20, // Adjust the height as needed
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black', // You can change the color
  },
};

export default Triangle;
