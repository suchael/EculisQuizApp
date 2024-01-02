import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileModak({ visible, onClose }) {
  const navigation = useNavigation();
  const [schoolName, setSchoolName] = useState('');
  const [location, setLocation] = useState('');
  const [vacancy, setVacancy] = useState('');

  const handleFindBtnPress = () => {
    console.log(schoolName, location, vacancy);
    onClose();
    setSchoolName('');
    setLocation('');
    setVacancy('');
    navigation.navigate('FriendlyMatch');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.modalContent}>
        	<View style = {{justifyContent: "center", alignItems: "center", backgroundColor: "black", height: 40, borderRadius: 5, marginBottom: 15}}>
        		<Text style={[styles.modalTitle, {color: "white"}]}>Your Profile</Text>
        	</View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g Daniel Akpan"
              value={schoolName}
              onChangeText={setSchoolName}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location:</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g Lagos"
              value={location}
              onChangeText={setLocation}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Have taught:</Text>
            <TextInput
              style={styles.input}
              placeholder="E.g Physics and Chemistry "
              value={vacancy}
              onChangeText={setVacancy}
            />
          </View>
          
          <Text style={styles.label}>Upload photo:</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleFindBtnPress}>
              <Text style={styles.submitBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelBtnText: {
    fontSize: 16,
  },
  submitButton: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  submitBtnText: {
    fontSize: 16,
    color: 'white',
  },
});
