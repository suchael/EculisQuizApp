import React from 'react';
import {
  Modal,
  Text,
  View,
} from 'react-native';


// icons 
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function ScoreModal({visible, onClose}){
	const myAnswer = true
	const myFriendAnswer = null // return true or false or null ____  null when user did not pick answer
	
	return(
			<Modal
				transparent= {true}
				animationType = "slide"
				visible= {visible}
				onRequestClose={onClose}
			>
				<View style = {{backgroundColor: "rgba(0,0,0,0.6)", flex:1, justifyContent: "center", alignItems: "center"}}>
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            				<View style ={{ borderRadius: 15, backgroundColor: "white", paddingHorizontal: 4, paddingVertical: 6, height:  "60%", width: "84%", justifyContent: "center", alignItems: "center", }}>
            					
								{/*Display Answer*/}
								<Text style ={{fontSize: 20, fontWeight: "600", textAlign: "center" , marginVertical: 10 }}>Correct Answer: A</Text>
								
								
								{/*User Score*/}
								<View style = {{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, paddingHorizontal: 15 }}>
									{/*Left*/}
									<View style = {{paddingBottom: 4,  borderWidth: 4, borderRadius: 15, borderColor: myAnswer == true? "green": "red", backgroundColor: myAnswer == true? "lightgreen": "pink", alignItems: "center", justifyContent: "center",  gap: 5, height: "85%", width: "35%"}}>
										<Text style = {{fontSize: 22, fontWeight: "600", marginTop: 10}}>You</Text>
										<Text style = {{fontSize: 15, fontWeight: "600", }}>Option: A</Text>
										{
											myAnswer == true? (
												<Ionicons name="ios-checkmark-circle-sharp" size={60} color="green"  />
											):(
												<Entypo name="circle-with-cross" size={60} color="red" />
											)
										}
										
									</View>
						
									{/*Right*/}
									<View style = {{paddingBottom: 6,  borderWidth: 4, borderRadius: 15, borderColor: myFriendAnswer == true? "green": myFriendAnswer == false? "red": myFriendAnswer == null && "black" , backgroundColor: myFriendAnswer == true? "lightgreen": myFriendAnswer == false? "pink": myFriendAnswer == null && "white", alignItems: "center", justifyContent: "center", gap: 5, height: "85%", width: "65%"}}>
										<Text style = {{fontSize: 22, fontWeight: "600", marginTop: 10, textAlign: "center"}} numberOfLines ={1}>Michael419</Text>
										{myFriendAnswer != null && (
											<Text style = {{fontSize: 15, fontWeight: "600", }}>Option: B</Text>
										)}
										
										{myFriendAnswer === true && (
												<Ionicons name="ios-checkmark-circle-sharp" size={60} color="green"  />
										)}
										{myFriendAnswer === false && (
												<Entypo name="circle-with-cross" size={60} color="red" />
										)}
										{myFriendAnswer === null && (
												<Text style = {{fontSize: 15, fontWeight: "600", }}>Still thinking...</Text>
										)}
										
									</View>
								</View>
								
							</View>
          		  </View>
				</View>
			</Modal>
	);
}