import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

function App() {
  const scrollViewRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
        },
        () => {}
      );
    }
  };

  return (
    <ScrollView ref={scrollViewRef}>
      <View>
        <TouchableOpacity onPress={() => scrollToSection(sectionRef1)} style={{ padding: 10, backgroundColor: 'red' }}>
          <Text>Scroll to Section 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => scrollToSection(sectionRef2)} style={{ padding: 10, backgroundColor: 'green' }}>
          <Text>Scroll to Section 2</Text>
        </TouchableOpacity>

        <Comp1 myRef1 = {sectionRef1}/>
        <Comp2 myRef2 = {sectionRef2}/>

        
      </View>
    </ScrollView>
  );
}


function Comp1 ({myRef1}){
	
	return(
		<>
			<View ref={myRef1} style={{ backgroundColor: 'lime', marginTop: 500 }}>
               <Text>Section 1</Text>
           </View>
		</>
	);
}


function Comp2 ({myRef2}){
	
	return(
		<>
			<View ref={myRef2} style={{ backgroundColor: 'lime', marginTop: 500, marginBottom: 700}}>
               <Text>Section 2</Text>
           </View>
		</>
	);
}




export default App;
