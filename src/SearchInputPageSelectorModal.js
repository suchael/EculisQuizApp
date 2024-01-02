
import React, { useState, useEffect } from 'react';
import { View, 
        Text, 
        TouchableHighlight, 
        Modal, 
        ScrollView, 
        StyleSheet, 
        BackHandler } from 'react-native';

const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


export default function PageSelectorModal(){
  const [selectedNumber, setSelectedNumber] = useState(9);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectNumber = (number) => {
    setSelectedNumber(number);
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

  const renderNumber = (number) => (
    <TouchableHighlight key={number} underlayColor = "lightgray" style={styles.option} onPress={() => selectNumber(number)}>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>Page{"  "}{number}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={[styles.container, {backgroundColor: "transparent"}]}>
    	<View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2,  width: 95}}>
      	<TouchableHighlight
        			onPress={openModal}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style = {[styles.topBtnTouchables, {alignItems: "center", justifyContent: "center",flex:1, borderRadius: 4, paddingVertical: 8 }]}
      	>
      			  <View style = {[styles.topBtnTouchablesView, {alignItems: "center", justifyContent: "center", gap: 1}]}>
      					<Text style ={styles.topBtnText}>Page{"  "}{selectedNumber}/10</Text>
					</View>
           </TouchableHighlight>
    	</View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
      
      {/*Modal Wrapper*/}
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          activeOpacity={1} 
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <ScrollView>
              		{NUMBER.map(renderNumber)}
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
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    
  },
  modal: {
    width: "40%",
    height: "64%",
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pickerContainer: {
    flex: 1,
  },
  option: {
    padding: 10,
    //borderBottomWidth: 1.4,
    borderBottomColor: 'lightgray',
    justifyContent: "center",
    alignItems: "center",
  },
  
    // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 8, 
      borderBottomRightRadius: 8,
      marginLeft: 10,
      backgroundColor: "gray",
  },
  topBtnTouchables: {
  	backgroundColor: "#999",
	  padding: 3, 
	  alignItems: "center", 
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  gap: 14, 
	  paddingHorizontal: 6,
  },
  topBtnText: {
  	fontSize: 15, 
	  fontWeight: "600", 
	  color:"#222"
  },
});





