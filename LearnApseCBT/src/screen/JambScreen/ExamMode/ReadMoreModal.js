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
import UnderLineTextBtn from "./UnderLineTextBtn.js";


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
        <View style={styles.messageHeader}>
          <Text style={styles.messageHeaderText}>
            Attention:{' '}
            <Text style={styles.messageNormalText}>
  				Welcome to strict Exam Mode. Here, your Exam scores are on live display for friends and international sponsors to see. {'\n'}
  				But that is not all. The best of the best could also be sponsored and offered scholarships. {"\n\n"}Note that in this Exam Mode, your score is available globally via the
  				<UnderLineTextBtn text="Hall of Fame" goTo="HallOfFame"/> section.{"\n\n"}
			</Text>

            <Text style={styles.messageNormalText}>
          		If you wish to override this setting and you do not want your score to be visible globally, consider choosing the{" "} <UnderLineTextBtn text="Customised  Test" goTo = "Custom test" /> option.
        	</Text>
          </Text>
        </View>
        <View style={styles.messageContent}>
          <Text style={styles.messageNormalText}>
            Just like in the actual exam, in this strict mode:
          </Text>
          <View style ={{paddingLeft: 10, marginVertical: 3}}>
          	<View style ={{flexDirection: "row",  }}>
          		<Text style ={{fontSize: 18, fontWeight: "bold", position: "absolute"}}>•{"\t"}</Text>
          		<View style ={{marginLeft: 10}}>
          			<Text style ={{fontSize: 15, fontWeight: "600"}}>
          				English language = 60 questions 
          			</Text>
          		</View>
          	</View>
          	
          	<View style ={{flexDirection: "row", }}>
          		<Text style ={{fontSize: 18, fontWeight: "bold", position: "absolute"}}>•</Text>
          		<View style ={{marginLeft: 10}}>
          			<Text style ={{fontSize: 15, fontWeight: "600"}}>
          				Other subjects = 40 questions each
          			</Text>
          		</View>
          	</View>
          
          </View>
          <Text style ={{fontSize: 16.5, fontWeight: "500", textAlign: "justify"}}>
          	You are expected to select three additional subjects of
              your choice to make a total of four.
          </Text>
          
        </View>
        
      </View>
    );
  };


const styles = StyleSheet.create({
	messageBox: {
    	borderWidth:2, 
		borderRadius: 10, 
		padding:6, 
		paddingVertical: 10,
    	backgroundColor: 'white',
  },
  messageHeader: {
    marginBottom: 8,
  },
  messageHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "justify"
  },
  messageNormalText: {
    fontSize: 16.5,
    fontWeight: '500',
    marginTop: 12,
    textAlign: "justify",
  },
});

export default ReadMoreModal;