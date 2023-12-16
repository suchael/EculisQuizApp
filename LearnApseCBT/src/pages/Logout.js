import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderTop from "../components/customComponents/HeaderTop";

const Logout = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <HeaderTop title={"Logout"} />
      <Main />
    </View>
  );
};

const Main = () => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
    mainContainer: {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top,
      paddingBottom: insets.bottom + 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logoutBox: {
      borderWidth: 2,
      borderColor: "#888",
      padding: 15,
      borderRadius: 5,
      gap: 50,
    },
    logoutTextContainer: {
      flexDirection: "row",
      padding: 15,
      borderRadius: 4,
      backgroundColor: "lightgray",
    },
    logoutText: {
      fontSize: 17,
      fontWeight: "600",
    },
    logoutButton: {
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
    },
    logoutButtonText: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
    },
  });
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
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.logoutBox}>
          <View style={styles.logoutTextContainer}>
            <Text style={styles.logoutText}>
              Are you sure you want to logout?
            </Text>
          </View>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <MaterialCommunityIcons name="reload" size={24} color="black" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Logout;
