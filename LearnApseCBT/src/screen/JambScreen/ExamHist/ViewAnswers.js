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
        <Text style={styles.homeHeaderText}>View Answer</Text>
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
          paddingBottom: insets.bottom + 100,
          
        }}
      >
      {/*Color Instruction*/}
      <View style = {{padding: 10, borderWidth: 2, borderColor: "#999", backgroundColor: "white", borderRadius: 5, gap: 8, marginVertical: 30,}}>
      	<View style ={{justifyContent: "center", alignItems: "center"}}>
      		<Text style = {{fontSize: 16, fontWeight: "600"}}>Your Maths score: 30/40 </Text>
      	</View>
      
      	<View style = {{flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
      		<Text style={{ fontSize: 16, fontWeight: '500', color: "black", }}>Questions you skipped</Text>
      		<View style ={{height: 30, width: 50, marginLeft: 20, backgroundColor: "lightgray", borderRadius: 4, justifyContent: 'center', alignItems: 'center',  }}>
      			<Text style = {{fontSize: 16, fontWeight: "900"}}>6</Text>
			</View>
      	</View>
        <Text style = {{fontSize: 16, fontWeight: "900"}}>
			Note: <Text style ={{fontWeight: "500"}}>Skipped questions attract 0 marks</Text>
		</Text>
      </View>
      {/*Closing: Color Instruction*/}
        
        <GoToBtnList/>
        <HomeBtn />
        
       
      </ScrollView>
    </View>
  );
}

function GoToBtnList() {
  // Create an array of numbers representing the question buttons (1 to 20)
  const questionNumbers = Array.from({ length: 60 }, (_, index) => index + 1);
  const navigation = useNavigation ();
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingHorizontal: 2 ,}}>
      {questionNumbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={{ width: '15%',  height: 40,borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: number % 2 ===0? "#4CBB17": "red", margin: 2 }}
          onPress={() => navigation.navigate("Past questions", {screen: "Explanation"})}
        >
          <Text style={{ fontSize: 16, fontWeight: '900', color: "white" }}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}



function HomeBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
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
    backgroundColor: 'white',
  },
  homeBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 25,
    marginTop:  80
    //position: 'absolute',
    //bottom: 10,
    //left: 10,
    //right: 10,
  },
});
