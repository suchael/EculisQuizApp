import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React from 'react';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


export default function Result(){
	return(
		<View style={styles.homeContainer}>
			<HomeHeader/>
			<Main/>
		</View>
	);
}

function HomeHeader(){
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return(
    <View style = {[styles.homeHeader, 
                    {
                      paddingLeft: insets.left + 10,
                      paddingRight: insets.right + 10,
                      paddingTop: insets.top + 12,
                      paddingBottom: insets.bottom + 4,
                      borderBottomWidth: 2,
                      borderBottomColor: "gray",
                  
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "center"}}
      >
        <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {styles.homeHeaderText}>Result</Text>
    </View>
  );
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
			<View style = {{ 
										paddingTop: insets.top ,
										paddingLeft: insets.left + 10, 
										paddingRight: insets.right + 10, 
										paddingBottom: insets.bottom+ 20}}
			>
				<ScrollView>
					<View style = {{borderWidth:2, minHeight: 200, borderRadius: 20, paddingBottom:  120, paddingHorizontal: 10, paddingTop: 20}}>
						<View style = {{borderWidth:2,}}>
								
						</View>
					</View>
				</ScrollView>
				
			</View>
	);
}



const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderIcon: {
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});




