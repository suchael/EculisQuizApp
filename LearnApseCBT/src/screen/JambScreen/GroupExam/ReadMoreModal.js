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
            	The premium version comes with an advanced AI proctor that is capable of detecting examination malpractice . It can detect attempts such as students trying to open web browsers, using a second mobile phone , eye signals as well as spy glasses , looking away from the screen, or talking to someone else. The premium version also include photos of before and after exam.
          </Text>
      </View>
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