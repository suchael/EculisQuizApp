import React from "react";
import { View, 
				Text, 
				StyleSheet, 
				ScrollView, 
				Dimensions,
				TouchableHighlight } from "react-native";

import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";


function Jamb() {
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              paddingLeft: insets.left + 16,
              paddingRight: insets.right + 16,
              paddingTop: insets.top + 15,
              paddingBottom: insets.bottom + 15,
            },
          ]}
        >
          <View style={styles.midTop}>
            <View style={styles.alert}>
              <Text style= {styles.alertText}>
                ...Once again, the Donkey escaped and said to the Fox, "you were
                lying, the Lion cut off my tail"
              </Text>
            </View>
            <View style={styles.midTopContent}>
              <View style={styles.midTopContentRow1}>
  			    <TouchableHighlight 
  					  onPress={()=>console.log("Past Question")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.midTopContentRow1PQuestion}
						>
  					<>
  						 <View>
                  		</View>
                 		 <Text>Past Questions </Text>
  					</>
			      </TouchableHighlight>
                <TouchableHighlight 
                		onPress={()=>console.log("Custom Exam")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.midTopContentRow1CustomExam}
				>
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Custom Exam </Text>
  					</>
				</TouchableHighlight>
              </View>
              <View style={styles.midTopContentRow2}>
              	<TouchableHighlight        		 
                		onPress={()=>console.log("Exam")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
					   style={styles.midTopContentRow2Exam}
				 >	
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Exam </Text>
  					</>
				  </TouchableHighlight>
			  </View>
              <View style={styles.midTopContentRow3}>
              	<TouchableHighlight  		  	 
                		onPress={()=>console.log("Online Battle")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.midTopContentRow3OnlineBattle}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Online Battle </Text>
  					</>
				  </TouchableHighlight>
                  <TouchableHighlight 
                  	  onPress={()=>console.log("Quiz Mode")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.midTopContentRow3Quiz}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Quiz Mode</Text>
  					</>
				  </TouchableHighlight>              
			  </View>
            </View>
          </View>
          <View style={styles.bottom}>
          		<TouchableHighlight 
                  	  onPress={()=>console.log("National score ranking")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>National score ranking</Text>
  					</>
				  </TouchableHighlight>  
          		<TouchableHighlight 
                  	  onPress={()=>console.log("Novels and Art")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Novels and Art </Text>
  					</>
				  </TouchableHighlight>    
          		<TouchableHighlight 
                  	  onPress={()=>console.log("Bookmarks")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Bookmarks</Text>
  					</>
				  </TouchableHighlight>       	
          		<TouchableHighlight 
                  	  onPress={()=>console.log("Jamb syllabus ")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Jamb syllabus </Text>
  					</>
				  </TouchableHighlight>       
          		<TouchableHighlight 
                  	  onPress={()=>console.log("Jamb subject combination ")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Jamb subject combination </Text>
  					</>
				  </TouchableHighlight>       
          		<TouchableHighlight 
                  	  onPress={()=>console.log("Exam history ")}
						activeOpacity = {0.9}
						underlayColor = "lightgray"
						style={styles.bottomContent}
				  >
				  	<>
  						 <View>
                  		</View>
                 		 <Text>Exam history</Text>
  					</>
				  </TouchableHighlight> 
		  </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  midTop: {
    borderWidth: 2,
  },
  alert: {
    borderWidth: 2,
    padding: 4,
    marginBottom: 10,
    backgroundColor: "yellow",
    borderTopRightRadius: 15,
    borderBottomLeftRadius:15,
  },
  alertText:{
  	fontSize: 13,
  	//fontWeight:  "100",
   },
  //MidTopContent
  midTopContent: {
    borderWidth: 2,
    flex: 1,
    marginBottom: 10,
  },
  midTopContentRow1: {
    justifyContent: "space-between",
    flexDirection: "row", 
  },
  midTopContentRow2: {
   flex:1,
   justifyContent: "center",
   alignItems: "center",
   borderWidth: 2,
   marginTop: 20,
   marginBottom:20,
  },
  midTopContentRow3: {
     justifyContent: "space-between",
    flexDirection: "row", 
    borderWidth: 2,
  },
  midTopContentRow1PQuestion:{
  	borderWidth:2,
  	backgroundColor: "orange",
  	width: 110,
  	height: 110,
  	borderTopLeftRadius: 20,
  	borderBottomRightRadius: 20,
  },
  midTopContentRow1CustomExam:{
  	borderWidth:2,
  	backgroundColor: "orange",
  	width: 110,
  	height: 110,
  	
  	borderTopRightRadius: 20,
  	borderBottomLeftRadius: 20,
  },
  midTopContentRow2Exam:{
  	borderWidth:2,
  	backgroundColor: "yellow",
  	width: 115,
  	height: 115,
  	borderRadius:  20,
  },
  midTopContentRow3OnlineBattle:{
  	borderWidth:2,
  	backgroundColor: "orange",
  	width: 110,
  	height: 110,
  	borderTopRightRadius: 20,
  	borderBottomLeftRadius: 20,
  },
  midTopContentRow3Quiz:{
  	borderWidth:2,
  	backgroundColor: "orange",
  	width: 110,
  	height: 110,
  	borderTopLeftRadius: 20,
  	borderBottomRightRadius: 20,
  },
  
  //Bottom
  bottom: {
      borderWidth: 2,
      marginTop: 10,
      borderColor: "red",
  },
  bottomContent:{
  	height:65,
  	borderWidth:2,
  	marginBottom: 8,
  	borderRadius: 5,
  	backgroundColor: "orange",
  },
});

export default Jamb;



