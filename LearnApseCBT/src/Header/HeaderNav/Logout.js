import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "../../screen/JambScreen/LoginAndSignUp/Login";

export default function Logout() {
  return (
    <View style={{ flex: 1 }}>
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
          borderBottomColor: "gray",
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
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={27}
          color="#333"
          style={{ marginLeft: -4 }}
        />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>Logout</Text>
    </View>
  );
}

function Main() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      console.log("Logging out...");
      await AsyncStorage.removeItem("userEmail");
      await AsyncStorage.removeItem("isLoggedIn");
      console.log("Logout successful");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

 

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "#888",
            padding: 15,
            borderRadius: 5,
            gap: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 15,
              borderRadius: 4,
              backgroundColor: "lightgray",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600" }}>
              Are you sure you want to logout?
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            style={{
              height: 46,
              paddingHorizontal: 15,
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "blue",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              marginTop: 20,
            }}
          >
            <MaterialCommunityIcons name="reload" size={24} color="black" />
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
              Logout{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
