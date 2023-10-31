import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler, FlatList,
        TouchableHighlight } from 'react-native';

import React , {useState, useCallback, }from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Icons
import { AntDesign } from '@expo/vector-icons';


// my import
import QuestButton from "./QuestButton.js";
import ExamInstructionModal from "./ExamInstructionModal.js";
import ExamShowQuestion from "./ExamShowQuestion";
import {Subjects} from "../PQuestion/SubjectListDb.js";
import ReadMoreModal from "./ReadMoreModal.js";


const Stack = createNativeStackNavigator();

export default function ExamMode() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, }} initialRouteName = "Home">
      	<Stack.Screen name ='Home' component = {Home}/>
      	<Stack.Screen name ='ExamShowQuestion' component = {ExamShowQuestion} options={{
          	gestureEnabled: false, // Disable swipe-back gesture
      	}}/>
    </Stack.Navigator>
  )
}


const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <SelectByGeneral />
      <ContinueButton />
    </View>
  );
}

const HomeHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.homeHeader, {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top + 12,
      paddingBottom: insets.bottom + 4,
      borderBottomWidth: 2,
      borderBottomColor: 'gray',
    }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ width: 60, height: 40, justifyContent: 'center' }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Exam Mode</Text>
    </View>
  );
}


const SelectByGeneral = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const renderSubject = useCallback(({ item }) => (
    <QuestButton subject={item} />
  ), []);

  return (
    <View>
      <FlatList
        data={Subjects}
        renderItem={renderSubject}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent= {()=>(
        	<View>
        	      <ReadMoreBtn />
      			<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4, paddingLeft: insets.left + 10 }}>Select any three subjects: </Text>
      	  </View>
		)}
        ListFooterComponent={<View style={{ paddingBottom: 210 }} />}
      />
    </View>
  );
}


const ReadMoreBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    BackHandler.addEventListener('hardwareBackPress', closeModal);
  };

  const closeModal = () => {
    setModalVisible(false);
    BackHandler.removeEventListener('hardwareBackPress', closeModal);
    return true;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 25, marginHorizontal: 10, borderWidth: 2, borderColor: "#888", padding: 7, backgroundColor: "white" }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Attention: </Text>
      <Text style={{ fontSize: 16 }}>Welcome to strict</Text>
      <TouchableOpacity onPress={openModal} style ={{ paddingVertical: 7}}>
        <Text style={{ color: 'blue' }}> ...Read More</Text>
      </TouchableOpacity>
      <ReadMoreModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
}


const ContinueButton = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style ={{position: "absolute", bottom:0, left: 0, right: 0, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: "transparent"}}>
      <TouchableHighlight
        onPress={showModal}
        underlayColor="white"
        activeOpacity={0.9}
        style={styles.continueButton}
      >
        	<Text style={styles.continueButtonText}>Continue</Text>
      </TouchableHighlight>
      <ExamInstructionModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
}



const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  homeHeader: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },

  continueButton: {
    height: 46,
    borderWidth: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
});


