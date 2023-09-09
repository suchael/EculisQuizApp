import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import {  AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

// My import



export default function Logout () {
  return (
    <View style ={{flex: 1}}>
      <HomeHeader />
      <Main />
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
          borderBottomColor: 'gray',
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Logout</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  console.log(screenHeight);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 10,
          flex: 1, 
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      
      <View style ={{borderWidth: 2, borderColor: "#888", padding: 15, borderRadius: 5, gap: 50}}>
        	<View style ={{flexDirection: "row", padding: 15, borderRadius: 4, backgroundColor: "lightgray"}}>
        		<Text style ={{fontSize: 17, fontWeight: "600"}}>
        			Are you sure you want to logout?
        		</Text>
       	 </View>
        
        	<TouchableOpacity  style ={{height: 46, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", justifyContent:"center", alignItems:"center", gap: 15,marginTop: 20}}>
				  <MaterialCommunityIcons name="reload" size={24} color="black" />
      			<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Logout </Text>
     	  </TouchableOpacity>
       
       
        </View>
      </View>
    </ScrollView>
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
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: 'gray',
    marginBottom: 6,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
  },
});