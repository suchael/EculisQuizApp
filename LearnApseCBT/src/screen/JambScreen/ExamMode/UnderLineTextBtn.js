import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from "react-native";

export default function UnderLineTextBtn({ text , goTo, closeModal}) {
	const navigation= useNavigation();
    return (
      <TouchableOpacity onPress={()=> { navigation.navigate(goTo); closeModal()}}    style={{ justifyContent: 'center', alignItems: 'center' , }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 16,
            fontWeight: '600',
            margin: -4,
            paddingVertical: -4,
            marginHorizontal: 2,
            color: 'blue',
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
