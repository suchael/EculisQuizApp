
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const TOPIC = [
  {
    ss1: [
				{ topic: "Units and measurement", subTopics: ["Fundamental/Derived Quantity and unit", "Dimensional analysis", "Mass vs Weight"] },
				{ topic: "Motion • Friction", subTopics: ["Types of motion", "Circular and Brownian motion", "Method of reducing friction", "Coefficient of friction"] },
				{ topic: "Velocity Time graph", subTopics: ["Position/Distance and displacement", "graph of motion"] },
				{ topic: "Work • Energy and Power", subTopics: ["Conservation of mechanical energy"] },
				{ topic: "Heat energy (1)", subTopics: ["Transfer of heat", "Linear/Area/Cubic expansivity"] },
				{ topic: "Electric charges (1)", subTopics: ["Gold leaf electroscope", "Electrophorus", "Point charges/Ways of distribution of charges"] },
				{ topic: "Description and properties of field", subTopics: ["basic concept of gravitational field/Electric Field", "Magnetism"] },
				{ topic: "Electric Field (1)", subTopics: ["Electric lines of force", "P.D and E.M.F", "Electric circuit and Ohms law", "Series and parallel resistors"] },
				{ topic: "Particle nature of matter", subTopics: ["Kinetic theory and state of matter", "Atoms/Molecules/Ions/Electron/Proton/Neutron"] },
				{ topic: "Crystal structure", subTopics: ["Crystalline and non crystalline"] },
				{ topic: "Elasticity of solid", subTopics: ["Hooke's law", "Young's modulus"] },
				{ topic: "Fluid at rest and in motion", subTopics: ["Surface tension", "Capillarity and Viscosity", "Terminal velocity"] },
				{ topic: "Harvesting of solar energy", subTopics: ["Solar energy production/Solar cells and panels"] },
			],
			ss2: [
				{ topic: "Scalars and vector quantity", subTopics: ["Addition and resolution of vector", "Parallelogram law and triangular laws of vector"] },
				{ topic: "Motion (2)", subTopics: ["Equations of motion"] },
				{ topic: "Projectiles", subTopics: ["Projectile motion", "Time of flight/Maximum height and Range"] },
				{ topic: "Equilibrium of forces in Solid", subTopics: ["Moment of force", "Center of gravity", "stability"] },
				{ topic: "Equilibrium of forces in Liquid", subTopics: ["Archimedes Principle", "Floatation", "Density and relative density/Hydrometer"] },
				{ topic: "Simple Harmonic Motion (SHM)", subTopics: ["Forced vibration and resonance", "Frequency and Period of a vibrating body"] },
				{ topic: "Linear Momentum", subTopics: ["Impulse and Momentum/Inertia", "Newton's laws of motion", "Elastic/Inelastic collision"] },
				{ topic: "Mechanical Energy • Machines", subTopics: ["Mechanical Advantage/Velocity ratio of a machine", "Lever system"] },
				{ topic: "Heat Energy (2)", subTopics: ["Thermometer/Thermometric substances and scales", "Specific heat capacity and latent heat", "Relative humidity and few point"] },
				{ topic: "Gas laws", subTopics: ["Gas pressure", "Boyle's/Charles/Pressure law and kinteic theory of gases"] },
				{ topic: "Waves", subTopics: ["Mechanical/Electromagnetic wave", "Progressive wave/Node and antinode"] },
				{ topic: "Reflection of light wave", subTopics: ["Rectilinear propagation of light", "Transparent/Opaque/Sources of light", "Mirror equation"] },
				{ topic: "Refraction of light", subTopics: ["Total internal reflection/Critical angle", "Refraction", "Dispersion of light", "Color addition"] },
				{ topic: "Application of light wave", subTopics: ["Camera vs Human eye", "Microscope and telescope"] },
				{ topic: "Sound wave", subTopics: ["Hearing aids", "Characteristics of sound- Loudness/Pitch/Frequency", "Vibration in strings and pipes"] },
				{ topic: "Pressure in fluids", subTopics: ["Pascal's principle/Concept of pressure"] },
			],
			ss3: [
				{ topic: "Electromagnetic wave", subTopics: ["Uses of electromagnetic wave", "Types of radiation"] },
				{ topic: "Gravitational field", subTopics: ["Newton's universal law of gravitation", "Escape velocity/Kepler's laws of planetary motion", "Natural/Artificial Satellite"] },
				{ topic: "Coulomb's law • Electric Field (2)", subTopics: ["Capacitor and capacitance", "electric field intensity"] },
				{ topic: "Current electricity • Electric Field (3)", subTopics: ["Internal resistance of a cell", "Resistivity and conductivity", "Galvanometer/Voltmeter/Ammeter conversion"] },
				{ topic: "Electrolysis", subTopics: ["Electrolysis and Faraday's laws", "Thermionic emission/Hot cathode ray"] },
				{ topic: "Magnetic Field", subTopics: ["Method of making magnet", "Permanent and Non permanent magnet", "Earth's magnetic field"] },
				{ topic: "Electromagnetic Field", subTopics: ["Faraday's laws of electromagnetic induction/Eddy current", "Transformer/Power transmission/Induction coil"] },
				{ topic: "Simple A.C circuits", subTopics: ["RLC circuit/Capacitance and Impedance"] },
				{ topic: "Atomic models", subTopics: ["Atoms"] },
				{ topic: "Radioactivity • Nuclear Physics", subTopics: ["Alpha, Beta and Gamma rays", "Transmutation of atoms", "Nuclear Fission/Fusion"] },
				{ topic: "Energy Quantisation", subTopics: ["Franck Hertz experiment", "Atomic spectra and photoelectric effect/Xrays"] },
				{ topic: "Wave particle duality", subTopics: ["Uncertainty principle", "complementary variables", "Wave and particulate nature of matter"] },
				{ topic: "Basic electronics • semiconductor", subTopics: ["semi conductors/Diode/Triode/Electrons and holes", "P-N junction diode"] },
				{ topic: "Rocket • Satellite", subTopics: ["Rocket science", "Nigeria Sat - 1", "NigCom-sat-1"] },
				{ topic: "Energy and society", subTopics: ["Renewable energy", "Energy crisis"] },
			],
			
  }
  // ... Add more classes and topics as needed
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

  

const renderClass = (classObj, classIndex) => (
  <View key={classIndex}>
    {Object.entries(classObj).map(([className, topics], index) => (
      <View key={index}>
        <View style ={{justifyContent: "center", alignItems: "center"}}>
        	<Text style={{ fontSize: 18, fontWeight: "bold" , textAlign: "center", backgroundColor: "lightgray", borderWidth: 2, borderColor: "#777", paddingVertical: 2, marginTop: 30, marginHorizontal: 10, width: 80}}>{className}</Text>
        </View>
        {topics.map((topic, topicIndex) => renderTopic(topic, topicIndex, className))}
      </View>
    ))}
  </View>
);



const renderTopic = (topic, topicIndex, className) => (
  <TouchableOpacity 
    key={topicIndex} 
    style={styles.option} 
    onPress={() => {
		selectTopic(topic.topic, topic.subTopics, className)
		closeAndResetModal()
	}}
  >
    <Text style={{ fontSize: 18, fontWeight: "600" }}>{topicIndex + 1}.</Text>
    
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }} numberOfLines={1}>{topic.topic}</Text>
      {topic.subTopics.map((subtopic, subIndex) => (
        <Text key={subIndex} style={{ fontSize: 14, fontWeight: "500" }}>• {subtopic}</Text>
      ))}
    </View>
  </TouchableOpacity>
);

const RANDOM = "40 Random questions from all topics";
const randomQuestions = () => (
  <TouchableOpacity
    style = {{backgroundColor: "lightgray", borderWidth: 2, borderColor: "#777", marginTop: 30, marginHorizontal: 10, paddingVertical: 3, borderRadius: 15}}
		onPress={() => {
			selectTopic(RANDOM)
			closeAndResetModal()
		}}
  >
    <Text style={{ fontSize: 18, fontWeight: "bold" , textAlign: "center"}}>
      40 Random questions
    </Text>
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
          <Text style = {{fontWeight: "700", fontSize: 18, textAlign: "center" , marginTop: 5}}>
              Total:{"  "}
              <Text style = {{fontWeight: "500", }}>80</Text>
            </Text>
      	</View>
        
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, width: '100%' }}
            onPress={closeAndResetModal}>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'white', borderRadius: 10, paddingBottom: 10, width: '88%', maxHeight: '80%', borderColor: 'gray', borderWidth: 1 }}>
              <View style= {{justifyContent:"center", alignItems: "center", borderBottomWidth: 2, borderColor: "#999", paddingBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center", paddingVertical: 6 }} numberOfLines={1}>
                  All Topics - Physics 
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center"}} numberOfLines={1}>
                  • Challenge yourself on a topic
                </Text>
              </View>
            	<ScrollView>
            		{randomQuestions()}
                {TOPIC.map(renderClass)}
            	</ScrollView>
          </View>
          
          <TouchableOpacity 
            onPress={closeAndResetModal} 
            style={{ flex: 1, width: '100%' }}>
         </TouchableOpacity>
        </View>
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
    height: "74%",
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

