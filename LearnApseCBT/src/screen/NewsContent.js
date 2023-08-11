import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Text, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const windowHeight = Dimensions.get('window').height;
  const buttonBottom = windowHeight * 0.05;

  const [pressedItem, setPressedItem] = useState(null);

  const mockContent = Array.from({ length: 20 }, (_, index) => (
    <TouchableWithoutFeedback
      key={index}
      onPress={() => handleItemPress(index)}
    >
      <View style={[styles.item, index === pressedItem && styles.pressedItem]}>
        <Text>{`Item ${index + 1}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  ));

  const handleItemPress = (index) => {
    console.log(`Tapped on Item ${index + 1}`);
    setPressedItem(index);
    setTimeout(() => {
      setPressedItem(null);
    }, 300); // Reset the pressed item after a delay (300ms in this case)
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {mockContent}
      </ScrollView>

      <View style={[styles.floatingButtonContainer, { bottom: buttonBottom }]}>
        <TouchableWithoutFeedback style={styles.floatingButton}>
          <View style={styles.floatingButton}>
            <Text style={styles.buttonText}>Button</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  pressedItem: {
    backgroundColor: '#FEE',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
