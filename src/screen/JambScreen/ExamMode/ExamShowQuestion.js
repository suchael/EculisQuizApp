import {View, 
        Text, 
        StyleSheet,
        Dimensions,
        TouchableOpacity,
        Modal,
        AppState,
		ActivityIndicator,
        StatusBar,
         } from 'react-native';
        
import React , {useState, 
                useEffect,
                } from 'react';
				


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useKeepAwake } from 'expo-keep-awake';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




// My import
import HomeMain from "./HomeMain.js";

const Stack = createNativeStackNavigator();

export default function ShowQuestionList() {
  useKeepAwake(); //Keep Screen awake during exam

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
      	<Stack.Screen name='Home' component = {BackgroundedAppModal} initialParams={{ currentPage: 1 }} />
    </Stack.Navigator>
  )
}


function BackgroundedAppModal() {
  const windowWidth = Dimensions.get('window').width;
  
  const [modalVisible, setModalVisible] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  let appStateListener = null;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'background' && isFocused) {
      // App is transitioning to the background, and the component is focused
      // Increment the warning count
      setWarningCount((prevCount) => prevCount + 1);
      // You can also implement logic to auto-submit the exam after warnings or handle other actions as needed
      openModal();

      // Save the warning count to AsyncStorage
      try {
        await AsyncStorage.setItem('warningCount', JSON.stringify(warningCount));
      } catch (error) {
        alert("Error saving count", error);
      }
    }
  };

  useEffect(() => {
    if (isFocused) {
      appStateListener = AppState.addEventListener('change', handleAppStateChange);
    } else {
      if (appStateListener) {
        appStateListener.remove();
      }
    }

    // Retrieve the warning count from AsyncStorage when the component mounts
    const retrieveWarningCount = async () => {
      try {
        const savedCount = await AsyncStorage.getItem('warningCount');
        if (savedCount !== null) {
          setWarningCount(parseInt(savedCount, 10));
        }
      } catch (error) {
        alert("Error retrieving count", error);
      }
    };

    retrieveWarningCount();

    // Remove the event listener when the component unmounts
    return () => {
      if (appStateListener) {
        appStateListener.remove();
      }
    };
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
    	<StatusBar hidden={true} />
      <HomeMain/>
      
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
      <Text style={{ fontSize: 50, fontWeight: '600', textAlign: 'center' }}>🙄</Text>
      
      <View style ={{flexDirection: "row", gap: 5}}>
      	<Text style={{ fontSize: 13, fontWeight: '600', textAlign: 'center' }}>
        		Monitoring mode activated...
      	</Text>
    	  <ActivityIndicator size="small" color="black" />
    	</View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homeContainer:{
    flex:1,
    backgroundColor: "white",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
  },
  homeHeaderText: {
    fontSize: 22,
    fontWeight: "600",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "white",
  },
  
});