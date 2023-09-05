import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons

import { FontAwesome, Feather, AntDesign, Entypo } from '@expo/vector-icons';

// My import


export default function JobsAndTeacherNearby() {
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
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log('Searching for:', searchText);
  };

  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 8,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
          flexDirection: 'row', // Display items in a row
          alignItems: 'center', // Vertically align items in the center
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

      {/* search bar */}
<View style={{ flexDirection: 'row', alignItems: 'center',  }}>

  <TouchableHighlight
    onPress={handleSearch}
    activeOpacity={0.9}
    underlayColor="lightgray"
    style={{width: 250, height: 36,backgroundColor: 'lightgray', borderRadius: 10, }}
  >
  	<View style ={{flexDirection: "row", }}>
  		  <TextInput
    			style={{ width: "100%", height: 36, justifyContent: "center", alignItems: "center" ,paddingHorizontal: 5, paddingLeft: 10 }}
    			placeholder="Search by title e.g Maths"
    			value={searchText}
    			onChangeText={(text) => setSearchText(text)}
  		/>
  	</View>
  </TouchableHighlight>
</View>

    </View>
  );
}



function Main() {
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
    	{/*Location Icon*/}
		<View style = {{justifyContent: "center", alignItems: "center", width: "100%", marginTop: 20}}>
			<View style ={{borderWidth: 2, width: 80, height: 80, borderRadius: 40, justifyContent: "center", alignItems: "center"}}>
				<Entypo name="location" size={35} color="black" />
			</View>
		</View>
		{/*Closing - Location Icon*/}
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
  
});
