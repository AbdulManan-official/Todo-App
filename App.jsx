import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import TodoItem from './Components/TodoItem';
import TodoInput from './Components/TodoInput';

export default function App() {
  const [TodoList, setTodosList] = useState([]);

  function addTodoText(enteredTodotext) {
    if (enteredTodotext !== "") {
      setTodosList([...TodoList, { Text: enteredTodotext, id: Math.random().toString() }]);
    }
  }

  function deletehandler(id)
  {
 setTodosList(TodoList.filter(todo=>todo.id !=id))
  }

  return (
    <View style={styles.container}>
      <TodoInput onTodoAdded={addTodoText} />
      <FlatList
        style={styles.List}
        data={TodoList}
        renderItem={(todoItem) => {
          return (
            <TodoItem Text={todoItem.item.Text} id={todoItem.item.id}  onDelete={deletehandler} />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 5,
  },
  List: {
    height: '80%',
  },
});
