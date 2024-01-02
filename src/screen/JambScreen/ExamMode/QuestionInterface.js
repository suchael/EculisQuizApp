import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import React, {
	useState,
	useMemo,
	useContext,
} from 'react';

import { useNavigation } from '@react-navigation/native';

// My import
import { Questions } from "../PQuestion/SubjectListDb.js";
import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";
import GoToBtnList from "./GoToBtnList.js";
import {COLORS} from "../../../../Colors.js";



const QuestionInterface = React.memo(() => {
	return (
		<View style={styles.questionInterfaceMain}>
			<QuestionInterfaceContainer />
			<GoToBtnList />
		</View>
	);
});



function QuestionInterfaceContainer() {
	const navigation = useNavigation()
	const [selectedOption, setSelectedOption] = useState(null);

	const { currentPage,
		questionsPerPage,
		showAllAnswer,
		totalQuestions,
		isLoadingQuestion,
		setIsLoadingQuestion,
		totalScore,
		setTotalScore,
	} = useContext(ShowQuestionContext);
	console.log(totalScore, "totalScore");

	const startQuestionIndex = (currentPage - 1) * questionsPerPage;
	const endQuestionIndex = startQuestionIndex + questionsPerPage;

	// Memoize the questions to display for the current page
	const questionsToDisplay = useMemo(() => Questions.slice(startQuestionIndex, endQuestionIndex), [currentPage]);

	const handleOptionClick = (index, eachOption, ANSWER) => {
		setSelectedOption(index)
		ANSWER.slice(-1).toLowerCase() == Object.keys(eachOption)[0].toLowerCase() && setTotalScore(totalScore + 1)
	}

	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			{questionsToDisplay.map((eachQuestion, index) => (
				<View key={index} style={styles.questionInterfaceContainer}>
					<View style={styles.questionScreen}>
						<View style={styles.questionScreenNumberView}>
							<Text style={styles.questionScreenNumber}>
								Question {`${startQuestionIndex + index + 1} of ${totalQuestions}`}
							</Text>
						</View>
						<Text style={styles.questionScreenQuestionContent}>
							{eachQuestion.question}
						</Text>
					</View>

					<View style={styles.optionMain}>
						{eachQuestion.options.map((eachOption, index) => (
							<TouchableOpacity
								onPress={() => handleOptionClick(index, eachOption, eachQuestion.answer)}
								key={index}
								style={[styles.optionContainer, { backgroundColor: selectedOption == index ? COLORS.primary : COLORS.secondary, borderColor: selectedOption == index ? COLORS.primary : "#777"}]}
							>
								<Text style={{ fontSize: 20, fontWeight: "bold", color: selectedOption == index ? COLORS.mainBtnText : "black" }}>
									{Object.keys(eachOption)[0]}{".  "}
									<Text style={styles.optionContainerOptions}>
										{eachOption[Object.keys(eachOption)[0]]}
									</Text>
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			))
			}
		</View>
	);
}



const styles = StyleSheet.create({
	// Question Interface
	questionInterfaceMain: {
		//borderWidth : 2, 
		marginBottom: 60,
		marginTop: 10,
		backgroundColor: COLORS.secondary,
	},
	questionInterfaceContainer: {
		elevation: 10,
		backgroundColor: COLORS.tertiary,
		borderWidth: 1,
		paddingHorizontal: 4,
		paddingTop: 4,
		paddingBottom: 8,
		borderColor: "#777",
		borderRadius: 15,
		marginBottom: 50,
		maxWidth: 420,
		width: "100%",
	},
	questionScreen: {
		elevation: 10,
		borderWidth: 1,
		padding: 8,
		borderColor: "#777",
		flexDirection: "column",
		borderRadius: 12,
		backgroundColor: COLORS.secondary,
		marginBottom: 12,
	},
	questionScreenNumberView: {
		marginVertical: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	questionScreenNumber: {
		fontSize: 18,
		fontWeight: "bold",
		borderWidth: 2,
		borderColor: COLORS.primary,
		paddingLeft: 10,
		paddingRight: 8,
		paddingTop: 1,
		borderRadius: 5
	},
	questionScreenQuestionContent: {
		fontSize: 16.7,
		fontWeight: "500",
		marginTop: 15,
		marginBottom: 7,
		textAlign: "justify",
		//color: "black",
	},
	optionMain: {
		//borderWidth:2, 
		paddingTop: 5
	},
	optionContainer: {
		elevation: 10,
		//justifyContent: "center",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderWidth: 1,
		borderRadius: 7,
		//marginBottom: 6, 
		marginTop: 6,
		backgroundColor: COLORS.mainBtnText,
		minHeight: 45
	},
	optionContainerOptions: {
		fontSize: 16.7,
		fontWeight: "500",
		paddingVertical: 20,
		borderWidth: 2,
	},
});

export default QuestionInterface;