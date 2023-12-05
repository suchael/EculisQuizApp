import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';
        
import React, {useRef} from 'react';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, FontAwesome } from '@expo/vector-icons';


export default function RecommendedBooks() {
  return (
    <View>
     	<HomeHeader/>
     	<Main/>
    </View>
  )
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
      <Text style = {styles.homeHeaderText}>Literature{"  "}2020 - 2024</Text>
    </View>
  );
}





function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;

  {/*Scroll To - when clicked go to a section*/}
  	const scrollViewRef = useRef(null);
  	const poetryRef = useRef(null);
  	const proseRef = useRef(null);
  	const dramaRef = useRef(null);
  
  	const scrollToSection = (ref) => {
    		if (ref && ref.current) {
      			ref.current.measureLayout(
        				scrollViewRef.current,
        		  	 (x, y) => {
        	    			scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
        		 		},
        				() => {}
      			);
    		}
  		};
  {/*Closing: Scroll To - when clicked go to a section*/}
  
  return (
    <ScrollView ref={scrollViewRef}>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingBottom: insets.bottom + 140,
        }}
      >
        <View style = {{borderWidth: 2, borderColor: "#999", borderRadius: 5, padding: 5, backgroundColor: "white", alignItems: "center", marginTop: 35, marginBottom: 25}}>
            	<Text style ={{fontSize: 16, fontWeight: "600"}}>Recommended Literature books </Text>
            	<Text style ={{fontSize: 16, fontWeight: "600"}}>from 2020 - 2024</Text>
        </View>
      
        {/* Scroll To: Top Nav Button to Prose, Drama, and Poetry */}
        <View
          style={{
            marginBottom: 35,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => scrollToSection(poetryRef)} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, marginBottom: 15, backgroundColor: "gray", borderRadius: 25 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "900" }}>Poetry</Text>
              <FontAwesome name="angle-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollToSection(dramaRef)} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, marginBottom: 15, backgroundColor: "gray", borderRadius: 25 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "900" }}>Drama</Text>
              <FontAwesome name="angle-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollToSection(proseRef)} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 15, paddingVertical: 10, marginBottom: 15, backgroundColor: "gray", borderRadius: 25 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "900" }}>Prose</Text>
              <FontAwesome name="angle-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        {/*Closing ScrollTo*/}

        {/* Rendering Prose, Poetry, and Drama */}
        	{/*Note: This was broken into component like Prose, poetry, e.t.c... attempting to use a prop does not work yet... Later we can implement the Prop*/}
        <LiteratureProse myRef={proseRef} />
        <LiteraturePoetry myRef={poetryRef} />
        <LiteratureDrama myRef={dramaRef}/>
        {/* Rendering Prose, Poetry, and Drama */}
        
      </View>
    </ScrollView>
  );
}


function LiteratureProse({ myRef }) {
  const navigation = useNavigation();
  return (
    <View ref={myRef} style={{ paddingVertical: 2, marginBottom: 30,}}>
      <View  style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ padding: 4, width: 100, borderWidth: 2, borderColor: "#999", backgroundColor: "white", borderRadius: 5, justifyContent: "center", alignItems: "center", marginBottom: 5}}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Prose</Text>
        </View>
      </View>

      {/* African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 4, marginBottom: 10 }}>African Prose</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />

      {/* Non African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 4, marginBottom: 10 }}>Non-African Prose</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
    </View>
  );
}

function LiteraturePoetry({ myRef }) {
  const navigation = useNavigation();
  return (
    <View ref={myRef} style={{ paddingVertical: 2, marginBottom: 30,}}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ padding: 4, width: 100, borderWidth: 2, borderColor: "#999", backgroundColor: "white", borderRadius: 5, justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Poetry</Text>
        </View>
      </View>

      {/* African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8, marginBottom: 10 }}>African Poetry</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />

      {/* Non African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8, marginBottom: 10 }}>Non-African Poetry</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
    </View>
  );
}

function LiteratureDrama({ myRef }) {
  const navigation = useNavigation();
  return (
    <View ref={myRef} style={{ paddingVertical: 2, marginBottom: 30,}}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ padding: 4, width: 100, borderWidth: 2, borderColor: "#999", backgroundColor: "white", borderRadius: 5, justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Drama</Text>
        </View>
      </View>

      {/* African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8, marginBottom: 10 }}>African Drama</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />

      {/* Non African */}
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8, marginBottom: 10 }}>Non-African Drama</Text>
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
      <ButtonList />
    </View>
  );
}




function ButtonList(){
	const navigation = useNavigation ();
	return (
				<TouchableOpacity onPress={()=>navigation.navigate("Book")} style ={{height: 35, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: 12, paddingRight: 8, marginBottom: 15}}>
					<>
						<View>
							<Text style ={{fontSize: 17, fontWeight: "500", lineHeight: 18}} numberOfLines ={1}>1. Panic of growing oldPanic of growing old Panic of growing old</Text>
							<Text style ={{fontSize: 14, fontWeight: "600", paddingLeft: 18,}} numberOfLines ={1}>By: John Thomas</Text>
						</View>
						<FontAwesome name="angle-right" size={24} color="black" />
					</>
				</TouchableOpacity>
	);
}



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
});






