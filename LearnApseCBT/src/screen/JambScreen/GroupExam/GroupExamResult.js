import React from 'react';
import { View, Text, TouchableOpacity , ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const data = [
  { name: 'Ekumdayoenumire\nGaladima', score: '82.4%\n1st', timeSpent: '1hr 45mins' },
  { name: 'Emily\nSmith', score: '95.2%\n1st', timeSpent: '2hr 10mins' },
  { name: 'Michael\nJohnson', score: '76.8%\n2nd', timeSpent: '1hr 30mins' },
  { name: 'Sophia\nWilliams', score: '88.6%\n2nd', timeSpent: '1hr 55mins' },
  { name: 'Daniel\nBrown', score: '62.1%\n3rd', timeSpent: '1hr 15mins' },
  { name: 'Olivia\nJones', score: '74.9%\n3rd', timeSpent: '1hr 40mins' },
  { name: 'Matthew\nGarcia', score: '90.3%\n4th', timeSpent: '2hr 5mins' },
  { name: 'Emma\nMartinez', score: '81.7%\n4th', timeSpent: '2hr 30mins' },
  { name: 'Liam\nLopez', score: '78.2%\n5th', timeSpent: '1hr 20mins' },
  { name: 'Ava\nHernandez', score: '93.8%\n5th', timeSpent: '1hr 50mins' },
  { name: 'Noah\nGonzalez', score: '85.6%\n6th', timeSpent: '2hr 15mins' },
  { name: 'Isabella\nMiller', score: '70.5%\n6th', timeSpent: '1hr 25mins' },
  { name: 'Ethan\nDavis', score: '89.1%\n7th', timeSpent: '1hr 55mins' },
  { name: 'Sophia\nRodriguez', score: '76.2%\n7th', timeSpent: '2hr 10mins' },
  { name: 'Liam\nWilson', score: '94.7%\n8th', timeSpent: '1hr 40mins' },
  { name: 'Olivia\nLopez', score: '82.9%\n8th', timeSpent: '1hr 30mins' },
  { name: 'Noah\nTaylor', score: '70.0%\n9th', timeSpent: '1hr 15mins' },
  { name: 'Emma\nAnderson', score: '88.4%\n9th', timeSpent: '2hr 5mins' },
  { name: 'Oliver\nMartinez', score: '83.1%\n10th', timeSpent: '1hr 50mins' },
  { name: 'Ava\nHernandez', score: '96.5%\n10th', timeSpent: '2hr 20mins' },
  { name: 'William\nGarcia', score: '75.8%\n11th', timeSpent: '1hr 45mins' },
  { name: 'Sophia\nSmith', score: '87.3%\n11th', timeSpent: '1hr 35mins' },
  { name: 'James\nJohnson', score: '64.9%\n12th', timeSpent: '2hr 15mins' },
  { name: 'Olivia\nWilliams', score: '72.7%\n12th', timeSpent: '1hr 10mins' },
  { name: 'Benjamin\nBrown', score: '91.6%\n13th', timeSpent: '2hr 5mins' },
  { name: 'Emma\nJones', score: '80.2%\n13th', timeSpent: '2hr 30mins' },
  { name: 'Liam\nGarcia', score: '78.3%\n14th', timeSpent: '1hr 50mins' },
  { name: 'Ava\nMartinez', score: '94.9%\n14th', timeSpent: '1hr 40mins' },
  { name: 'Lucas\nHernandez', score: '86.5%\n15th', timeSpent: '1hr 20mins' },
  { name: 'Isabella\nLopez', score: '71.2%\n15th', timeSpent: '2hr 10mins' },
  { name: 'Alexander\nGarcia', score: '89.7%\n16th', timeSpent: '1hr 55mins' },
  { name: 'Olivia\nMartinez', score: '73.8%\n16th', timeSpent: '1hr 30mins' },
  { name: 'Henry\nWilliams', score: '67.4%\n17th', timeSpent: '1hr 15mins' },
  { name: 'Amelia\nBrown', score: '82.3%\n17th', timeSpent: '2hr 5mins' },
  { name: 'Michael\nSmith', score: '90.9%\n18th', timeSpent: '1hr 45mins' },
  { name: 'Sophia\nJohnson', score: '76.1%\n18th', timeSpent: '1hr 50mins' },
  { name: 'Daniel\nDavis', score: '85.0%\n19th', timeSpent: '2hr 30mins' },
  { name: 'Olivia\nWilliams', score: '71.8%\n19th', timeSpent: '1hr 10mins' },
  { name: 'William\nTaylor', score: '63.5%\n20th', timeSpent: '1hr 55mins' },
  { name: 'Ava\nAnderson', score: '88.9%\n20th', timeSpent: '2hr 20mins' },
  { name: 'James\nSmith', score: '76.2%\n21st', timeSpent: '2hr 15mins' },
  { name: 'Sophia\nJohnson', score: '82.7%\n21st', timeSpent: '1hr 25mins' },
  { name: 'Benjamin\nBrown', score: '70.4%\n22nd', timeSpent: '1hr 40mins' },
  { name: 'Olivia\nGarcia', score: '92.1%\n22nd', timeSpent: '1hr 50mins' },
  { name: 'Lucas\nMartinez', score: '81.0%\n23rd', timeSpent: '2hr 5mins' },
];


export default function GroupExamResult() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
      	<View style={styles.excelTableContainer}>
       	 <TableHeader />

        	{/* Table Data */}
        	{data.map((item, index) => (
          	<TableRow
            	key={index}
            	name={item.name}
            	score={item.score}
            	timeSpent={item.timeSpent}
          	/>
        	))}
      	</View>
      </ScrollView>

      <TouchableOpacity style={styles.releaseButton}>
        <Text style={styles.releaseButtonText}>Release Result</Text>
      </TouchableOpacity>
    </View>
  );
}




function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.homeHeader,
        {
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 4,
          borderBottomWidth: 2,
          borderBottomColor: 'gray',
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{ width: 60, height: 40, justifyContent: 'center' }}
      >
        <AntDesign name="arrowleft" size={27} color="#333" style={{ marginLeft: -4 }} />
      </TouchableOpacity>
      <Text style={styles.homeHeaderText}>LearnApse {"  "}Mock</Text>
    </View>
  );
}

function TableHeader() {
  return (
    <View style={styles.excelTableHeader}>
      <Text style={[styles.excelTableCell, styles.boldText]}>Name</Text>
      <Text style={[styles.excelTableCell, styles.boldText]}>Score</Text>
      <Text style={[styles.excelTableCell, styles.boldText]}>Time Spent</Text>
    </View>
  );
}

function TableRow({ name, score, timeSpent }) {
  return (
    <View style={styles.excelTableRow}>
      <Text style={styles.excelTableCell}>{name}</Text>
      <Text style={styles.excelTableCell}>{score}</Text>
      <Text style={styles.excelTableCell}>{timeSpent}</Text>
    </View>
  );
}




const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },
  excelTableContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
    marginBottom: 140,
  },
  excelTableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    backgroundColor: '#F5F5F5',
  },
  excelTableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  excelTableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
  },
  boldText: {
    fontWeight: 'bold',
  },
  releaseButton: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
  },
  releaseButtonText: {
    color: 'white',
    fontSize: 16,
  },
};
