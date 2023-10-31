//Note: this is a sample code
// this code was not imported anywhere 

import React, { useEffect, useState } from 'react';
import { Modal, 
				Text, 
				View, 
				TouchableOpacity, 
				AppState, 
				ActivityIndicator,
				Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function BackgroundedAppModal() {
  const windowWidth = Dimensions.get('window').width;

  const [modalVisible, setModalVisible] = useState(false);
  const [warningCount, setWarningCount] = useState(0);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (nextAppState === 'background') {
        // App is transitioning to the background
        // Increment the warning count
        setWarningCount((prevCount) => prevCount + 1);
        // You can also implement logic to auto-submit the exam after warnings
        // or handle other actions as needed
        openModal();

        // Save the warning count to AsyncStorage
		try{
			await AsyncStorage.setItem('warningCount', JSON.stringify(warningCount));
		}
		catch(error){
			alert("Error saving count", error)
		}
        
      }
    };

	// Add an event listener to AppState changes
    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    // Retrieve the warning count from AsyncStorage when the component mounts
    const retrieveWarningCount = async () => {
    	try{
			const savedCount = await AsyncStorage.getItem('warningCount');
      	  if (savedCount !== null) {
        			setWarningCount(parseInt(savedCount, 10));
      	   }
		}
		catch(error){
			alert("Error retrieving count", error)
		}
    };

    retrieveWarningCount();

	 // Remove the event listener when the component unmounts
    return () => {
      appStateSubscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 13, fontWeight: '600', textAlign: 'center' }}>Hello</Text>
      <Text style={{ fontSize: 17, fontWeight: '600', textAlign: 'center' }}>Minimized {warningCount} times</Text>
      <TouchableOpacity onPress={openModal} style={{ backgroundColor: 'gray', borderWidth: 4, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', padding: 4, borderRadius: 25, marginVertical: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: '600' }}>modal</Text>
      </TouchableOpacity>
      
      <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={closeModal}>
        <TouchableOpacity onPress={closeModal} style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 10, height: '45%', width: '80%', justifyContent: 'center', alignItems: 'center' }}>
            <CountNumOfAppBackground warningCount={warningCount} />
          </View>
        </TouchableOpacity>
      </Modal>
      
    </View>
  );
}

const CountNumOfAppBackground = ({ warningCount }) => {
  return (
    <View style={{ width: "100%" , borderWidth: 4, borderColor: '#FFD700', borderRadius: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
    	
      <Text style={{ fontSize: 35, color: 'red', fontWeight: '600', textAlign: 'center' }}>Warning</Text>
      <Text style={{ fontSize: 20, color: 'black', fontWeight: '500', textAlign: 'center' }}>
        	Focus on the exam {'\n'}
        	<Text style={{ fontWeight: '600' }}> {warningCount} chances left</Text> 
      </Text>
      <Text style={{ fontSize: 50, fontWeight: '600', textAlign: 'center' }}>ðŸ™„</Text>
      
      <View style ={{flexDirection: "row", gap: 5}}>
      	<Text style={{ fontSize: 13, fontWeight: '600', textAlign: 'center' }}>
        		Monitoring mode activated...
      	</Text>
    	  <ActivityIndicator size="small" color="black" />
    	</View>
      
    </View>
  );
};
