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

export default function Book() {
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
      <Text style={styles.homeHeaderText}>Panic of growing old</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 170,
        }}
      >
        {/*Picture and author*/}
        <View style={{ flexDirection: 'row', gap: 15, marginTop: 20 }}>
          <View
            style={{
              borderWidth: 2,
              width: 160,
              height: 190,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>Panic Of Growing Old</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'flex-end' }}>
            <View
              style={{ alignItems: 'center', flexDirection: 'row', gap: 5, marginBottom: -4 }}
            >
              <Text style={{ fontSize: 16, fontWeight: '500' }}>By:</Text>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Niyi{'\n'}Osumdare</Text>
            </View>
          </View>
        </View>

        {/*Divider*/}
        <View style={{ borderWidth: 2, borderRadius: 35, paddingHorizontal: 10, paddingVertical: 35, marginHorizontal: -10, marginVertical: 55,}}>
        	<BookBtns text="Plot Summary" />
        	<BookBtns text="Chapter 1" />
        	<BookBtns text="Chapter 2" />
        	<BookBtns text="Chapter 3" />
        	<BookBtns text="Chapter 4" />
        	<BookBtns text="Chapter 5" />
        	<BookBtns text="Chapter 6" />
        	<BookBtns text="Chapter 7" />
        	{/* ... Other chapter buttons */}
		</View>
        
      </View>
    </ScrollView>
  );
}



function BookBtns({ text }) {
  const navigation= useNavigation ();
  return (
    <TouchableOpacity
      style={styles.bookButton}
      onPress = {()=>navigation.navigate("BookChapter")}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
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
