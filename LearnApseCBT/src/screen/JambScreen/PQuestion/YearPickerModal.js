
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const YEAR = [
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023
];

export default function YearPickerModal(){
  const [selectedYear, setSelectedYear] = useState("Year");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectYear = (year) => {
    setSelectedYear(year);
    closeAndResetModal();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (modalVisible) {
        closeAndResetModal();
        return true; // Prevent default behavior (exit the app)
      }
      return false; // Let the default behavior continue (back navigation)
    });

    return () => backHandler.remove();
  }, [modalVisible]);

  const renderYear = (year) => (
    <TouchableOpacity key={year} style={styles.option} onPress={() => selectYear(year)}>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{year}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={openModal}
        underlayColor="lightgray"
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 6, borderWidth: 2, gap: 30, borderRadius: 3, width: 110, backgroundColor: selectedYear=== "Year"?  "lightgray": "white"}}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>{selectedYear}</Text>
          <Fontisto name="angle-down" size={16} color="black" />
        </View>
      </TouchableHighlight>
      { typeof selectedYear == "number" && (
      	<View style ={{ backgroundColor: "white", paddingHorizontal: 5, marginTop: 5, borderWidth: 2, borderRadius: 3}}>
				<Text style = {{fontWeight: "700", fontSize: 18, }}>
					Total:{"  "}
					<Text style = {{fontWeight: "500", }}>80</Text>
			    </Text>
      	</View>
        
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center", borderBottomWidth: 2, borderColor: "#999", paddingVertical: 10 }}>Year</Text>
              <ScrollView>
                {YEAR.map(renderYear)}
              </ScrollView>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: "84%",
    height: "64%",
    borderRadius: 6,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pickerContainer: {
    flex: 1,
  },
  option: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  selectedSubject: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
  },
});

