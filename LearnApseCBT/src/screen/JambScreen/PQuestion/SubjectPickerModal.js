
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

  const renderTopic = (topic, index) => (
    <TouchableOpacity 
			key={topic} 
			style={styles.option} 
			onPress={() => selectTopic(topic)}
	>
      	<Text style={{ fontSize: 17, fontWeight: "500" }}>{index + 1}.</Text>
      	<View style = {{flex: 1}}>
      		<Text style={{ fontSize: 17, fontWeight: "500" }} numberOfLines={1}>{topic}</Text>
      		<Text style={{ fontSize: 13, fontWeight: "500",}}>Subtopic...{topic}</Text>
      	</View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={openModal}
        underlayColor="lightgray"
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 6, borderWidth: 2, gap: 22, borderRadius: 3, width: 110, backgroundColor: selectedTopic=== null?  "lightgray": "white"}}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Topics</Text>
          <Fontisto name="angle-down" size={16} color="black" />
        </View>
      </TouchableHighlight>
      {selectedTopic && (
      	<View style ={{ flex: 1, borderWidth: 2, borderRadius: 4, backgroundColor: "white", paddingHorizontal: 5, marginTop: 5}}>
			<Text style={{ fontWeight: "500", fontSize: 18, textAlign: "center"}}>{selectedTopic}</Text>
			<Text style = {{fontWeight: "700", fontSize: 17, textAlign: "center" , marginTop: 5}}>
					Total:{"  "}
					<Text style = {{fontWeight: "500", }}>80</Text>
			  </Text>
      	</View>
        
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center", borderBottomWidth: 2, borderColor: "#999", paddingVertical: 10 }}>
				All Topics
			</Text>
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
    //alignItems: 'center',
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
    flexDirection: "row",
    gap: 5,
  },
  selectedSubject: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
  },
});

