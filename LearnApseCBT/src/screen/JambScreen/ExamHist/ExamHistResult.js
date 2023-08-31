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
										paddingBottom: insets.bottom+ 80}}
			>
				<ScrollView>
					<View style = {{borderWidth:2, minHeight: 450, paddingBottom:  20, marginTop: 20, marginBottom: 140, borderRadius: 25}}>
						{/*LearnApse Row*/}
						<View style = {{borderTopLeftRadius: 25, borderTopRightRadius:25, paddingHorizontal: 6, paddingTop: 14, flexDirection: "row", alignItems: "center"}}>
								<View style = {{marginRight: 40, borderWidth:2, height: 60, width: 60, alignItems: "center", justifyContent:"center"}}>
									<Text>LA Logo</Text>
								</View>
								<Text style ={{fontWeight: "bold", fontSize:  30}}>LearnApse</Text>
						</View>
						{/*Score and Pict Row*/}
						<View style={{flexDirection: "row",}}>
							{/*Left*/}
							<View style={{paddingVertical:10, paddingHorizontal: 6, maxWidth:"40%"}}>
								<View style ={{borderWidth:2, width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent:"center"}}>
									<Text>Pic</Text>
								</View>
								<Text style ={{fontSize:16, fontWeight: "500"}}>Ahmed{"\n"}Success</Text>
							</View>
							{/*Left Closing*/}
							
							{/*Right */}
							<View style={{padding:10, width: "100%"}}>
								<Text style = {{fontSize: 17, fontWeight: "600", marginBottom: 4}}>Your average UTME score</Text>
								<Text style ={{fontSize: 35}}>
									260/400
								</Text>
							</View>
							{/*Right  closing*/}
						</View>
						{/*Score and Pict Row Closing*/}
						
						<View style = {{justifyContent: "center", alignItems: "center", marginTop: 8}}>
							<Text style = {{fontSize:17, fontWeight: "600"}}>Performance Analysis</Text>
						</View>
						
						
						{/*Subject table*/}
						<View style ={{paddingVertical:4,}}>
							{/*Row 1*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2,width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Subjects</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2,width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Score</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Grade</Text>
								</View>
							</View>
							
							{/*Row 2*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Math</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>32/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>A</Text>
								</View>
							</View>
							
							{/*Row 3*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Engl</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>22/60</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>C</Text>
								</View>
							</View>
							
							{/*Row 4*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Phys</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>32/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>A</Text>
								</View>
							</View>
							
							{/*Row 5*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, borderBottomWidth: 2,width: "55%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>Biol</Text>
								</View>
								<View style ={{borderTopWidth:2, borderRightWidth: 2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>13/40</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>D</Text>
								</View>
							</View>
							
							{/*Row 6 - Show total score under Row*/}
							<View style ={{flexDirection: "row"}}>
								<View style ={{width: "54.4%", padding: 4, justifyContent: "center"}}>
								</View>
								<View style ={{borderWidth:2, width: "23.2%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>260/400</Text>
								</View>
								<View style ={{borderBottomWidth:2, borderTopWidth:2, width: "22.5%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>C</Text>
								</View>
							</View>
						</View>
						{/*Subject table closing*/}
						
						<View style = {{justifyContent: "center", alignItems: "center", marginTop: 8, marginBottom:4}}>
							<Text style = {{fontSize:17, fontWeight: "600"}}>Time Analysis</Text>
						</View>
						
						{/*Time Analysis*/}
						<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderRightWidth:2 ,width: "60%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Total Exam Time</Text>
								</View>
								<View style ={{borderTopWidth:2, width: "40%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>02:00:00</Text>
								</View>
						</View>
						<View style ={{flexDirection: "row"}}>
								<View style ={{borderTopWidth:2, borderBottomWidth: 2, borderRightWidth:2, width: "60%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "600"}}>Total Time Spent</Text>
								</View>
								<View style ={{borderTopWidth:2, borderBottomWidth: 2, width: "40%", padding: 4, justifyContent: "center"}}>
									<Text style = {{fontSize:16, fontWeight: "500"}}>01:30:20</Text>
								</View>
						</View>
					</View>
				</ScrollView>
			</View>
	);
}


function HomeBtn(){
	return (
		<TouchableOpacity 
        			onPress={() => console.log("Prev Btn") }
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
        		<Text style ={styles.homeAndExplText}>Explanation</Text>
      	</TouchableOpacity>  
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
  
  homeAndExplBtn: {
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
	homeAndExplText: {
		fontSize: 16,
		fontWeight: "bold"
	},
});