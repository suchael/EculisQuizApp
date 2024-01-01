import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableHighlight, Modal, StyleSheet, FlatList, BackHandler } from 'react-native';

import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";

import { COLORS } from "../../../../Colors.js";


export default function PageSelectorModal() {
  const { totalPages, goToPage, currentPage } = useContext(ShowQuestionContext);
  const [selectedNumber, setSelectedNumber] = useState(currentPage);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectNumber = (number) => {
    setSelectedNumber(number);
    closeAndResetModal();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (modalVisible) {
        closeAndResetModal();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [modalVisible]);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2 , maxWidth: 120,}}>
        <TouchableHighlight
          onPress={openModal}
          activeOpacity={0.9}
          underlayColor="white"
          style={[styles.topBtnTouchables, { alignItems: "center", justifyContent: "center", flex: 1, borderRadius: 4, height: 46, }]}
        >
          <View style={[styles.topBtnTouchablesView, { alignItems: "center", justifyContent: "center", gap: 1 }]}>
            <Text style={styles.topBtnText}>Page{" "}{currentPage} {"\n"}of {totalPages}</Text>
          </View>
        </TouchableHighlight>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          activeOpacity={1}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <View style={{borderBottomWidth: 2, borderColor: "#999", paddingVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center"}}>
                  All pages
                </Text>
              </View>
              <FlatList
                data={pageNumbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableHighlight
                    key={item}
                    underlayColor="lightgray"
                    style={styles.option}
                    onPress={() => {
                      goToPage(item);
                      selectNumber(item);
                    }}
                  >
                    <Text style={{ fontSize: 17, fontWeight: "500" }}>Page{"  "}{item}</Text>
                  </TouchableHighlight>
                )}
              />
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  modal: {
    width: "40%",
    maxHeight: "64%",
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  option: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topBtnTouchables: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  topBtnTouchablesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 6,
  },
  topBtnText: {
    fontSize: 17,
    fontWeight: "900",
    color: COLORS.mainBtnText,
    textAlign: "center",
  },
});
