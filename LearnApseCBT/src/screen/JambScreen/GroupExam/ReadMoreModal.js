import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
} from 'react-native';

// My Import


function ReadMoreModal({ visible, onClose}){
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
            onPress={onClose}
          ></TouchableOpacity>
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
          <TouchableOpacity
            style={{ flex: 1, width: '100%' }}
            onPress={onClose}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


function MessageBox(){
    return (
      <View style={styles.messageBox}>
          <Text style={styles.messageNormalText}>
            	The premium version of our software offers comprehensive and cutting-edge exam security to ensure the highest level of integrity. 
				{"\n"}Some of these features include:{"\n\n"}
				<BoldText> •Advanced AI Proctor: </BoldText>Detects various forms of cheating, including web browsing, mobile phone use, eye signals, and spy glasses.{"\n\n"}
				<BoldText>•Monitoring: </BoldText>Keeps an eye on examinees looking away from the screen or engaging in unauthorized conversations.{"\n\n"}
				<BoldText>•Visual Evidence: </BoldText>Captures photos before and after the exam for thorough monitoring and verification.{"\n\n"}
          </Text>
      </View>
    );
  };


const BoldText = ({ children }) => {
  return (
    <Text style={{fontSize: 16, fontWeight: "600"}}>
      {children}
    </Text>
  );
};


const styles = StyleSheet.create({
	messageBox: {
    	borderWidth:2, 
		borderRadius: 10, 
		padding:6, 
		paddingBottom: 10,
    	backgroundColor: 'white',
  },
  messageNormalText: {
    fontSize: 16.5,
    fontWeight: '400',
    marginTop: 2
  },
});

export default ReadMoreModal;