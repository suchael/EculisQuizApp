import {
	View,
	Text,
	StyleSheet,
	Switch,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	BackHandler, FlatList, ActivityIndicator,
	TouchableHighlight
} from 'react-native';

import React, {
	useState,
	useEffect,
	useMemo,
	useCallback,
	useContext,
	useRef
} from 'react';

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Icons
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// My import
import { Subjects, Questions } from "../PQuestion/SubjectListDb.js";
import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";
import BackgroundTimer from "./BackgroundTimer.js";
import NavBottomBtn from "./NavBottomBtn.js";
import GoToBtnList from "./GoToBtnList.js";
import QuestionInterface from "./QuestionInterface.js";
import Calculator from "./Calculator.js";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


function Home() {
	const navigation = useNavigation();
	const route = useRoute();

	const { currentPage } = route.params;
	const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
	const [showAllAnswer, setShowAllAnswer] = useState(false);

	const totalQuestions = Questions.length; // Replace with the actual total number of questions
	const questionsPerPage = 1;  // Adjust the number of questions per page as needed
	const totalPages = Math.ceil(totalQuestions / questionsPerPage);

	const scrollViewRef = useRef();

	//Memoize the navigation handlers using useCallback
	const handleNextPage = useCallback(() => {
		if (currentPage < totalPages) {
			setIsLoadingQuestion(true);
			const newPage = currentPage + 1;
			navigation.setParams({ currentPage: newPage }); //Go to next page if currentPage changes
			setIsLoadingQuestion(false);
			console.log("Page nxt: ", currentPage)

			// Scroll to the top when user click next btn
			if (scrollViewRef.current) {
				scrollViewRef.current.scrollTo({ y: 0, animated: true });
			}
		}
	}, [currentPage, totalPages, navigation]);

	const handlePrevPage = useCallback(() => {
		if (currentPage > 1) {
			setIsLoadingQuestion(true);
			const newPage = currentPage - 1;
			navigation.setParams({ currentPage: newPage });
			setIsLoadingQuestion(false);

			// Scroll to the top when user click on Prev Btn
			if (scrollViewRef.current) {
				scrollViewRef.current.scrollTo({ y: 0, animated: true });
			}
		}
	}, [currentPage, navigation]);

	const goToPage = useCallback((pageNumber) => {
		console.log("\t\t goTo")
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setIsLoadingQuestion(true);
			navigation.setParams({ currentPage: pageNumber });
			setIsLoadingQuestion(false);
			console.log("Goto Btn: ", currentPage)
		}
	}, [currentPage]);

	const [totalScore, setTotalScore] = useState(0);


	const contextValue = {
		currentPage,
		showAllAnswer,
		setShowAllAnswer,
		isLoadingQuestion,
		setIsLoadingQuestion,
		handleNextPage,
		handlePrevPage,
		goToPage,
		totalPages,
		totalQuestions,
		questionsPerPage,
		scrollViewRef,
		totalScore,
		setTotalScore,
	}
	return (
		<ShowQuestionContext.Provider value={contextValue}>
			<View style={styles.container}>
				<HomeHeader />
				<TabBar />
				<NavBottomBtn />
			</View>
		</ShowQuestionContext.Provider>
	);
}


function HomeHeader() {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();

	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	}

	const closeModal = () => {
		setModalVisible(false);
	}
	return (
		<View style={[styles.homeHeader,
		{
			paddingLeft: insets.left + 10,
			paddingRight: insets.right + 10,
			paddingTop: insets.top + 12,
			paddingBottom: insets.bottom + 4,
		}]}>
			<Text style={styles.homeHeaderText}>LearnApse</Text>
			<View style={{ backgroundColor: "gray", maxWidth: 135, padding: 4, borderRadius: 4, flexDirection: "row", gap: 5, justifyContent: "center", alingitems: "center" }}>
				<BackgroundTimer />
			</View>
			<TouchableOpacity onPress={openModal}>
				<Ionicons name="ios-calculator-sharp" size={44} color="black" />
				<Calculator visible={modalVisible} onClose={closeModal} />
			</TouchableOpacity>
		</View>
	);
}

// Top Tab Bar
function TabBar() {
	const examSubject = ["Maths", "Phy", "Chem", "Biol", "Yor", "Lit"]
	const [scrollTopTab, setScrollTopTab] = useState(false);

	const deviceWidth = Dimensions.get('window').width;
	const maxTopTabSubject = 6;
	const minDeviceWidth = 360;
	const enableTopTabScroll = () => (
		// if total subject > maxTopTabSubject and device width is lesser than 360
		// then enable scrolling horizontally 
		examSubject.length > maxTopTabSubject && deviceWidth <= minDeviceWidth ? true : false
	)

	return (
		<Tab.Navigator initialRouteName="General"
			screenOptions={{
				tabBarActiveTintColor: "#000000",
				tabBarInactiveTintColor: "#777",
				tabBarLabelStyle: {
					fontSize: 16,
					textTransform: "none",
					fontWeight: "bold",
				},
				tabBarStyle: {
					height: 40, // Adjust the height of the tab bar
					borderBottomWidth: 0, // Remove top border
					backgroundColor: "lightgray",
				},
				tabBarIndicatorStyle: {
					bottom: 0, // Adjust the position of the indicator
					backgroundColor: "black",
					height: 3,
				},
				//animation: "default",

				lazy: true, // Enable lazy rendering
				//lazyPreloadDistance: 10, // Set the preload distance to 500 pixels
				lazyPlaceholder: () => (
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						<ActivityIndicator size="large" color="blue" />
					</View>
				),
				tabBarScrollEnabled: enableTopTabScroll(),
			}}>


			{examSubject.map((subject, ind) => ( // map and create each tab 
				<Tab.Screen name={subject} component={MainContainer} key={ind} />
			))}
		</Tab.Navigator>
	);
}


function MainContainer({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const { scrollViewRef } = useContext(ShowQuestionContext);

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	const insets = useSafeAreaInsets();
	return (
		<View style={styles.mainContainer}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} ref={scrollViewRef} scrollEventThrottle={900}>
				<View style={{
					paddingLeft: insets.left + 10,
					paddingRight: insets.right + 10,
					paddingTop: insets.top + 10,
					paddingBottom: insets.bottom + 80,
				}}
				>
					<QuestionInterface />
				</View>
			</ScrollView>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	homeContainer: {
		flex: 1,
		backgroundColor: "white",
	},
	homeHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "lightgray",
	},
	homeHeaderText: {
		fontSize: 22,
		fontWeight: "600",
	},

	// main container
	mainContainer: {
		flex: 1,
		backgroundColor: "white",
	},

});


export default Home;