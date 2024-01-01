// This code create a timer that decrements
// It is capable of running on the background

import React, { useState, useEffect } from "react";
import { View, Text, AppState, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// icons
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../../../Colors.js";

const BackgroundTimer = () => {
  const navigation = useNavigation();

  const totalTimeInSeconds = 7200; // 60 seconds means 1hour .... adjust the seconda
  const [timeRemaining, setTimeRemaining] = useState(totalTimeInSeconds);
  const [appState, setAppState] = useState(AppState.currentState);

  let timer;
  let startTime = 0; // Initialize the start time

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === "background") {
        // App is transitioning to the background or minimized
        // Save the current time in seconds when going to background
        startTime = Math.floor(Date.now() / 1000);
        clearInterval(timer);
      } else if (nextAppState === "active") {
        // App is returning from the background or minimized
        // Calculate the time that passed during background and adjust the timer
        const backgroundTime = Math.floor(Date.now() / 1000) - startTime;
        setTimeRemaining((prevTime) => {
          const adjustedTime = prevTime - backgroundTime;
          if (adjustedTime > 0) {
            return adjustedTime;
          } else {
            clearInterval(timer);
            //alert("Time up!")
            return 0; // Stop the timer when time is up
          }
        });

        // Start the timer again
        timer = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(timer);
              //alert("Time up!")
              return 0; // Stop the timer when time is up
            }
          });
        }, 1000); // Decrease time every second
      }

      setAppState(nextAppState);
    };

    // Add an event listener to AppState changes
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Initialize the timer when the component mounts
    timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);

          // alert users when timer is up
          Alert.alert("Time is up!", "We've come to the end of this exam!", [
            {
              text: "OK",
              onPress: () => {
                console.log("Alert closed");
                navigation.navigate("Exam history", {
                  screen: "ExamHistResult",
                }); // Navigate to the previous screen
              },
            },
          ]);

          return 0; // Stop the timer when time is up
        }
      });
    }, 1000); // Decrease time every second

    // Remove the event listener when the component unmounts
    return () => {
      clearInterval(timer);
      appStateSubscription.remove();
    };
  }, []);

  //Display time in form of 00:00:00
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* Display the timer in the form :  00:00:00 */}
      <Ionicons
        name="md-alarm-outline"
        size={30}
        color={COLORS.mainBtnText}
        style={{ marginLeft: -4 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.mainBtnText }}>
        {formatTime(timeRemaining)}
      </Text>
    </View>
  );
};

export default BackgroundTimer;
