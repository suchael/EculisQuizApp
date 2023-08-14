import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


// Navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//my Components
import Status_bar from "./src/Status_bar.js";
import HomeScreen from './src/HomeScreen.js';
import SearchInputScreen from './src/SearchInputScreen.js';
import PastQuest from './src/screen/JambScreen/PQuestion/PastQuest.js';
import CustExam from './src/screen/JambScreen/CustExam/CustExam.js';
import ExamMode from './src/screen/JambScreen/ExamMode/ExamMode.js';
import OnlineBat from './src/screen/JambScreen/OnlineBat/OnlineBat.js';
import Quiz from './src/screen/JambScreen/Quiz/Quiz.js';
import NationalRank from './src/screen/JambScreen/NationalRank/NationalRank.js';
import NovelsArt from './src/screen/JambScreen/NovelsArt/NovelsArt.js';
import Bookmarks from './src/screen/JambScreen/Bookmarks/Bookmarks.js';
import JambSyllabus from './src/screen/JambScreen/JambSyllabus/JambSyllabus.js';
import JambSubComb from './src/screen/JambScreen/JambSubComb/JambSubComb.js';
import ExamHist from './src/screen/JambScreen/ExamHist/ExamHist.js';
import GroupExam from './src/screen/JambScreen/GroupExam/GroupExam.js';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
  	<> 
  	<SafeAreaProvider>
  		  <Status_bar/>
  		  <NavigationContainer>
					<Stack.Navigator initialRouteName='HomeScreen' screenOptions={{animation:"none"}}>
						<Stack.Screen 
							name="HomeScreen" 
							options={{headerShown: false}}
							component={HomeScreen}
							/>
							<Stack.Screen 
								name='SearchInputScreen' 
								component={SearchInputScreen}
							/>
							<Stack.Screen 
								name='Past questions' 
								component={PastQuest}
								options={{title: "Past Questions"}}
							/>
							<Stack.Screen 
								name='Custom exam' 
								component={CustExam}
							/>
							<Stack.Screen 
								name='Exam mode' 
								component={ExamMode}
							/>
							<Stack.Screen 
								name='Online battle' 
								component={OnlineBat}
							/>
							<Stack.Screen 
								name='Quiz mode' 
								component={Quiz}
							/>
							<Stack.Screen 
								name='National score ranking' 
								component={NationalRank}
							/>
							<Stack.Screen 
								name='Novels and Art' 
								component={NovelsArt}
							/>
							<Stack.Screen 
								name='Bookmarks' 
								component={Bookmarks}
							/>
							<Stack.Screen 
								name='Jamb syllabus' 
								component={JambSyllabus}
							/>
							<Stack.Screen 
								name='Jamb subject combination' 
								component={JambSubComb}
							/>
							<Stack.Screen 
								name='Exam history' 
								component={ExamHist}
							/>
							<Stack.Screen 
								name='Group exam' 
								component={GroupExam}
							/>
					</Stack.Navigator>
  		  </NavigationContainer>
  	</SafeAreaProvider>
  	</>
  );
}












