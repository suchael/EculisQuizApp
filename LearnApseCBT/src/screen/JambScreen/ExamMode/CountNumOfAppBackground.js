
// This code detect when users minimise the app
// or put the app in background to use other apps
// it count how many times the app was minimised 


import React, { useEffect, useState, useContext } from 'react';
import { Modal, 
				Text, 
				View, 
				TouchableOpacity, 
				ScrollView, 
				StyleSheet, 
				AppState,
				Dimensions } from 'react-native';
				
// Icons
import { Ionicons, Entypo } from '@expo/vector-icons';


//My import
//import {ScoreContext} from "./QuizUseContext/Context.js";


export default function BackgroundedAppModal({ visible, onClose }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  
  const isUserCorrect = true; // Turn this to True or false to see the changes wrong or right answer on the modal

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , }} onPress={onClose}>
          <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 10, height: '45%', width: '80%', justifyContent: 'space-between', alignItems: 'center' }}>            
              <CountNumOfAppBackground/>   
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}


const CountNumOfAppBackground = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (appState === 'active' && nextAppState === 'background') {
        // App is transitioning to the background
        // Increment the warning count
        setWarningCount((prevCount) => prevCount + 1);

        // You can also implement logic to auto-submit the exam after warnings
        // or handle other actions as needed
      }

      setAppState(nextAppState);
    };

    // Add an event listener to AppState changes
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    // Remove the event listener when the component unmounts
    return () => {
      appStateSubscription.remove();
    };
  }, [appState]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Your app content */}
      <Text>Your App Content Here</Text>

      {/* Display the warning and count */}
      {warningCount > 0 && (
        <Text>
          Warning: Please focus on the exam ({warningCount} times)
        </Text>
      )}
    </View>
  );
};


