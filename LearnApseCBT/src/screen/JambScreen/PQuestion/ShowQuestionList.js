
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';


function ShowQuestionList() {
   const [isHeaderShown, setIsHeaderShown] = useState(true);
  return (
    <View style={styles.container}>
    		<HomeHeader/>
			<MainContainer/>
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
                  paddingBottom: insets.bottom + 10,
             }]}
	>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "flex-start", padding:0}}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{marginLeft: -4}} />
      </TouchableHighlight>
      <View style = {{flexDirection: "column"}}>
      	<Text style = {styles.homeHeaderText}>English Language</Text>
      	<Text style = {{fontSize: 13, fontWeight: "700"}}>JAMB: 2004 </Text>
      </View>
    </View>
  );
}


function MainContainer(){
	const insets = useSafeAreaInsets();
	return(
		<View style = {styles.mainContainer}>
			<ScrollView >
				<View style = {{
                  	paddingLeft: insets.left + 10,
                  	paddingRight: insets.right + 10,
                  	paddingTop: insets.top + 60,
                  	paddingBottom: insets.bottom + 100,
                  	
                }}
				>
					<QuestionInterface/>
				</View>
			</ScrollView>
			<TopButtons/>
			<LeftBottomBtn/>
			<RightBottomBtn/>
		</View>
	);
}


function QuestionInterface(){
	return(
		<View style = {{borderWidth: 2, height: 300}}>
			<View style = {{borderWidth:1, height: 80}}>
				<Text>
					Which of the following features are all associated with monocots?Fibrous root system, branched network of veins and one seed leaf
B. Fibrous root system, two seed leaves and floral parts in threes
C. One seed leaf, petals in threes or group of thees and parallel venation of leaves
D. One seed leaf, net-veined leaves and petals in threes or multiple of three
				</Text>
			</View>
			<View style = {{borderWidth:1, height: 220}}>
			</View>
		</View>
	);
}


function TopButtons(){
	const insets = useSafeAreaInsets();
	
	//Toggle for Switch
	const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
    	setIsEnabled(previousState => !previousState);
    };
   
	return(
			<View style={{flexDirection: "row", 
				  justifyContent: "space-between",
                  paddingLeft: insets.left + 10,
                  paddingRight: insets.right + 10,
                  paddingBottom: insets.bottom,
                  width: "100%",
                  position: "absolute",
                  top:0,
                  backgroundColor: "lightgray"
			}}>
				<TouchableHighlight
        			onPress={() => console.log("Page Selector")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style = {styles.topBtnTouchables}
      		  >
      			  <View style = {styles.topBtnTouchablesView}>
      					<Text style ={styles.topBtnText}>Page 1</Text>
      					<FontAwesome name="angle-down" size={28} color="black" />			 
					</View>
      		</TouchableHighlight>
			  <TouchableHighlight
        			onPress={toggleSwitch}
        			activeOpacity={0.5}
        			underlayColor="white"
        			style = {[styles.topBtnTouchables, {paddingTop: 5}]}
      		  >
      			  <View style = {styles.topBtnTouchablesView}>
      					<Text style ={styles.topBtnText}>Show answers</Text>
      					<View style = {{borderWidth:2, height: 20, width: 40, justifyContent: "center", alignItems: "center"}}>
      						<Switch  style={{borderWidth: 2, borderColor: "red"}}
        							trackColor={{ false: "#767577", true: "white" }}
        							thumbColor={isEnabled ? "gray" : "red"}
        							ios_backgroundColor="#3e3e3e"
        							onValueChange={toggleSwitch}
        							value={isEnabled}
      						/>
						</View>		 
					</View>
      		</TouchableHighlight>
			</View>
	);
}


function LeftBottomBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("left") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.bottomBtn, {left: 10}]}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
	);
}


function RightBottomBtn (){
	return(
		<TouchableHighlight
        			onPress={() => console.log("right")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.bottomBtn, {right: 10}]}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
	);
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homeHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderColor: "#999",
    borderBottomWidth:2,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "lightblue",
  },
  
  
  // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 5, 
      borderBottomRightRadius: 5,
      marginLeft: 10,
      backgroundColor: "gray",
  },
  topBtnTouchables: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 5, 
	  borderBottomRightRadius: 5
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  gap: 14
  },
  topBtnText: {
  	fontSize: 17, 
	  fontWeight: "600", 
	  color:"#222"
  },
  
  
  // Bottom Buttons
	bottomBtn: {
		borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 10,
		position: "absolute",
		bottom: 0,
   },
});

export default ShowQuestionList;