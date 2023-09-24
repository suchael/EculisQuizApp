import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const NUMBER = Array.from({ length: 60 }, (_, index) => index);
const firstFiveNUMBER = NUMBER.slice(0, 5);

const MinAndHourModal = ({ Type }) => {
  const [selectedNumber, setSelectedNumber] = useState(Type === "Hour" ? 1 : 30);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
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

  const renderNumber = useCallback(({ item }) => (
    <TouchableOpacity
      key={item}
      style={styles.option}
      onPress={() => selectNumber(item)}
    >
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{item}</Text>
    </TouchableOpacity>
  ), []);

  const selectNumber = (number) => {
    setSelectedNumber(number);
    closeAndResetModal();
  };

  const keyExtractor = useCallback((item) => item.toString(), []);

  const modalContent = (
    <FlatList
      data={Type === "Hour" ? firstFiveNUMBER : NUMBER}
      renderItem={renderNumber}
      keyExtractor={keyExtractor}
      initialNumToRender={15}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{Type}: </Text>

        <TouchableOpacity
          onPress={openModal}
          style={{ width: 100, borderWidth: 2, borderRadius: 4, backgroundColor: "lightgray" }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 4, paddingHorizontal: 15 }}>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>{selectedNumber}</Text>
            <Fontisto name="angle-down" size={16} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          activeOpacity={1}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={[styles.modal, { height: Type === "Hour" ? "32%" : "64%" }]}>
              {modalContent}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(MinAndHourModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  modal: {
    width: "40%",
    height: "64%",
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
