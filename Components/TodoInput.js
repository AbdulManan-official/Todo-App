import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TodoInput = (props) => {
  const [enteredTodotext, setEnteredTodotext] = useState('');

  function enterTodoText(enteredtext) {
    setEnteredTodotext(enteredtext);
  }

  function onPress() {
    props.onTodoAdded(enteredTodotext);
    setEnteredTodotext(''); 
  }

  return (
    <View>
      <View style={styles.flexforTodo}>
        <TextInput
          style={styles.TextInput}
          onChangeText={enterTodoText}
          value={enteredTodotext}
          placeholder='Enter your Todo'
        />
      </View>

      <View style={styles.flexforbutton}>
        <Button title='Add Todo' color={'#ff0079ff'} onPress={onPress} />
      </View>
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  flexforTodo: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBlockColor: '#cccccc',
    paddingBottom: 10,
    padding: 20,
    marginBottom: 10,
  },
  flexforbutton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 19,
    borderBottomWidth: 1,
    borderBlockColor: '#cccccc',
    paddingBottom: 10,
    marginBottom: 2,
  },
  TextInput: {
    borderWidth: 1.5,
    borderColor: '#cccccc',
    borderRadius: 200,
    fontSize: 20,
    color: '#ff0079ff',
    width: '90%',
    paddingLeft: 20,
    marginRight: 5,
    padding: 10,
  },
});
