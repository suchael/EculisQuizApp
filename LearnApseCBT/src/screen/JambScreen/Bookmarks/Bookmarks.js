import React, { useState, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';

const MyLargeList = () => {
  const initialData = Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Item ${i}` }));
  const [data, setData] = useState(initialData);

  const renderItem = useCallback(({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  }, []);

  const handleEndReached = () => {
    // Simulate loading more data
    const newData = Array.from({ length: 1000000 }, (_, i) => ({ id: data.length + i, name: `Item ${data.length + i}` }));

    setData((prevData) => [...prevData, ...newData]);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1} // Trigger onEndReached when 10% from the bottom
    />
  );
};

export default MyLargeList;
