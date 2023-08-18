import React, {useState} from "react";
import {Text,
				View,
				TouchableHighlight,
				StyleSheet,
				Switch,
				} from "react-native";
				
import {Dimensions} from 'react-native';
import { Fontisto } from '@expo/vector-icons';


function QuestButton({subject}){
	// Switch and TouchableHighlight state
	const [isToggleOn, setIsToggleOn] = useState(false);
	const handleToggle = ()=> setIsToggleOn(!isToggleOn);

	return(
		<View>
			<View style = {styles.container}>
		  	<View style = {styles.containerCircle}>
             	<Text style = {styles.containerCircleText}>{subject.name[0]}</Text>
          	</View>
		  	<TouchableHighlight 
		 		onPress={handleToggle} 		
	     		underlayColor="lightgray"
			 	activeOpacity={0.9}
			 	style = {styles.buttonContainer}
	      	>
              	<View style = {styles.buttonContainerRect}>
              		<Text style = {styles.buttonRectText}>{subject.name}</Text>
              		<View style = {styles.switchContainer}>
              			<Switch
        					trackColor={{false: '#767577', true: 'white'}}
        					thumbColor={isToggleOn ? 'orange' : '#f4f3f4'}
        					ios_backgroundColor="#3e3e3e"
        					onValueChange={handleToggle}
        					value={isToggleOn}
      					/>
              		</View>
              	</View>
          	</TouchableHighlight>                     
			</View>
			{isToggleOn && (
				<View style = {styles.attachedToButton}>
					<View style = {styles.attachedToButtonLeft}>
						<TouchableHighlight 
		 					onPress={()=> console.log("Study")}  					
	     					underlayColor="lightgray"
	  				 >
							<View style = {{flexDirection: "row", justifyContent: "space-betweemln", alignItems: "center" ,padding: 4, borderWidth: 1, gap: 50}}>
         						<Text style = {{fontWeight: "700", fontSize: 18}}>Year</Text>
         						<Fontisto name="angle-down" size={16} color="black" />
         				  </View>
      				 </TouchableHighlight>
					   <Text style = {{fontWeight: "500", fontSize: 15}}>2021</Text>
					</View>
					<View style = {styles.attachedToButtonRight}>
						<Text style = {{fontWeight: "700", fontSize: 18}}>Total</Text>
						<Text style = {{fontWeight: "500", fontSize: 15}}>80</Text>
					</View>
				</View>
			)}
		</View>
	);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles= StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 0,
		marginTop: 10,
	},
	buttonContainer:{
		flex:1,
		borderWidth: 2,
		backgroundColor: "#C0C0C0",
		flexDirection: "row",
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
	},
	containerCircle:{
		borderWidth: 2,
		backgroundColor: "#C0C0C0",
		height: 44,
		width:  38,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	containerCircleText:{
		fontSize: 21,
	},
	buttonContainerRect:{
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 30,
	},
	buttonRectText:{
		fontSize: 18,
	},
	
	// Switch Container 
	switchContainer:{
		borderWidth: 2,
		width:  70,
		height: 44,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		left: 2
	},
	
	
	// Attached View to Button on clicked
	attachedToButton:{
		borderWidth: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		height: 90,
		marginLeft: windowWidth * 0.1055,
		marginRight: windowWidth * 0.0472,
		flexDirection: "row",
		paddingBottom: 4,
		paddingLeft: 4,
		paddingRight: 4,
	},
	attachedToButtonLeft: {
		flex:1,
		borderRightWidth:2,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 8,
	},
	attachedToButtonRight: {
		flex: 1,
		borderRightWidth:2,
		borderBottomWidth: 2,
		padding: 6,
		gap: 4,
		justifyContent: "center",
		alignItems: "center",
		borderBottomRightRadius: 8,
	},
});




export default QuestButton;