import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const SwitchButton= () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const switchPosition = new Animated.Value(isToggled ? 1 : 0);

  const handleViewPress = () => {
    if (isEnabled) {
      Animated.spring(switchPosition, {
        toValue: isToggled ? 0 : 1,
        useNativeDriver: false,
      }).start();
      setIsToggled(!isToggled);
    }
  };

  const interpolatedValue = switchPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleViewPress} disabled={!isEnabled}>
        <View style={[styles.switchContainer, !isEnabled && styles.disabledSwitchContainer]}>
          <Animated.View
            style={[
              styles.switch,
              {
                backgroundColor: isToggled ? 'orange' : 'gray',
                transform: [{ translateX: interpolatedValue }],
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    paddingHorizontal: 5, // Increase touchable area horizontally
  },
  disabledSwitchContainer: {
    backgroundColor: 'red',
  },
  switch: {
    width: 26,
    height: 26,
    borderRadius: 13,
    position: 'absolute',
    backgroundColor: 'green',
  },
});

export default SwitchButton;
