import {View, 
        Text, 
        StyleSheet,
        ScrollView,
        Dimensions,
        TouchableHighlight } from 'react-native';

import React , {useState}from 'react';

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// ReadMore Text logic
const ReadMore= ({ text, msg ,maxLength }) => {
  const insets = useSafeAreaInsets();
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const renderText = () => {
    if (text.length <= maxLength || expanded) {
      return (
      	<Text style ={{textAlign: "justify"}}>
			{text}
			<Text style={{fontSize:15, color: "#444", fontWeight: "600"}}> {msg}</Text>
		  </Text>
	   )
      }
      return text.substring(0, maxLength) + '...';
  };
  return (
    <View style={{ flexDirection: 'column' , flex:1,}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style= {{fontSize: 16, fontWeight: "500", textAlign: "justify"}}>
			<Text style= {{fontWeight: "600", fontSize: 16, flexWrap: "wrap", textAlign: "justify"}}>Note: </Text> 
			{renderText()} 
			
		</Text>
        {!expanded && text.length > maxLength && (
          <TouchableHighlight 
				onPress={toggleExpansion}
			    style={{ width: 80 }} // Apply style to the outer container
			    underlayColor="lightgray"
		  >
            <Text style={{ color: 'green' , width:80}}>
              {' Read More'}
            </Text>
          </TouchableHighlight>
        )}
      </View>
      {expanded && (
        <TouchableHighlight onPress={toggleExpansion} 
			  style={{ width: 80 }} // Apply style to the outer container
			  underlayColor="lightgray"
		>
          <Text style={{ color: 'blue', width: 80 }}>
            {'...Read Less\n'}
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ReadMore;

