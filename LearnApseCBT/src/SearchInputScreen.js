
import {View, 
        Text, 
        StyleSheet,
        Switch,
        ScrollView,
        TouchableOpacity,
        KeyboardAvoidingView,
        TouchableWithoutFeedback,
        TextInput,
        TouchableHighlight } from 'react-native';
        
import React , {useState} from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome, Ionicons, MaterialIcons, Feather} from '@expo/vector-icons';

// My import
import SearchInputPageSelectorModal from "./SearchInputPageSelectorModal.js";
import SearchInputSubjectSelectorModal from "./SearchInputSubjectSelectorModal.js";


export default function ShowQuestionList() {
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
                      paddingBottom: insets.bottom + 6,
                      
                  
                  }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack() }
        activeOpacity={0.9}
        underlayColor="lightgray"
        style = {{width: 60, height: 40, justifyContent: "center"}}
      >
       	 <AntDesign name="arrowleft" size={27} color="#333"  style={{marginLeft: -4}}/>
      </TouchableHighlight>
      <Text style = {{fontSize: 18, fontWeight: "600"}}>Search Question </Text>
      
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
                  	paddingTop: insets.top + 10,
                  	paddingBottom: insets.bottom + 100,             	
                }}
				>
					
					<QuestionInterface/>
				</View>
			</ScrollView>
			<BottomBtn/>
		</View>
	);
}



function QuestionInterface() {
	const [isBottomBtnVisible, setIsBottomBtnVisible] = useState(true); // This Trico ensures the btoombtn does not stay ontop keyboard 

  return (
    <View style={styles.questionInterfaceMain}>
      
      <SearchInputSubjectSelectorModal/>
      
      <SearchInputScreen/>
      <QuestionInterfaceContainer ind = "1"/>
      <QuestionInterfaceContainer ind = "1"/>
      <QuestionInterfaceContainer ind = "1"/>
    </View>
  );
}


function QuestionInterfaceContainer({ind}){
	const navigation = useNavigation()
	return(
		<View style = {styles.questionInterfaceContainer}>
			<View style = {styles.questionScreen}>
				<View style = {styles.questionScreenNumberView}>
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center", padding: 3}}>
						<Feather name="bookmark" size={24} color="black" />
					</TouchableOpacity>
					<Text style = {styles.questionScreenNumber}>
						Question {ind}
					</Text>
					<TouchableOpacity style = {{justifyContent: "center", alignItems: "center",  padding: 3}}>
						<MaterialIcons name="content-copy" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<View style ={{marginTop: 8, marginBottom: 3, justifyContent: "center", alignItems: "center"}}>
					<Text style ={{fontSize: 15, fontWeight: "600"}}>WAEC: 2005</Text>
				</View>
				<Text style = {styles.questionScreenQuestionContent}>
					Which of the following statements does not show Rutherford's account of Nuclear Theory? An atom contains a region
				</Text>
			</View>
			<View style = {styles.optionMain}>
				<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						A{". "}
						<Text style = {styles.optionContainerOptions}>
              				which contains protons and neutrons 				
						</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						B{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is positively charged
         				</Text>
					</Text>			
         	   </View>
				<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						C{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is massive and can cause deflection of a few projectiles
         				</Text>
					</Text>			
         	   </View>
         	<View style= {styles.optionContainer}>
					<Text style = {{fontSize: 17, fontWeight: "bold"}}>
						D{". "}
						<Text style = {styles.optionContainerOptions}>
              				which is very large and in which close to 98% of projectiles pass undeflected
         				</Text>
					</Text>			
         	   </View>
			</View>
			<View style = {styles.screenContBottomBtn}>
				  	<TouchableHighlight 
		 					onPress={()=>{navigation.navigate("Analysis")}} 		
	     					underlayColor="lightgray"
			 				activeOpacity={0.9}
							style ={{height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>   
								Analysis      
              			</Text>
          			</TouchableHighlight>              
            		  <TouchableHighlight 
		 				onPress={()=>{navigation.navigate("Explanation")}} 		
	     				underlayColor="lightgray"
			 			activeOpacity={0.9}
						style ={{height: 35, justifyContent: "center", alignItems: "center", borderRadius: 5}}
	      			>
              			<Text style= {styles.screenBottomBtnText}>
              					Explanation 
              			</Text>
          			</TouchableHighlight>              
			</View>
		</View>
	);
}


function SearchInputScreen() {
  const [textInputValue, setTextInputValue] = useState(""); 
  const handleSendButtonPress = () => {
    console.log("User Typed Message:", textInputValue); // Log the user-typed message to the console
  };
  
  return (
  <View style = {{marginBottom: 30, marginTop: 5}}>
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a keyword or sentence"
          autoFocus={false}
          multiline
          scrollEnabled
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
        <TouchableHighlight 
          style={styles.sendButton}
          onPress={handleSendButtonPress} // Call the function to log user-typed message
          activeOpacity={0.9}
          underlayColor="#777" 
        >
          <Ionicons name="send" size={24} color="black" />
        </TouchableHighlight>
      </View>
      {/* You can add other UI elements below the input field */}
    </KeyboardAvoidingView>
  </View>
  );
}

function BottomBtn(){
	return (
		<View style = {{ position: "absolute", bottom: 0, left: 15, right: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4}}>
			<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
      	<SearchInputPageSelectorModal/>
      	<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      	</TouchableHighlight>  
		</View>
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
  	backgroundColor: "lightgray",
  },
  
  
  // Top Button... This is for Top "Page Selector" and "Show Questions" btn
  topBtn: {
  	borderWidth:2, 
	  padding: 3, 
	  alignItems: "center", 
	  borderBottomLeftRadius: 8, 
      borderBottomRightRadius: 8,
      marginLeft: 10,
      backgroundColor: "gray",
  },
  topBtnTouchables: {
  	backgroundColor: "#999",
	  padding: 3, 
	  alignItems: "center", 
  },
  topBtnTouchablesView: {
  	flexDirection: "row", 
	  justifyContent: "space-between", 
	  alignItems: "center", 
	  gap: 14, 
	  paddingHorizontal: 6,
  },
  topBtnText: {
  	fontSize: 17, 
	  fontWeight: "600", 
	  color:"#222"
  },
  
  // Question Interface
  questionInterfaceMain: {
  	//borderWidth : 2, 
	  marginBottom: 20,
	  //marginTop: 20
   },
   questionInterfaceContainer: {
   	backgroundColor: "white",
   	borderWidth: 2, 
	   padding:4, 
	   borderColor: "#999", 
	   borderRadius: 15, 
	   marginBottom: 35
	},
	questionScreen: {
		borderWidth:2, 
		borderColor: "#999", 
	    padding: 8, 
		flexDirection: "column", 
		borderRadius: 15,  
		backgroundColor: "white", 
		marginBottom: 6
	},
	questionScreenNumberView: {
		marginTop: -2, 
		justifyContent: "space-between", 
		alignItems: "center",
		flexDirection: "row",
	},
	questionScreenNumber: {
		fontSize: 15, 
		fontWeight: "bold", 
		borderWidth: 2, 
		paddingLeft: 6, 
		paddingRight: 2, 
		paddingTop: 1, 
		borderRadius: 5
	},
   questionScreenQuestionContent: {
   	fontSize: 16.7, 
	   fontWeight: "500", 
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		paddingHorizontal: 8 ,
		paddingVertical: 4,
		borderWidth: 2, 
		borderColor: "#777", 
		borderRadius: 7, 
		marginTop: 3, 
		backgroundColor: "white" 
	},
	optionContainerOptions: {
		fontSize: 16.7, 
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
  screenContBottomBtn: {
  	  borderWidth:2, 
  	  borderColor: "#777", 
		marginTop: 25, 
		marginBottom:5,
		paddingHorizontal:10, 
		flexDirection: "row", 
		justifyContent: "space-between", 
		borderRadius: 4,
		backgroundColor: "lightgray"
	},
	screenBottomBtnText: {
		textDecorationLine: "underline", 
		fontSize: 17, 
		fontWeight: "bold", 
		paddingVertical: 2
	},
	
  //Keyboard
	keyboardContainer: {
    flex: 1,
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -4, // Add margin at the bottom to separate from other content
  },
  input: {
    maxHeight: 175,
    width: "85%",
    borderWidth: 2,
    borderRadius: 25,
    padding: 8,
    paddingLeft: 16,
    fontSize: 16,
    marginRight: 6,
    backgroundColor: "white",
  },
  sendButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  
  // Bottom Buttons
	nextAndPrevBtn: {
		//borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 10,
   },
});

