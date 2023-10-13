import React from 'react';
import { Modal, Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ScoreModal({ visible, onClose }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const isUserCorrect = true; // Turn this to True or false to see the changes

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={onClose}>
          <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 2, height: '45%', width: '60%', justifyContent: 'space-between', alignItems: 'center' }}>
            <ScrollView>
              <View style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 12, marginBottom: 8 }}>Correct Answer: B</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
                <View style={{ borderWidth: 3, borderColor: isUserCorrect? "green" : "red", borderRadius: 10, alignItems: 'center', justifyContent: 'center', minHeight: windowHeight * 0.3170, width: '100%' }}>
                  {isUserCorrect ? (
                    <>
                      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>You are correct</Text>
                      <Ionicons name="ios-checkmark-circle-sharp" size={60} color="green" />
                    </>
                  ) : (
                    <>
                      <Text style={{ fontSize: 18, fontWeight: '600' , marginBottom: 20}}>You are Wrong</Text>
                      <Entypo name="circle-with-cross" size={60} color="red" />
                    </>
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
