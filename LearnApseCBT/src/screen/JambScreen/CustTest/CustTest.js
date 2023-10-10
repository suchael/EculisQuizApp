import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import Subject from './SubjectListDb.js';
import QuestButton from './QuestButton.js';
import ShowQuestionList from './ShowQuestionList.js';
import MinAndHourModal from './MinAndHourModal.js';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function PastQuest() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show question list" component={ShowQuestionList} />
    </Stack.Navigator>
  );
}

function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <SelectByTopic />
      <BottomBtn/>
    </View>
  );
}

function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 4,
          borderBottomWidth: 2,
          borderColor: "#777",
          paddingBottom: 10
          
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ borderWidth: 2, width: 60, height: 40, justifyContent: 'center' }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Customised{'  '}Test</Text>
    </View>
  );
}


function TopBtn() {
  return (
    <View
      style={{
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        gap: 20,
        marginBottom: 30,
      }}
    >
      {/*Hour*/}
      <MinAndHourModal Type="Hour" />
      {/*Minute*/}
      <MinAndHourModal Type="Min" />
    </View>
  );
}

function SelectByTopic() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  
  const instruction = '• Internet connection is not required. \n• Customise this Test to your preference \n• Test your knowledge on a topic';
  return (
    <View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'lightgray',
            borderWidth: 2,
            borderColor: 'blue',
            paddingVertical: 8,
            paddingHorizontal: 4,
            marginTop: 30,
            marginBottom: 10,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Text style={{ fontSize: 16.5, fontWeight: '500', paddingHorizontal: 10 }}>{instruction}</Text>
        </View>
        <TopBtn />
        <View style={{ paddingBottom: 140 }}>
          {Subject.map((eachSubject, index) => (
            <QuestButton key={index} subject={eachSubject}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function BottomBtn() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 10, paddingBottom: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: "transparent" }}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Show question list')}
        underlayColor="lightgray"
        style={styles.studyButton}
      >
        <Text style={styles.studyButtonText}>Continue (4)</Text>
      </TouchableHighlight>
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
  // Study Button
  studyButton: {
    height: 46,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  studyButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
});
