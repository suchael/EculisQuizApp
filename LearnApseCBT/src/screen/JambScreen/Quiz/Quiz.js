import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

const AdvancedImageCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);

  const viewWidth = Dimensions.get('window').width * 0.55;
  const viewHeight = Dimensions.get('window').height * 0.55;

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / viewWidth);
    setCurrentPage(newIndex);
  };

  const scrollToPage = (page) => {
    setCurrentPage(page);
    scrollViewRef.current.scrollTo({
      x: page * viewWidth,
      animated: true,
    });
  };

  const images = [
    { color: 'red', text: 'Image 1' },
    { color: 'blue', text: 'Image 2' },
    { color: 'green', text: 'Image 3' },
    { color: 'purple', text: 'Image 4' },
    // Add more images as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        decelerationRate="fast"
      >
        {images.map((image, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => scrollToPage(index)}>
            <View style={[styles.image, { width: viewWidth, height: viewHeight }]}>
              <View style={[styles.imageView, { backgroundColor: image.color }]}>
                <Text style={styles.imageText}>{image.text}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => scrollToPage(index)}>
            <View
              style={[
                styles.paginationDot,
                index === currentPage && styles.activePaginationDot,
              ]}
            />
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.55,
    height: Dimensions.get('window').height * 0.55,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: 'black',
  },
});

export default AdvancedImageCarousel;
