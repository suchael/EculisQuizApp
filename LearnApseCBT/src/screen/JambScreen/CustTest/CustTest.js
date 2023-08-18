import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const subjects = [
  'Math', 'Science', 'History', 'Art', 'Music', 'English',
  'Biology', 'Physics', 'Chemistry', 'Geography', 'Literature',
  'Physical Education', 'Computer Science', 'Economics', 'Psychology',
  'Sociology', 'Political Science', 'Anthropology', 'Philosophy',
  'Engineering', 'Medicine', 'Law', 'Languages', 'Drama',
  'Environmental Science', 'Culinary Arts', 'Business', 'Marketing',
  'Architecture', 'Fashion Design', 'Graphic Design'
];

const CustomStyledPickerWithBackdrop = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderSubject = ({ item }) => (
    <TouchableOpacity style={styles.option} onPress={() => selectSubject(item)}>
      <Text style= {{fontSize: 17, fontWeight: "500"}}>{item}</Text>
    </TouchableOpacity>
  );

  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text>Choose a Subject</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <View style={styles.pickerContainer}>
                <FlatList
                  data={subjects}
                  renderItem={renderSubject}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {selectedSubject && (
        <Text style={styles.selectedSubject}>Selected Subject: {selectedSubject}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: 300,
    height: 400,
    borderRadius: 6,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pickerContainer: {
    flex: 1,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedSubject: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default CustomStyledPickerWithBackdrop;
