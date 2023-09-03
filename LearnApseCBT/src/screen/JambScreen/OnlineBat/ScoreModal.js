import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
  Dimensions,
} from 'react-native';


// icons 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ScoreModal({visible, onClose}){
	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;
	
	
	return(
			<Modal
				transparent= {true}
				animationType = "slide"
				visible= {visible}
				onRequestClose={onClose}
			>
				<View style = {{backgroundColor: "rgba(0,0,0,0.6)", flex:1, justifyContent: "center", alignItems: "center"}}>
					<TouchableOpacity
            			style={{ flex: 1, width: '100%' , justifyContent: "center", alignItems: "center"}}
            			onPress={onClose}>
            				<View style ={{borderRadius: 15, backgroundColor: "white", padding: 2, minHeight:  windowHeight * 0.4034, minWidth: windowHeight * 0.4034, justifyContent: "space-between", alignItems: "center", }}>
            					<ScrollView>
								{/*Display Answer*/}
								<View style ={{marginVertical: 5, justifyContent: "center", alignItems: "center"}}>
									<Text style ={{fontSize: 20, fontWeight: "600", }}>Correct Answer: A</Text>
								</View>
								
								{/*User Score*/}
								<View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 15}}>
									{/*Left*/}
									<View style = {{borderWidth: 2, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: "center", justifyContent: "space-between",  minHeight: windowHeight *0.3170, minWidth: windowWidth * 0.2778}}>
										<Text style = {{fontSize: 22, fontWeight: "600", marginTop: 10}}>You</Text>
										<Ionicons name="ios-checkmark-circle-sharp" size={60} color="green"  style ={{position: "absolute", bottom: 25}}/>
									</View>
						
									{/*Right*/}
									<View style = {{ borderWidth: 2, borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: "center", justifyContent: "space-between",  minHeight: windowHeight *0.3170, minWidth: windowWidth * 0.4167, paddingHorizontal: 4}}>
										<Text style = {{fontSize: 22, fontWeight: "600", marginTop: 10}}>Michael419</Text>
										<Entypo name="circle-with-cross" size={60} color="red" style ={{position: "absolute", bottom: 25, left: 40, right: 40}}/>
									</View>
								</View>
								</ScrollView>
							</View>
          		  </TouchableOpacity>
				</View>
			</Modal>
	);
}
