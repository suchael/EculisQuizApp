import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function GoToBtnList() {
  // Create an array of numbers representing the question buttons (1 to 20)
  const questionNumbers = Array.from({ length: 213 }, (_, index) => index + 1);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 5 }}>
      {questionNumbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={{ borderWidth: 2, width: 48, height: 48, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', margin: 1 }}
          onPress={() => {
            // Handle button click, e.g., navigate to the corresponding question
            console.log(`Go to question ${number}`);
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default GoToBtnList;
