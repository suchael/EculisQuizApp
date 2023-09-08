import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions ,
  ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
//icon
import { FontAwesome, AntDesign } from '@expo/vector-icons';


export default function CommentSection(){
	return(
		<View style ={{flex: 1}}>
			<HomeHeader/>
			<CommentMain/>
			<SearchInputScreen/>
		</View>
	);
}


function CommentMain(){
	return(
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style ={{paddingTop: 20, paddingBottom: 100, paddingHorizontal: 10}}>
				<CommentView/>
			</View>
		</ScrollView>
	);
}

function CommentView(){
	return(
		<View style ={{borderWidth: 2, paddingHorizontal: 10, paddingVertical: 15, marginTop: 15, borderRadius: 15}}>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			<StudentView/>
			
			{/*More btn*/}
			<TouchableOpacity style={{borderWidth: 2, paddingVertical: 6, marginTop: 50, justifyContent: 'center',alignItems: 'center', borderRadius: 25, backgroundColor: "white"}}>
				<Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
              		More
            	</Text>
			</TouchableOpacity>
		</View>
	);
}


function StudentView(){
	const navigation= useNavigation();
    const screenWidth = Dimensions.get('window').width;
    return(
        <View style={{ backgroundColor: "#999", padding: 12, borderRadius: 10, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "space-between" , }}>
            	{/*Picture*/}
                <View style={{ borderWidth: 2, width: 40, height: 40, borderRadius: 10 }} />
                {/*Closing ofPicture*/}
                
                <View style={{ flex: 1, marginLeft: 10,  marginBottom: 5}}>
                	<Text style={{ fontSize: 18, fontWeight: "600" , marginTop: -4,}}>
                        Nicholas Mayowa 
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginTop: 0}}>
                        23 mins ago
                    </Text>
                </View>
            </View>
            
            {/*Student Answer goes here*/}
            <View>
            	<Text style ={{fontSize: 16, fontWeight: "500"}}>
            		Tell me if I should use redux or not and tell me the benefit of either of them

I'm creating an app just like the Myschool cbt app
Okay, this app has news features (students can read an comment on news), this app has teacher section (teachers can search for school jobs and apply), this app has quiz mode, this app has online battle (students can compete in quiz with other people just like multiplayer online game) students can take online exam (a group exam link is created and shared to students, they can sit for the exam from the comfort of their home, the creator o the group link can see all scores, students can see their individual scores) there's exam mode(students take exam and scores re posted online to make them serious), there is past question mode
Note: in any exam mode or past question mode, the questions generated can be done by topic (students can answer questions by topic)
            	</Text>
            </View>
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
      <Text style = {styles.homeHeaderText}>Comment{"  "}Section</Text>
    </View>
  );
}



function SearchInputScreen() {
  const [textInputValue, setTextInputValue] = useState(""); 
  const handleSendButtonPress = () => {
    console.log("User Typed Message:", textInputValue); // Log the user-typed message to the console
  };
  
  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: "white"}]}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={0}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post your answer"
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
          underlayColor="lightgray" 
        >
          <Text style={styles.sendButtonText}><FontAwesome name="send-o" size={24} color="white" /></Text>
        </TouchableHighlight>
      </View>
      {/* You can add other UI elements below the input field */}
    </KeyboardAvoidingView>
  );
}


const screenWidth = Dimensions.get('window').width;
const GAP = 0.7905// This is the best gap between the input box anf the send button
const inputGap = screenWidth * GAP;


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
  container: {
    flex: 1,
    justifyContent: "flex-end", // Align input at the bottom
    padding: 6,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
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
  },
  sendButton: {
    backgroundColor: "orange",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginLeft: 4,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});


