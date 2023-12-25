import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { firebase } from "../../../Firebase/Firestore";

//icons
import { FontAwesome, Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SQLite from "expo-sqlite";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//My imports

const NewsScreenStack = createNativeStackNavigator();

export default function NewsScreen() {
  return (
    <NewsScreenStack.Navigator
      initialRouteName="NewsHome"
      screenOptions={{ animation: "none" }}
    >
      <NewsScreenStack.Screen
        name="NewsHome"
        component={NewsHome}
        options={{ headerShown: false }}
      />
    </NewsScreenStack.Navigator>
  );
}

function NewsHome() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={{ backgroundColor: "#6EAAF5" }}>
        <ScrollView>
          <View
            style={[
              styles.container,
              {
                paddingLeft: insets.left + 10,
                paddingRight: insets.right + 10,
                paddingTop: insets.top + 12,
                paddingBottom: insets.bottom,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                marginTop: 15,
              }}
            >
              <FontAwesome name="bell" size={24} color="black" />
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Latest Education News{" "}
              </Text>
            </View>

            {/*News*/}
            <News />
            {/* <News /> */}
            {/* <News /> */}

            <TouchableOpacity
              style={{
                padding: 10,
                marginTop: 120,
                marginBottom: 15,
                borderRadius: 25,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                More News
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

function News() {
  const [myData, setMyData] = useState([]);
  const fetchFirebaseDetails = firebase.firestore().collection("News");
  const db = SQLite.openDatabase("learnApse.db");
  const [apiData, setApiData] = useState([])
 
 const fetchDataFromApi = async () => {
    const apiUrl = "http://192.168.1.94:4000/news/find";

    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found in local storage");
      }

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = response.data;
      const newsData = data.newsData;
      console.log('first', newsData)
      setApiData(newsData);

      // Other code...
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  console.log("myData", myData);
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");

  const filteredItems = apiData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log("Searching for:", searchText);
  };

  return (
    <>
      {/*SearchBox*/}
      <View style={{ marginTop: 10, height: 40, marginBottom: 35 }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TouchableHighlight
            onPress={handleSearch}
            activeOpacity={0.9}
            underlayColor="lightgray"
            style={{
              height: "100%",
              flex: 1,
              backgroundColor: "white",
              borderRadius: 18,
              borderWidth: 2,
              borderColor: "#888",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Feather name="search" size={22} color="gray" />
              <TextInput
                style={{
                  flex: 1,
                  height: 36,
                  paddingHorizontal: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
                placeholder="Search news..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
              {/* Close icon */}
              {searchText.length > 0 && (
                <TouchableHighlight
                  onPress={() => {
                    setSearchText("");
                  }}
                  activeOpacity={0.9}
                  underlayColor="lightgray"
                  style={{
                    height: "100%",
                    paddingHorizontal: 15,
                    justifyContent: "center",
                  }}
                >
                  <Feather name="x" size={22} color="gray" />
                </TouchableHighlight>
              )}
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {/*SearchBox closing*/}
      {filteredItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("NewsContent", {description: item?.description, title: item?.title, comments: item?.comments, id: item?._id})}
          style={{
            backgroundColor: "#999",
            padding: 12,
            borderRadius: 14,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              justifyContent: "flex-start",
            }}
          >
            {/* Picture */}
            <View
              style={{
                borderWidth: 2,
                width: 60,
                height: 50,
                borderRadius: 10,
              }}
            />
            {/* Closing of Picture */}

            <View key={index} style={{ flex: 1 }}>
              <Text
              onPress={()=> {
                console.log("item log", item)
              }}
                style={{ fontSize: 17, fontWeight: "600", marginTop: -4 }}
                numberOfLines={2}
              >
                {item.title} hhhhhh {item._id}
              </Text>
              {/* <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item.time} mins ago
              </Text> */}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
  },
});
