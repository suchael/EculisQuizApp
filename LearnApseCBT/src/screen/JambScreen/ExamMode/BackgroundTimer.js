// This code create a timer that decrements
// It is capable of running on the background


import React, { useState, useEffect } from 'react';
import { View, Text, AppState } from 'react-native';

const BackgroundTimer = () => {
  const totalTimeInSeconds = 60 // 60 seconds means 1hour .... adjust the seconda
  const [timeRemaining, setTimeRemaining] = useState(totalTimeInSeconds); 
  const [appState, setAppState] = useState(AppState.currentState);
  
  let timer;
  let startTime = 0; // Initialize the start time

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background') {
        // App is transitioning to the background or minimized
        // Save the current time in seconds when going to background
        startTime = Math.floor(Date.now() / 1000);
        clearInterval(timer);
      } else if (nextAppState === 'active') {
        // App is returning from the background or minimized
        // Calculate the time that passed during background and adjust the timer
        const backgroundTime = Math.floor(Date.now() / 1000) - startTime;
        setTimeRemaining((prevTime) => {
          const adjustedTime = prevTime - backgroundTime;
          if (adjustedTime > 0) {
            return adjustedTime;
          } else {
            clearInterval(timer);
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
              return 0; // Stop the timer when time is up
            }
          });
        }, 1000); // Decrease time every second
      }

      setAppState(nextAppState);
    };

    // Add an event listener to AppState changes
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    // Initialize the timer when the component mounts
    timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
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
  	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      	{/* Display the timer in the form :  00:00:00 */}
      	<Text style = {{fontSize: 20, fontWeight: "bold"}}>{formatTime(timeRemaining)}</Text>
    </View>
  );
};

export default BackgroundTimer;
