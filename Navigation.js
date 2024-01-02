
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//my Components
import Status_bar from "./src/Status_bar.js";
import HomeScreen from "./src/HomeScreen.js";
import SearchInputScreen from "./src/SearchInputScreen.js";
import UpdateQuestion from "./src/pages/UpdateQuestion.js";
import PastQuest from "./src/screen/JambScreen/PQuestion/PastQuest.js";
import CustTest from "./src/screen/JambScreen/CustTest/CustTest.js";
import ExamMode from "./src/screen/JambScreen/ExamMode/ExamMode.js";
import OnlineBat from "./src/screen/JambScreen/OnlineBat/OnlineBat.js";
import Quiz from "./src/screen/JambScreen/Quiz/Quiz.js";
import HallOfFame from "./src/screen/JambScreen/HallOfFame/HallOfFame.js";
import NovelsArt from "./src/screen/JambScreen/NovelsArt/NovelsArt.js";
import Bookmarks from "./src/screen/JambScreen/Bookmarks/Bookmarks.js";
import JambSyllabus from "./src/screen/JambScreen/JambSyllabus/JambSyllabus.js";
import JambSubComb from "./src/screen/JambScreen/JambSubComb/JambSubComb.js";
import ExamHist from "./src/screen/JambScreen/ExamHist/ExamHist.js";
import GroupExam from "./src/screen/JambScreen/GroupExam/GroupExam.js";
import TeacherNetwork from "./src/screen/JambScreen/TeacherNetwork/TeacherNetwork.js";

import Login from "./src/screen/JambScreen/LoginAndSignUp/Login.js";
import Signup from "./src/screen/JambScreen/LoginAndSignUp/Signup.js";
import ForgotPword from "./src/screen/JambScreen/LoginAndSignUp/ForgotPword/ForgotPword.js";
import SixDigitCode from "./src/screen/JambScreen/LoginAndSignUp/ForgotPword/SixDigitCode.js";

import ActivateApp from "./src/screen/JambScreen/ActivateApp/ActivateApp.js";
import BasicAdvancePaymentPlan from "./src/screen/JambScreen/ActivateApp/BasicAdvancePaymentPlan.js";
import PaymentOption from "./src/screen/JambScreen/ActivateApp/PaymentOption.js";
import WaecPastQuest from "./src/screen/WaecScreen/WaecPQuestion/PastQuest.js";
import NewsContent from "./src/screen/NewsScreen/NewsContent.js";
import NewsCommentSection from "./src/screen/NewsScreen/NewsCommentSection.js";
import ContactUs from "./src/pages/ContactUs.js";
import Profile from "./src/pages/Profile.js";
import Logout from "./src/pages/Logout.js";
const Stack = createNativeStackNavigator();

const Navigation = () => (



<NavigationContainer>
<Stack.Navigator
  initialRouteName="HomeScreen"
  screenOptions={{
    //animation:"slide",
    headerShown: false,
    lazy: true, // Enable lazy rendering
    //lazyPreloadDistance: 1000, // Set the preload distance to 500 pixels
    lazyPlaceholder: () => (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    ),
  }}
>
  <Stack.Screen
    name="HomeScreen"
    options={{ headerShown: false }}
    component={HomeScreen}
  />

  {/*Header Navigation*/}
  <Stack.Screen name="UpdateQuestion" component={UpdateQuestion} />
  <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="ContactUs" component={ContactUs} />
  <Stack.Screen name="Logout" component={Logout} />
  {/*Closing - Header Navigation*/}

  <Stack.Screen
    name="SearchInputScreen"
    component={SearchInputScreen}
  />

  {/*JambScreem*/}
  <Stack.Screen
    name="Past questions"
    component={PastQuest}
    options={{ title: "Past Questions" }}
  />
  <Stack.Screen name="Custom test" component={CustTest} />
  <Stack.Screen name="Exam mode" component={ExamMode} />
  <Stack.Screen name="Online battle" component={OnlineBat} />
  <Stack.Screen name="Quiz mode" component={Quiz} />
  <Stack.Screen name="HallOfFame" component={HallOfFame} />
  <Stack.Screen name="Novels and Art" component={NovelsArt} />
  <Stack.Screen name="Bookmarks" component={Bookmarks} />
  <Stack.Screen name="Jamb syllabus" component={JambSyllabus} />
  <Stack.Screen
    name="Jamb subject combination"
    component={JambSubComb}
  />
  <Stack.Screen name="Exam history" component={ExamHist} />
  <Stack.Screen name="Group exam" component={GroupExam} />
  <Stack.Screen name="Teacher network" component={TeacherNetwork} />

  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
  <Stack.Screen name="ForgotPword" component={ForgotPword} />
  <Stack.Screen name="SixDigitCode" component={SixDigitCode} />

  <Stack.Screen name="ActivateApp" component={ActivateApp} />
  <Stack.Screen
    name="BasicAdvancePaymentPlan"
    component={BasicAdvancePaymentPlan}
  />
  <Stack.Screen name="PaymentOption" component={PaymentOption} />

  {/*Closing - JambScreen*/}

  {/*WaecScreen*/}
  <Stack.Screen
    name="WaecPastQuest"
    component={WaecPastQuest}
    options={{ title: "Past Questions" }}
  />

  {/*Closing - WaecScreen*/}

  {/*NewsScreen*/}
  <Stack.Screen name="NewsContent" component={NewsContent} />
  <Stack.Screen
    name="NewsCommentSection"
    component={NewsCommentSection}
  />
  {/*Closing - NewsScreen*/}
</Stack.Navigator>
</NavigationContainer>

);


export default Navigation;

