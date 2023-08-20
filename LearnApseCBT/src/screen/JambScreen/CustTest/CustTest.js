
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
				<Text>
				Tell me if I should use redux or not and tell me the benefit of either of them

I'm creating an app just like the Myschool cbt app
Okay, this app has news features (students can read an comment on news), this app has teacher section (teachers can search for school jobs and apply), this app has quiz mode, this app has online battle (students can compete in quiz with other people just like multiplayer online game) students can take online exam (a group exam link is created and shared to students, they can sit for the exam from the comfort of their home, the creator o the group link can see all scores, students can see their individual scores) there's exam mode(students take exam and scores re posted online to make them serious), there is past question mode
Note: in any exam mode or past question mode, the questions generated can be done by topic (students can answer questions by topic)Tell me if I should use redux or not and tell me the benefit of either of them

I'm creating an app just like the Myschool cbt app
Okay, this app has news features (students can read an comment on news), this app has teacher section (teachers can search for school jobs and apply), this app has quiz mode, this app has online battle (students can compete in quiz with other people just like multiplayer online game) students can take online exam (a group exam link is created and shared to students, they can sit for the exam from the comfort of their home, the creator o the group link can see all scores, students can see their individual scores) there's exam mode(students take exam and scores re posted online to make them serious), there is past question mode
Note: in any exam mode or past question mode, the questions generated can be done by topic (students can answer questions by topic)Tell me if I should use redux or not and tell me the benefit of either of them

I'm creating an app just like the Myschool cbt app
Okay, this app has news features (students can read an comment on news), this app has teacher section (teachers can search for school jobs and apply), this app has quiz mode, this app has online battle (students can compete in quiz with other people just like multiplayer online game) students can take online exam (a group exam link is created and shared to students, they can sit for the exam from the comfort of their home, the creator o the group link can see all scores, students can see their individual scores) there's exam mode(students take exam and scores re posted online to make them serious), there is past question mode
Note: in any exam mode or past question mode, the questions generated can be done by topic (students can answer questions by topic) ... Success 
				</Text>
				</View>
			</ScrollView>
			<TopButtons/>
			<LeftBottomBtn/>
			<RightBottomBtn/>
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
        			style = {{borderWidth:2, padding: 3, alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}
      		  >
      			  <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 14}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", color:"#222"}}>Page 1</Text>
      					<FontAwesome name="angle-down" size={28} color="black" />			 
					</View>
      		</TouchableHighlight>
			  <TouchableHighlight
        			onPress={toggleSwitch}
        			activeOpacity={0.5}
        			underlayColor="white"
        			style = {{borderWidth:2, padding: 3, paddingTop: 5, alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}
      		  >
      			  <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 14}}>
      					<Text style ={{fontSize: 17, fontWeight: "600", color:"#222"}}>Show answers</Text>
      					<View style = {{borderWidth:2, height: 20, width: 40, justifyContent: "center", alignItems: "center"}}>
      						<Switch  style={{borderWidth: 2, borderColor: "red"}}
        							trackColor={{ false: "#767577", true: "white" }}
        							thumbColor={isEnabled ? "green" : "#f4f3f4"}
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
  topBtnText: {
  	
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
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "lightblue",
  },
  
});

export default ShowQuestionList;