import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  AntDesign,
} from '@expo/vector-icons';

// My import

export default function NewsContent() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Main />
      <CommentBtn />
    </View>
  )
}

function HomeHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.homeHeader, {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      paddingTop: insets.top + 12,
      paddingBottom: insets.bottom + 4,
      borderBottomWidth: 2,
      borderBottomColor: "gray",
    }]}>
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={styles.backButton}
      >
        <AntDesign name="arrowleft" size={27} color="#333" />
      </TouchableHighlight>
      <Text style={styles.homeHeaderText}>LearnApse </Text>
    </View>
  );
}

function Main() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={[styles.contentContainer, {
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        paddingTop: insets.top + 14,
        paddingBottom: insets.bottom + 160,
      }]}>
        {/* Picture */}
        <View style={styles.picture}></View>
        {/* Picture closing */}

        {/* News Heading */}
        <View style={styles.newsHeading}>
          <View style={styles.headingLine}></View>
          <Text style={styles.headingText}>
            School of nursing form is out now read it below to verify more news
          </Text>
        </View>
        {/* News Heading closing */}

        {/* News content */}
        <Text style={styles.newsContent}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas. Mattis pellentesque id nibh tortor id. Ipsum consequat nisl vel pretium. At imperdiet dui accumsan sit amet nulla. Neque ornare aenean euismod elementum nisi. Arcu odio ut sem nulla pharetra diam sit amet nisl. Sit amet est placerat in egestas. Vitae turpis massa sed elementum tempus egestas. Quis auctor elit sed vulputate mi sit amet mauris. Consequat semper viverra nam libero justo laoreet sit amet. Pretium quam vulputate dignissim suspendisse. Metus aliquam eleifend mi in nulla posuere. At volutpat diam ut venenatis tellus in metus vulputate. Pulvinar mattis nunc sed blandit libero volutpat sed. Vulputate mi sit amet mauris commodo quis. Accumsan tortor posuere ac ut consequat.

At auctor urna nunc id cursus metus aliquam. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Id aliquet lectus proin nibh nisl condimentum id venenatis. Massa tincidunt nunc pulvinar sapien et. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Accumsan lacus vel facilisis volutpat est. Amet est placerat in egestas erat imperdiet sed euismod nisi. Dignissim sodales ut eu sem integer vitae justo. Quis hendrerit dolor magna eget est. Vitae sapien pellentesque habitant morbi tristique senectus. Sociis natoque penatibus et magnis dis parturient. Rhoncus dolor purus non enim praesent. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.

Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Tellus id interdum velit laoreet id. Eu ultrices vitae auctor eu. At elementum eu facilisis sed odio. Quis imperdiet massa tincidunt nunc pulvinar. Cras fermentum odio eu feugiat pretium nibh ipsum. In hac habitasse platea dictumst vestibulum. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Adipiscing vitae proin sagittis nisl. Dictum at tempor commodo ullamcorper a lacus.

	</Text>
        {/* News content closing */}
      </View>
    </ScrollView>
  );
}

function CommentBtn() {
  return (
    <TouchableOpacity style={styles.commentButton}>
      <Text style={styles.commentButtonText}>Post or View comments (5)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 60,
    height: 40,
    justifyContent: "center",
  },
  homeHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  picture: {
    borderWidth: 2,
    height: 230,
    borderRadius: 10,
    marginBottom: 20,
  },
  newsHeading: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    marginBottom: 20,
    gap: 10,
  },
  headingLine: {
    width: "2%",
    height: "100%",
    borderWidth: 3,
    backgroundColor: "black",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    width: "94.5%",
  },
  newsContent: {
    fontSize: 17,
    fontWeight: "500",
  },
  commentButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
  },
  commentButtonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
