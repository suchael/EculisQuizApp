import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity,
        BackHandler,
        TouchableHighlight } from 'react-native';
        
import React , {useState, 
							  useEffect,
							  useMemo, 
							  useCallback, 
							  useContext, 
							  useRef} from 'react';

import { deactivateKeepAwake } from 'expo-keep-awake';

import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign , FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// My imports
import {ShowQuestionContext} from "./ShowQuestionContext/Context.js";
import QuitExamNotif from "./QuitExamNotif.js";


const NavBottomBtn= React.memo(()=>{
  const navigation = useNavigation ();
  
  const { handlePrevPage, 
				  handleNextPage, 
			  	totalPages,
				  currentPage } = useContext(ShowQuestionContext);
			
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleBackPress = () => {
    if (!modalVisible) {
      setModalVisible(true); // Open the modal
      return true; // Prevent default back behavior
    }
    return false; // Allow default back behavior
  };

  

	const openModal = () => {
    	setModalVisible(true);
     };

  const closeModal = () => {
    	setModalVisible(false);
    	setInputValue('');
  };

  const PASSWORD = '555';
  const handleSubmit = () => {
    	if (inputValue === PASSWORD) {
      		closeModal();
      		deactivateKeepAwake(); 
      		navigation.navigate("Exam history", {screen: "ExamHistResult"}); // Navigate to the previous screen
    	}
    };
	return (
		<View style ={{paddingVertical: 0, height: 60, backgroundColor: "transparent", position: "absolute", bottom:0, left: 15, right: 15, zIndex: 1, paddingHorizontal: 10, paddingBottom: 18, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<TouchableHighlight
        			onPress = {handlePrevPage}
        			disabled = {currentPage == 1}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == 1?  "lightgray": "gray"}]}
      	 >
        		<AntDesign name="arrowleft" size={30} color={currentPage == 1? "#777": "black"}  />
      	</TouchableHighlight>
		  <EndExamBtn toggleModal={openModal} />
		  <TouchableHighlight
        			onPress={handleNextPage}
        			disabled = {currentPage == totalPages}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {backgroundColor: currentPage == totalPages ?  "lightgray": "gray"}]}
      	>
        		<AntDesign name="arrowright" size={30} color={currentPage == totalPages? "#777": "black"} />
      	</TouchableHighlight>  
	  	<QuitExamNotif navigation={navigation} visible={modalVisible} PASSWORD= {PASSWORD} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} closeModal={closeModal}/>
		</View>
	);
})


function EndExamBtn({toggleModal}){

  const handleBackPress = () => {
    toggleModal(); // Toggle the modal visibility
    return true; // Prevent default back behavior
  };

  
	return(
	  <>
		<TouchableHighlight
        			onPress={handleBackPress}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {styles.nextAndPrevBtn}
      	>
        	<Text style = {{fontSize: 16, fontWeight: "bold"}}>End Exam</Text>
      	</TouchableHighlight>  
      	
      </>
	);
}


const styles = StyleSheet.create({
  // Bottom Buttons
	nextAndPrevBtn: {
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 5,
   },
});

export default NavBottomBtn;