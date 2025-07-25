import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ Text: title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.7}>
      <Text style={styles.todo}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#ff0079',
    color: 'white',
    fontSize: 18,
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12,
    textAlign: 'center',
    elevation: 2,
  },
});
