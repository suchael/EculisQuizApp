import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

// My Import


export default function LEGOMOModal({ visible, onClose}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose}
      >
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
            onPress={onClose}>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              width: '80%',
              maxHeight: '80%',
              borderColor: 'gray',
              borderWidth: 1,
            }}
          >
            <ScrollView>
       			<MessageBox/>
            </ScrollView>
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: '100%',
                padding: 10,
                backgroundColor: 'blue',
                borderRadius: 15,
                alignItems: 'center',
              }}
              onPress={onClose}
            >
              <Text style={{ color: 'white' , fontSize:16, fontWeight: "bold"}}>OK</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClose} style={{ flex: 1, width: '100%' }}>
         </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


function MessageBox(){
    return (
      <View style={styles.messageBox}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageHeaderText}>What is </Text>
          <Text style={styles.messageHeaderText}>LEGOMO?</Text>
       </View>
       <Text style={styles.messageNormalText}>
			<Text style ={{fontWeight: "600"}}>LE - </Text>LearnApse
			{"\n"}
			<Text style ={{fontWeight: "600"}}>GO - </Text>Global 
			{"\n"}
			<Text style ={{fontWeight: "600"}}>MO - </Text>Mock
			{"\n\n"}
			Is a standardized examination organised by LearnApse to give students a simulated UTME experience at the comfort of their home.
			{"\n\n"}
			In this examination, students will receive notifications of their specific exam date and time via their registered email addresses, enabling them to participate in a monthly 
			assessment conducted at the end of the months of January, February, and March.
	   </Text>

      </View>
    );
  };


const styles = StyleSheet.create({
	messageBox: {
    	borderWidth:2, 
		borderRadius: 10, 
		paddingVertical: 15,
    	backgroundColor: 'white',
  },
  messageHeader: {
    justifyContent: "center",
    alignItems: "center"
  },
  messageHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageNormalText: {
    fontSize: 16.5,
    fontWeight: '500',
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "justify",
  },
});
