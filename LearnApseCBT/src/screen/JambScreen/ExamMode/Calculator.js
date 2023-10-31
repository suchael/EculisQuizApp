import React, { useState, useCallback, useMemo } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import {evaluate, sqrt} from 'mathjs';


// icons 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Calculator ({visible, onClose}){
	const [input, setInput] = useState('');
	const [inputAnswer, setInputAnswer] = useState('');
	const Val = "√589".slice(1)
	//console.log(sqrt(Val))
	
	const handleButtonClick = (value) => {
    	if (value === 'DEL') {
      		setInput((prevInput) => prevInput.slice(0, -1));
      		setInputAnswer("")
    	} else if (value === 'AC') {
      		setInput('');
      		setInputAnswer("")
    	} else if (value === '=') {
      		handleEvaluate();
      		console.log(input.slice(1))
    	} else {
      		setInput((prevInput) => prevInput + value);
    	}
  };

  const handleEvaluate = () => {
    try {
    	let result =evaluate(input);
    	
        setInputAnswer(result.toString());
    } catch (error) {
      setInputAnswer('Error');
    }
  }


	return(
			<Modal
				transparent= {true}
				animationType = "slide"
				visible= {visible}
				onRequestClose={onClose}
			>
				<TouchableWithoutFeedback onPress={onClose}>
        				<View style={{backgroundColor: "rgba(0,0,0,0.6)", flex:1, position: "absolute", left: 0, right: 0, top: 0, bottom: 0}}>
        					<Text style ={{fontSize: 13, fontWeight: "600", textAlign: "center" , color: "lightgray", }}>Powered by: Eculis Code</Text>
						</View>   
      		  </TouchableWithoutFeedback>
				<View style = {{flex:1, justifyContent: "center", alignItems: "center", }}>
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            				<View style ={{ borderRadius: 15, backgroundColor: "white", paddingHorizontal: 0, paddingVertical: 0, height:  "60%", width: 300, }}>
            					
								{/*Screen*/}
								<View style ={{ flex: 1, backgroundColor: "black", padding: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
									{/*Top Screen*/}
									<Text style ={{color: "white" , fontSize: 20, alignSelf: "flex-end"}}>
										{input}
									</Text>
								
									{/*BottomScreen*/}
									<Text style ={{color: "white", fontSize: 17, alignSelf: "flex-end"  }}>
										{inputAnswer}
									</Text>	
									
									
								</View>
								{/*Closing: Screen*/}
								
								{/*Open: Body*/}
								<View style ={{ flexDirection: "row", flex: 4, borderBottomRightRadius: 15, borderBottomLeftRadius: 15}}>
								
									{/* Left */}
									<View style ={{flexDirection: "column", flex: 4, }}>
										<View style ={{flexDirection: "row", flex: 1}}>
											<TouchableOpacity onPress={() => handleButtonClick('DEL')}  style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center" , flex: 2}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>DEL</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('AC')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>AC</Text>
											</TouchableOpacity>
										</View>
										
										<View style ={{flexDirection: "row", flex: 1}}>
											<TouchableOpacity onPress={() => handleButtonClick('7')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>7</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('8')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>8</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('9')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>9</Text>
											</TouchableOpacity>
										</View>
										
										<View style ={{flexDirection: "row", flex: 1}}>
											<TouchableOpacity onPress={() => handleButtonClick('4')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>4</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('5')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>5</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('6')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>6</Text>
											</TouchableOpacity>
										</View>
										
										<View style ={{flexDirection: "row", flex: 1}}>
											<TouchableOpacity onPress={() => handleButtonClick('1')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>1</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('2')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>2</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('3')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>3</Text>
											</TouchableOpacity>
										</View>
										
										<View style ={{flexDirection: "row", flex: 1}}>
											<TouchableOpacity onPress={() => handleButtonClick('.')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1, borderBottomLeftRadius: 15}}>
												<Entypo name="dot-single" size={24} color="black" />
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('0')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>0</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleButtonClick('=')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
												<Text style ={{fontSize: 25, fontWeight: "600"}}>=</Text>
											</TouchableOpacity>
										</View>
									</View>
									{/* Closing: Left */}
									
									
									{/* Right */}
									<View style ={{flex: 1}}>
										<TouchableOpacity onPress={() => handleButtonClick('/')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1  }}>
											<Text style ={{fontSize: 25, fontWeight: "600"}}>÷</Text>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => handleButtonClick('*')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
											<Entypo name="cross" size={24} color="black" />
										</TouchableOpacity>
										<TouchableOpacity onPress={() => handleButtonClick('+')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
											<Text style ={{fontSize: 25, fontWeight: "600"}}>+</Text>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => handleButtonClick('-')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1}}>
											<Entypo name="minus" size={24} color="black" />
										</TouchableOpacity>
										<TouchableOpacity onPress={() => handleButtonClick('√')} style ={{backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", flex: 1, borderBottomRightRadius: 15, }}>
											<Text style ={{fontSize: 25, fontWeight: "600"}}>√</Text>
										</TouchableOpacity>
									</View>
									{/*Closing: Right */}
									
									
								</View>
								{/*Close: Body*/}
								
								
	
							</View>
          		  </View>
				</View>
			</Modal>
	);
}

