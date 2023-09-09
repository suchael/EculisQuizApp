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
import { FontAwesome5 , AntDesign, FontAwesome, Feather, MaterialIcons, Entypo} from '@expo/vector-icons';

// My import



export default function ContactUs () {
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
      <Text style={styles.homeHeaderText}>Contact Us</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  console.log(screenHeight);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 60,
          paddingBottom: insets.bottom + 10,
          flex: 1,
        }}
      >
        
        <TouchableOpacity  style ={{height: 46, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", justifyContent:"flex-start", alignItems:"center", gap: 15,marginTop: 20}}>
						  <FontAwesome name="whatsapp" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Message us via WhatsApp</Text>
       </TouchableOpacity>
       
       <TouchableOpacity  style ={{height: 46, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", justifyContent:"flex-start", alignItems:"center", gap: 15,marginTop: 20}}>
						  <FontAwesome name="whatsapp" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Join our WhatsApp group</Text>
       </TouchableOpacity>
       
       <TouchableOpacity  style ={{height: 46, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "white", borderWidth: 2, borderColor: "blue", flexDirection: "row", justifyContent:"flex-start", alignItems:"center", gap: 15,marginTop: 20}}>
						  <MaterialIcons name="email" size={24} color="black" />
      					<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", }}>Email us</Text>
       </TouchableOpacity>
       
       
        
        <View style ={{alignItems: "center", marginTop: 40, marginBottom: 80}}>
        	<Text style ={{fontSize: 17, fontWeight: "bold", color: "black", marginTop: 10}}>Follow us</Text>
        	<View style ={{flexDirection:"row", alignItems: "center", justifyContent: "center", width: 300, gap: 20,borderColor: "#666", borderRadius: 4, paddingBottom: 20, paddingHorizontal: 10, alignItems: "center", }}>
        		<TouchableOpacity style ={{flexDirection: "row", borderWidth: 2 , gap: 15, alignItems: "center", padding: 5, marginTop: 10, borderRadius: 5}}>
        			<Entypo name="twitter" size={18} color="black" />
					<Text style ={{fontSize: 17, fontWeight: "500", color: "black",}}>LearnApse </Text>
				</TouchableOpacity>
				<TouchableOpacity style ={{flexDirection: "row", borderWidth: 2 , gap: 15, alignItems: "center", padding: 5, marginTop: 10, borderRadius: 5}}>
        			<FontAwesome5 name="tiktok" size={17} color="black" />
					<Text style ={{fontSize: 17, fontWeight: "500", color: "black",}}>LearnApse </Text>
				</TouchableOpacity>
        	</View>
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