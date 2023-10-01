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
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// My import

export default function NationalRank() {
  return (
    <View>
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
      <Text style={styles.homeHeaderText}>Hall{" "}of{" "}Fame</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  console.log(screenHeight);
  return (
    <ScrollView>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 170,
          flex: 1,
        }}
      >
        <View style = {{borderWidth: 2, borderColor: "#888", paddingHorizontal: 4, paddingVertical: 8, backgroundColor: "lightgray", borderRadius: 4, marginVertical: 20}}>
					<Text style = {{fontSize: 17, fontWeight:"500", color: "#555",}}>
						Today's National Exam score
					</Text>
		</View>
		
        {/*First, Second - Third position board*/}
        <View style = {{borderWidth: 2, height: screenHeight*0.577, marginBottom: 15}}>
        	<Text>First, Second, third</Text>
        </View>
        
        {/*Other Score Container*/}
        <About name = "You"/>
        <About name = "Peter Ashiwobe Michael Peter John Thomas"/>
        <About name = "Michael Ifunanya"/>
        <About name = "Peter Ashiwobe"/>
      </View>
    </ScrollView>
  );
}


function About({name}){
	return(
		<View style = {{borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: "#999", flexDirection: "row",  justifyContent: "space-between", flex: 1, paddingVertical: 5, marginHorizontal: -10, paddingHorizontal: 10, marginBottom: 10, gap: 10}}>
        		{/*Left - Pic and score*/}
        		<View style ={{flexDirection: "row", gap: 10, flex: 1}}>
        			<View style ={{borderWidth: 2,  width: 40, height: 40, borderRadius: 20}}>
        			</View>
        			<View style ={{justifyContent: "center", flex: 1}}>
        				<Text style = {{fontSize: 18, fontWeight: "500",}} numberOfLines ={1} >{name}</Text>
        				<Text style = {{fontSize: 17, fontWeight: "500"}}>Score: 270/400</Text>
        				<Text style = {{fontSize: 15, fontWeight: "600"}}>Location: Lagos</Text>
        			</View>
        		</View>
        		
        		{/*Right - student position*/}
        		<View style ={{borderWidth: 2, borderRadius: 5,width: 50, height: 35, alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
        				<Text style = {{fontSize: 16, fontWeight: "600"}}>25th</Text>
        		</View>
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
