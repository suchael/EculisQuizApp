
import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        TouchableHighlight } from 'react-native';
        
import React from 'react';

import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';


export default function BookChapter() {
  return (
    <View style={styles.container}>
    		<HomeHeader/>
			<MainContainer/>
    </View>
  );
}


function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 15,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 4,
          borderBottomWidth: 2,
          borderBottomColor: 'gray', 
        },
      ]}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableHighlight>
      
      <View style ={{justifyContent: " center", alignItems: "center", flex: 1 , }}>
        	<Text style={styles.homeHeaderText} numberOfLines={1}>Panic of growing old in anotherman Kingdom of Niger</Text>
			<Text style = {{fontSize: 17, fontWeight: "600"}}>Chapter 2/20</Text>
	  </View>
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
                  	paddingTop: insets.top + 14,
                  	paddingBottom: insets.bottom + 150,             	
                }}
				>
					
					{/* Content */}
					<View style ={{marginTop: 20}}>
						<Text style = {{fontSize: 16.5, fontWeight: "500", textAlign: "justify" }}>
						yes, your app has the potential to compete with myschool. both apps offer a variety of features for students and teachers, but your app has some unique features that could set it apart, such as the online battle mode, the group exam link, and the ability to generate questions by topic.

here are some ideas on how to market your app:

* **target students and teachers:** your app is most likely to be used by students and teachers, so make sure to target your marketing efforts to these groups. you can reach out to schools, student organizations, and teacher associations to promote your app.
* **highlight the unique features:** as mentioned above, your app has some unique features that could set it apart from myschool. make sure to highlight these features in your marketing materials. you can also create videos or demos that show off the features of your app.
* **offer a free trial:** one way to get people to try your app is to offer a free trial. this will give people a chance to see if your app is right for them and to see how it compares to myschool.
* **run contests and giveaways:** running contests and giveaways is a great way to generate excitement for your app and to attract new users. you can offer prizes such as free subscriptions, gift cards, or even cash.
* **get involved in the community:** another way to market your app is to get involved in the community. you can participate in online forums and discussion groups, or you can attend conferences and events. this will help you to connect with potential users and to build awareness for your app.

by following these tips, you can increase the chances of your app competing with myschool.
Yes, your app has the potential to compete with Myschool. Both apps offer a variety of features for students and teachers, but your app has some unique features that could set it apart, such as the online battle mode, the group exam link, and the ability to generate questions by topic.

Here are some ideas on how to market your app:

* **Target students and teachers:** Your app is most likely to be used by students and teachers, so make sure to target your marketing efforts to these groups. You can reach out to schools, student organizations, and teacher associations to promote your app.
* **Highlight the unique features:** As mentioned above, your app has some unique features that could set it apart from Myschool. Make sure to highlight these features in your marketing materials. You can also create videos or demos that show off the features of your app.
* **Offer a free trial:** One way to get people to try your app is to offer a free trial. This will give people a chance to see if your app is right for them and to see how it compares to Myschool.
* **Run contests and giveaways:** Running contests and giveaways is a great way to generate excitement for your app and to attract new users. You can offer prizes such as free subscriptions, gift cards, or even cash.
* **Get involved in the community:** Another way to market your app is to get involved in the community. You can participate in online forums and discussion groups, or you can attend conferences and events. This will help you to connect with potential users and to build awareness for your app.

By following these tips, you can increase the chances of your app competing with Myschool.
						</Text>
					</View>
				</View>
			</ScrollView>
			<PrevBtn/>
			<NextBtn/>
			<QuizBtn/>
		</View>
	);
}



function PrevBtn(){
	return (
			<TouchableHighlight
        			onPress={() => console.log("Prev Btn") }
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {left: 10}]}
      	>
        		<AntDesign name="arrowleft" size={30} color="black" />
      	</TouchableHighlight>
	);
}

function NextBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("Next Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {right: 10}]}
      	>
        		<AntDesign name="arrowright" size={30} color="black" />
      </TouchableHighlight>  
	);
}


function QuizBtn(){
	return (
		<TouchableHighlight
        			onPress={() => console.log("Quiz Btn")}
        			activeOpacity={0.9}
        			underlayColor="white"
        			style= {[styles.nextAndPrevBtn, {right: 10, bottom: 70, width: 60, height: 60, borderRadius: 20}]}
      	>
        		<Text style = {{fontSize: 17, fontWeight: "bold"}}>Quiz</Text>
      </TouchableHighlight>  
	);
}









const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#999",
    borderBottomWidth: 2,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  
  // main container
  mainContainer:{
  	flex:1,
  	backgroundColor: "white",
  },
 
 
  
  // Bottom Buttons
	nextAndPrevBtn: {
		//borderWidth: 2,
		width: 90,
		height: 46,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "gray",
		borderRadius: 18,
		position: "absolute",
		bottom: 10,
   },
});