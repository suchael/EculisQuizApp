import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        BackHandler,StatusBar,
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
			<StatusBar hidden={false} />
			<HomeHeader/>
			<Main/>
			<HomeBtn/>
			<ViewExplanationBtn/>
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
      <Text style = {styles.homeHeaderText}>Result Details</Text>
    </View>
  );
}



function Main(){
	const insets = useSafeAreaInsets();
	return(
			<View style ={{flex: 1}}>
				<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80, paddingHorizontal: 8, justifyContent: "center", alignItems: "center",  }}>
					<View style = {{marginTop: 2, backgroundColor: "white", paddingTop: insets.top, }}>
				
							{/*Score and Pict Row Closing*/}
							<View style={{ justifyContent: 'center', alignItems: "center", flex: 1, borderWidth: 2}}>
								<Text style = {{fontSize: 17, fontWeight: "600", marginBottom: 4}}>Your average UTME score</Text>
								<Text style ={{fontSize: 38, }}>
									260/400
								</Text>
							</View>
						{/*Score and Pict Row Closing*/}
						
						<View style = {{justifyContent: "center", alignItems: "center", marginTop: 40}}>
							<Text style = {{fontSize:19, fontWeight: "600", marginBottom: 5}}>Performance Analysis</Text>
						</View>
						
						
						{/*Subject table*/}
						<View style ={{paddingVertical:4, }}>
							{/*Row 1*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Subjects</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2,width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>Score</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>Skipped</Text>
								</View>
							</View>
							
							{/*Row 2*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Math</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>32/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>0</Text>
								</View>
							</View>
							
							{/*Row 3*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Engl</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>22/60</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>3</Text>
								</View>
							</View>
							
							{/*Row 4*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Phys</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>19/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>1</Text>
								</View>
							</View>
							
							{/*Row 5*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Biol</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>27/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500", textAlign: "center"}}>0</Text>
								</View>
							</View>
							
							{/*Row 6 - Show total score under Row*/}
							<View style ={{flexDirection: "row", borderLeftWidth: 2, borderRightWidth: 2}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, borderBottomWidth: 2,  width: "55%", padding: 4, justifyContent: "center"}}>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, borderBottomWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>260/400</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center", borderBottomWidth: 2}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>{/* */}</Text>
								</View>
							</View>
							{/*Subject table closing*/}
							
						</View>
						
	
						{/*Time Analysis*/}
						<View style = {{justifyContent: "center", alignItems: "center", marginTop: 40, marginBottom:4}}>
							<Text style = {{fontSize: 19, fontWeight: "600", marginBottom: 5}}>Time Analysis</Text>
						</View>
			
						<View style ={{flexDirection: "row", }}>
								<View style ={{borderTopWidth:2, borderLeftWidth: 2, borderRightWidth:2 ,width: "60%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Total Exam Time</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "40%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>02:00:00</Text>
								</View>
						</View>
						<View style ={{flexDirection: "row",}}>
								<View style ={{borderBottomWidth: 2, borderLeftWidth:2,  borderRightWidth:2, width: "60%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Total Time Spent</Text>
								</View>
								<View style ={{borderBottomWidth: 2, borderRightWidth: 2, width: "40%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600", textAlign: "center"}}>01:30:20</Text>
								</View>
						</View>
					</View>
				</ScrollView>
			</View>
	);
}


function HomeBtn(){
	const navigation = useNavigation();
	return (
		<TouchableOpacity 
        			onPress={() => navigation.navigate("HomeScreen") }
        			style= {[styles.homeAndExplBtn, {left: 10}]}
      	>
        		<Text style ={styles.homeAndExplText}>Home</Text>
      	</TouchableOpacity>
	);
}


function ViewExplanationBtn(){
	const navigation = useNavigation();
	return(
		<TouchableOpacity 
        			onPress={() => navigation.navigate("ViewAnswers")}
        			style= {[styles.homeAndExplBtn, {right: 10, width:110}]}
      	>
        		<Text style ={styles.homeAndExplText}>View Answer</Text>
      	</TouchableOpacity>  
	);
}




const styles = StyleSheet.create({
	homeContainer:{
    flex:1,
    backgroundColor: "white",
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
  
  homeAndExplBtn: {
		//borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 25,
		position: "absolute",
		bottom: 10,
	},
	homeAndExplText: {
		fontSize: 16,
		fontWeight: "bold"
	},
});