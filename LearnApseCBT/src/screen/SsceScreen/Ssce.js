// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    {/* Add your tab screens here */}
    <Tab.Screen name="Tab1" component={Tab1Screen} />
    <Tab.Screen name="Tab2" component={Tab2Screen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent', // Remove header shadow
        },
      }}
    >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  
);

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 1 Content</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Custom header */}
      <Header />
      {/* Top tab navigator */}
      <TabNavigator />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Button
        title="<"
        onPress={() => navigation.goBack()}
        style={{ marginRight: 10 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Screen 2</Text>
    </View>
  );
};

const Tab1Screen = () => {
  return (
    <View>
      <Text>Tab 1 Content</Text>
    </View>
  );
};

const Tab2Screen = () => {
  return (
    <View>
      <Text>Tab 2 Content</Text>
    </View>
  );
};

export default AppNavigator;
