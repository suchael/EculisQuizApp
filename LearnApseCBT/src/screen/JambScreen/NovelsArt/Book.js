import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

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
          paddingRight: insets.right + 15,
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
      <Text style={[styles.homeHeaderText, {flex: 1,}]} numberOfLines ={1}>Panic of growing older than what could</Text>
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
          paddingBottom: insets.bottom + 150,
          //marginHorizontal: 10,
          
        }}
      >
        {/*Picture and author*/}
        <JAMB_ProseCarousel/>
        
        <View style={{ backgroundColor: "lightgray", borderWidth: 2, borderRadius: 35, paddingHorizontal: 10, paddingVertical: 35, marginVertical: 55,}}>
        	<View style ={{borderWidth:2, padding: 4, justifyContent: "center", alignItems: "center", borderRadius: 15, position: "absolute",  top: -18, left: 10, right: 0, backgroundColor: "white", width: "40%"}}>
        		<Text style ={{fontSize: 18, fontWeight: "600"}}>Content</Text>
        	</View>
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

function JAMB_ProseCarousel(){
	const insets = useSafeAreaInsets();
	return(
	<View style = {{ paddingTop: insets.top + 12,paddingBottom: insets.bottom + 15, }}>
			<View style = {{justifyContent: "center", alignItems: "center", paddingVertical: 4}}>
				<View style = {{borderWidth: 2, justifyContent: "center", alignItems: "center", width: 160, height: 160 , borderRadius: 5}}>
					<Text >Panic of Growing old</Text>
				</View>
				<Text style ={{fontSize: 18, fontWeight: "600", marginTop: 20}} numberOfLines={1}>
					By:{"  "}
					<Text style ={{fontWeight: "500", fontSize: 16}}>NiyiOsumdareOsumdare{"  "}OsumdareOsumdare</Text>
				</Text>
		</View>
	</View>
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
    gap: 5,
    alignItems: 'center',
  },
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
