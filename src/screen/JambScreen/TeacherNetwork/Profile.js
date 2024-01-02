import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import { FontAwesome5 , AntDesign} from '@expo/vector-icons';



export default function Profile () {
  return (
    <View style ={{flex: 1}}>
      <HomeHeader />
      <Main />
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
          paddingRight: insets.right + 10,
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
      <Text style={styles.homeHeaderText}>Your profile</Text>
    </View>
  );
}



function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  console.log(screenHeight);
  return (
    <ScrollView>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 10,
          flex: 1,
        }}
      >
        {/*Big Icon*/}
        <View style = {{ height: 100, marginBottom: 15, justifyContent: "center", alignItems: "center"}}>
        	<View style ={{borderWidth: 2.5, borderColor: "#999", width: 70, height: 70, borderRadius: 35, justifyContent: "center", alignItems: "center",  backgroundColor: "white"}}>
        		<FontAwesome5 name="user" size={40} color="#999" />
        	</View>
        </View>
        {/*Big Icon*/}
        
        <About/>
        
      </View>
    </ScrollView>
  );
}


function About(){
	return(
		<View style = {{paddingVertical: 15, marginBottom: 10,}}>
        		{/**/}
          <View>
          	  <View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 19, fontWeight: "600", marginTop: -4}}>
								Full Name:{"  "}
								<Text style = {{fontWeight: "500", fontSize: 17}}>Ahmed Success </Text>
						</Text>
        			</View>
        		</View>
        
        		<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 19, fontWeight: "600", marginTop: -4}}>
								Contact:{"  "}
								<Text style = {{fontWeight: "500", fontSize: 17}}>090 3114 3122</Text>
						</Text>
        			</View>
        		</View>
        
        		<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 19, fontWeight: "600", marginTop: -4}}>
								Email:{"  "}
								<Text style = {{fontWeight: "500", fontSize: 17}}>succhycomic@gmail.com</Text>
						</Text>
        			</View>
        		</View>
          
        		<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 17, fontWeight: "600", color: "blue"}}>
								Educational background 
						</Text>
        				<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Bachelor of Science in Education, University Of Benin 
						</Text>
						<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Master of Science in Psychology, University Of Ilorin 
						</Text>
        			</View>
        		</View>
        
        		<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 17, fontWeight: "600", color: "blue"}}>
								Teaching Experience
						</Text>
        				<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Worked at ABC Elementary School - Taught Physics and Chemistry 
						</Text>
						<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Worked at XYZ Secondary School - Taught Chemistry and Biology 
						</Text>
        			</View>
        		</View>
        
        
            	<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 17, fontWeight: "600", color: "blue"}}>
								Subjects you can teach
						</Text>
        				<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Physics 
						</Text>
						<Text style = {{fontSize: 16, fontWeight: "500", marginTop: 8, marginBottom: 4}}>
							• Chemistry 
						</Text>
        			</View>
        		</View>
        
        		<View style ={{borderWidth: 0.5, borderColor: "#999",  flexDirection: "row", padding: 10, justifyContent: "space-between", gap: 10, flex: 1, marginBottom: 10}}>
        			<FontAwesome5 name="user-alt" size={18} color="black" />
        			<View style ={{justifyContent: "center", flex:1}}>
        				<Text style = {{fontSize: 17, fontWeight: "600", color: "blue"}}>
								Availability:{" "}
								<Text style = {{fontSize: 16, fontWeight: "500", color: "black", marginTop: 8, marginBottom: 4}}>
									Full-time 
								</Text>
						</Text>
        			</View>
        		</View>
        
        
        		
        </View>
        		<View style ={{ marginTop: 80, padding:2, justifyContent: "center", alignItems: "center",}}>
        			<Text style ={{fontSize: 16, fontWeight: "500" }}>Powered by</Text>
        			<Text style ={{fontSize: 24, fontWeight: "900" }}>Eculis Code</Text>
        		</View>
        
        </View>
	);
}





const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  homeHeader: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  homeHeaderIcon: {},
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: 'gray',
    marginBottom: 6,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
  },
});