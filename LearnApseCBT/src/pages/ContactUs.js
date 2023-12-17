import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// Icons
import {
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import HeaderTop from "../components/customComponents/HeaderTop";

// My import

export default function ContactUs() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderTop title={"Contact Us"} />
      <Main />
    </View>
  );
}

function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get("window").height;

  const styles = {
    container: {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top + 60,
      paddingBottom: insets.bottom + 10,
      flex: 1,
    },
    card: {
      borderWidth: 2,
      borderColor: "#999",
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 25,
      marginBottom: 80,
    },
    title: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
      marginBottom: 12,
    },
    button: {
      height: 46,
      paddingHorizontal: 15,
      borderRadius: 10,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "blue",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 15,
      marginBottom: 12,
    },
    buttonText: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
    },
    followSection: {
      alignItems: "center",
      marginTop: 40,
    },
    followText: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
      marginTop: 10,
    },
    followLinks: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      gap: 20,
      borderColor: "#666",
      borderRadius: 4,
      paddingBottom: 20,
      paddingHorizontal: 10,
      alignItems: "center",
    },
    followLinkButton: {
      flexDirection: "row",
      borderWidth: 2,
      gap: 15,
      alignItems: "center",
      padding: 5,
      marginTop: 10,
      borderRadius: 5,
    },
  };

  const FollowLinks = () => (
    <View style={styles.followLinks}>
      <TouchableOpacity style={styles.followLinkButton}>
        <Entypo name="twitter" size={18} color="black" />
        <Text style={styles.buttonText}>LearnApse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.followLinkButton}>
        <FontAwesome5 name="tiktok" size={17} color="black" />
        <Text style={styles.buttonText}>LearnApse</Text>
      </TouchableOpacity>
    </View>
  );

  const ContactButton = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  console.log(screenHeight);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>For enquiries and support</Text>
          <ContactButton
            icon={<FontAwesome name="whatsapp" size={24} color="black" />}
            text="Message us via WhatsApp"
            onPress={() => {}}
          />
          <ContactButton
            icon={<FontAwesome name="whatsapp" size={24} color="black" />}
            text="Join our WhatsApp group"
            onPress={() => {}}
          />
          <ContactButton
            icon={<MaterialIcons name="email" size={24} color="black" />}
            text="Email us"
            onPress={() => {}}
          />
          <View style={styles.followSection}>
            <Text style={styles.followText}>Follow us</Text>
            <FollowLinks />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
