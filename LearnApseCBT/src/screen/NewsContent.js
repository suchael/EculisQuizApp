import React from 'react';
import { View,Text, StyleSheet, TouchableHighlight } from 'react-native';

function NewsContent () {
  return (
    <View style={styles.container}>
    

      <View style={[styles.box, styles.topLeft]}></View>
      <View style={[styles.box, styles.topRight]}></View>
      <View style={[styles.box, styles.middle]}></View>
      <View style={[styles.box, styles.bottomLeft]}></View>
      <View style={[styles.box, styles.bottomRight]}></View>
          
	<TouchableHighlight
		onPress={()=>console.log("hello")}
		activeOpacity = {0.6}
		underlayColor = "gray"
		style={{height:50, width:60, borderWidth:2, margin: 50}}
	>
		<Text> Click Me </Text>
	</TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
  },
  box: {
    width: '50%',
    height: '50%',
  },
  topLeft: {
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
  },
  topRight: {
    backgroundColor: 'blue',
    borderTopRightRadius: 20,
  },
  middle: {
    backgroundColor: 'orange',
    alignSelf: 'center',
  },
  bottomLeft: {
    backgroundColor: 'green',
    borderBottomLeftRadius: 20,
  },
  bottomRight: {
    backgroundColor: 'purple',
    borderBottomRightRadius: 20,
  },
  button:{
  	backgroundColor: "yellow",
  	height:30,
},
});

export default NewsContent;
