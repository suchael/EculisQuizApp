import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function ViewAnswers() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <TabBar />
      <HomeBtn />
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
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ width: 60, height: 40, justifyContent: 'center' }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>

      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Text style={styles.homeHeaderText}>View Answers</Text>
      </View>
    </View>
  );
}

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Maths"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#777',
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        tabBarStyle: {
          height: 40,
          borderBottomWidth: 0,
          backgroundColor: 'lightgray',
        },
        tabBarIndicatorStyle: {
          bottom: 0,
          backgroundColor: 'black',
          height: 3,
        },
        animation: 'none',
      }}
    >
      <Tab.Screen name="Maths" component={MainContainer} />
      <Tab.Screen name="Phys" component={MainContainer} />
      <Tab.Screen name="Chem" component={MainContainer} />
      <Tab.Screen name="Biol" component={MainContainer} />
    </Tab.Navigator>
  );
}

function MainContainer() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 80,
          flexDirection: "row",
        }}
      >
        <ButtonList />
        <ButtonList />
        <ButtonList />
        {/* ... Continue adding ButtonList components */}
      </ScrollView>
    </View>
  );
}

function ButtonList() {
  return (
    <TouchableHighlight
      onPress={() => {}}
      activeOpacity={0.9}
      underlayColor="white"
      style={{ width: 45, height: 45, backgroundColor: 'lightgray', margin: 2 }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>1</Text>
    </TouchableHighlight>
  );
}

function HomeBtn() {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.homeBtn}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
        Home
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  homeHeaderText: {
    fontSize: 22,
    fontWeight: '600',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  homeBtn: {
    width: '90%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    left: '5%',
  },
});
