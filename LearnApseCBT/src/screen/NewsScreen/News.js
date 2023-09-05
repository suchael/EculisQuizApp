import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useNavigation } from '@react-navigation/native';

import { TransitionSpecs } from '@react-navigation/stack';


//icons
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//My imports
import NewsContent from "./NewsContent.js";

const NewsScreenStack = createNativeStackNavigator();

export default function NewsScreen(){
  return(
    <NewsScreenStack.Navigator initialRouteName="NewsHome" 
      screenOptions={{animation: "none",}}
    >
      <NewsScreenStack.Screen name="NewsHome" component={NewsHome} options={{headerShown: false}}/>
      <NewsScreenStack.Screen name="NewsContent" component={NewsContent} options={{headerShown: false}}/>
    </NewsScreenStack.Navigator>
  );
}


function NewsHome() {
	const navigation= useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
    	<View style = {{backgroundColor: "#6EAAF5"}}>
        	<ScrollView>
        		<View
          			style={[styles.container,
            					 {
              					paddingLeft: insets.left + 10,
              					paddingRight: insets.right + 10,
              					paddingTop: insets.top + 12,
              					paddingBottom: insets.bottom,
              height: "100%",
              flex:1
            					}]}
        			>
        			<View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5}}>
        				<EvilIcons name="bell" size={26} color="black" />
        				<Text style={{fontSize: 18, fontWeight: "500"}}>Latest Education News </Text>
        			</View>
        
        			{/*SearchBox*/}
        			<View style = {{borderWidth:2, marginTop:10, height: 40, marginBottom: 35}}>
        			</View>
        			{/*SearchBox closing*/}
        
        			{/*News*/}
        			<News/>
        			<News/>
        			<News/>
        			<News/>
        			<News/>
        			<News/>
        			<News/>
        			<News/>    
        			<News/>    
        			<News/>    

					<TouchableOpacity style = {{padding: 10, marginTop: 120, borderRadius: 15, backgroundColor: "gray", justifyContent: "center", alignItems: "center"}}>
        				<Text style={{fontSize: 17, fontWeight: "bold"}}>More News</Text>
        			</TouchableOpacity> 
        		</View>
     		</ScrollView>
    	</View>
    </SafeAreaProvider>
  );
}


function News(){
	const navigation= useNavigation();
    const screenWidth = Dimensions.get('window').width;
    return(
        <TouchableOpacity onPress ={()=>navigation.goBack()} style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 60, height: 50, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ width: screenWidth * 0.67, marginLeft: 10,  }}>
                    <Text style={{ fontSize: 17, fontWeight: "600" ,marginTop: -4,}}>
                        School of nursing Entrance Result is out Now!! check it from
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                        23 mins ago
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  
});


