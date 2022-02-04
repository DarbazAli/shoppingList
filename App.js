import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <Text style={styles.heading}>Hello World</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
