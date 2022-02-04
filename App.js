import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
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
