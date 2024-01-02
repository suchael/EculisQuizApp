
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const TOPIC = [
  "Atomicity of elements of the periodic law function of the encapsulation prototypic normadic", "Molecule", "Ionization", "Chemical Bond", "Periodic Table",
  "Chemical Reaction", "Acid-Base Chemistry", "Organic Chemistry",
  "Inorganic Chemistry", "Biochemistry", "Thermodynamics", "Kinetics",
  "Catalysis", "Electrochemistry", "Quantum Mechanics", "Chemical Equilibrium",
  "Nanotechnology", "Photochemistry", "Solid-State Chemistry", "Spectroscopy",
  "Environmental Chemistry", "Coordination Compounds", "Hydrocarbons",
  "Polymers", "Transition Metals", "Radioactivity", "Chemical Analysis",
  "Chemical Engineering", "Forensic Chemistry"
];


export default function SubjectPickerModal(){
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectTopic = (topic) => {
    setSelectedTopic(topic);
    closeAndResetModal();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (modalVisible) {
        closeAndResetModal();
        return true; // Prevent default behavior (exit the app)
      }
      return false; // Let the default behavior continue (back navigation)
    });

    return () => backHandler.remove();
  }, [modalVisible]);

  const renderTopic = (topic) => (
    <TouchableOpacity key={topic} style={styles.option} onPress={() => selectTopic(topic)}>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{topic}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={openModal}
        underlayColor="lightgray"
        style ={{borderWidth: 2, borderRadius: 4, backgroundColor: "lightgray"}}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, paddingVertical: 4, gap: 25, backgroundColor: selectedTopic === null? "lightgray": "white" }}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Topic</Text>
          <Fontisto name="angle-down" size={16} color="black" />
        </View>
      </TouchableHighlight>
      
      <Text style={{ fontWeight: "500", fontSize: 17 }}>{selectedTopic}</Text>
      

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <ScrollView>
                {TOPIC.map(renderTopic)}
              </ScrollView>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
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
    width: "84%",
    height: "64%",
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

