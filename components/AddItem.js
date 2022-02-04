import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddItem = ({onAddItem}) => {
  const [text, setText] = useState('');

  const onChange = event => setText(event.nativeEvent.text);

  const onAddItemHandler = () => {
    onAddItem(text);
    setText('');
  };
  return (
    <View>
      <TextInput
        onSubmitEditing={onAddItemHandler}
        style={styles.input}
        value={text}
        onChange={onChange}
      />
      <TouchableOpacity style={styles.button} onPress={onAddItemHandler}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 54,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    margin: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'darkslateblue',
    padding: 20,
    margin: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddItem;
