import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

function LeftTabContent({ navigation }) {
  return (
    <View>
      <Text>Left Tab Content</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function RightTabContent() {
  return (
    <View>
      <Text>Right Tab Content</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>=</Text>
        </TouchableOpacity>
        <Text>LearnApse</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={{ height: 20, width: '100%', borderWidth: 1, marginTop: 10 }} />
      <Tab.Navigator>
        <Tab.Screen name="Left" component={LeftTabContent} />
        <Tab.Screen name="Right" component={RightTabContent} />
      </Tab.Navigator>
    </View>
  );
}

export default function SsceContent() {
  return (
   
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={ProfileScreen} />
      </Stack.Navigator>
    
  );
}
