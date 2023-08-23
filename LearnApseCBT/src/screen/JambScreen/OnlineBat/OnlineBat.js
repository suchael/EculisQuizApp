import { View, Text , Image} from 'react-native'
import React from 'react'

export default function OnlineBat() {
  return (
    <View>
      <Text>OnlineBat</Text>
      <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXzblYsgKsmJZaHd3IBgPxar_r_dvkjXQvw&usqp=CAU" }}  style = {{width: 100, height: 100}}/>
    </View>
  )
}