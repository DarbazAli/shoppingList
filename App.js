import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: 'Bread',
    },
    {
      id: uuid.v4(),
      text: 'Milk',
    },
    {
      id: uuid.v4(),
      text: 'Banana',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error: Please enter some text!');
      return;
    }
    setItems(prevItems => {
      return [{id: uuid.v4(), text}, ...prevItems];
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onAddItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
