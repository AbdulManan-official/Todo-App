import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const TodoInput = ({ onTodoAdded }) => {
  const [enteredTodoText, setEnteredTodoText] = useState('');

  function handleAddTodo() {
    if (enteredTodoText.trim() === '') return;
    onTodoAdded(enteredTodoText.trim());
    setEnteredTodoText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Todo"
        placeholderTextColor="#aaa"
        onChangeText={setEnteredTodoText}
        value={enteredTodoText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  textInput: {
    borderWidth: 1.2,
    borderColor: '#ddd',
    borderRadius: 12,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    color: '#333',
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#ff0079',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
