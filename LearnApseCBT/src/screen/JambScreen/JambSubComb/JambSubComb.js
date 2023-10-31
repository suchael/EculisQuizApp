import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//<
//<FontAwesome name="angle-up" size={24} color="black" />

export default function JambSubComb() {
  return (
    <View>
     	<HomeHeader/>
     	<Main/>
    </View>
  )
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
      <Text style = {styles.homeHeaderText}>JAMB{"  "}Subject{" "}Combination</Text>
    </View>
  );
}


function Main(){
	const insets = useSafeAreaInsets();
	return(
		<ScrollView>
			<View style = {{
											paddingLeft: insets.left + 10,
                      					  paddingRight: insets.right + 10,
                      					  paddingTop: insets.top + 12,
                      					  paddingBottom: insets.bottom + 140,
									}}
			>
				<View style ={{borderWidth: 2, borderColor: "#888", borderRadius: 5, backgroundColor: "lightgray", paddingHorizontal: 8, paddingVertical: 12, marginVertical: 20}}>
					<Text style = {{fontSize: 17, fontWeight:"500", }}>
						Here is a list of compiled JAMB subject for your department
					</Text>
				</View>
				<Department course = "Engineering"/>
				<Department course = "Law"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
				<Department course = "Medicine"/>
			</View>
		</ScrollView>
	);
}

function Department ({course}){
	const [icon, setIcon] = useState(false);
	const detectPress = ()=>{setIcon( !icon )};
	return (
		<View style ={{paddingVertical: 2, marginBottom: 20}}>
			<Text style ={{fontSize: 18, fontWeight: "bold"}}>
				{course}
			</Text>
			<View style={{marginLeft:17}}>
				<TouchableOpacity onPress={detectPress}style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
					<>
						<Text style ={{fontSize: 17, fontWeight: "500"}}>1. Mechanical Engineering</Text>
						{
							icon? <FontAwesome name="angle-up" size={24} color="black" /> : <FontAwesome name="angle-down" size={24} color="black" />
						}
					</>
				</TouchableOpacity>
				<View style={{marginLeft: 34}}>
					{
						icon && <Subject/>
					}
				</View>
			</View>
		</View>
	);
}

function Subject (){
	return (
		<>
			<Text style ={{fontSize: 15.5, fontWeight: "500"}}>Mathematics</Text>
			<Text style ={{fontSize: 15.5, fontWeight: "500"}}>English Language</Text>
			<Text style ={{fontSize: 15.5, fontWeight: "500"}}>Chemistry</Text>
			<Text style ={{fontSize: 15.5, fontWeight: "500"}}>Physics</Text>
		</>
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






