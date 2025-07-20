 import { StyleSheet,Text,Pressable } from "react-native";
 const todoItem = (props) => {

    function deleteaHandler(){
        props.onDelete(props.id)
    }
    return ( 
        <Pressable onPress={deleteaHandler}>
        <Text style={styles.todo} >{props.Text }</Text>
        </Pressable>
     );
}
 
export default todoItem;
const styles=StyleSheet.create({
    todo:{
        borderWidth:1,
        borderColor:'#cccccc',
        marginVertical:5,
        padding:12,
        textAlign:'center',
        fontSize:20,
        fontWeight:'500',
        backgroundColor:'#ff0079ff',
        color:'white', 
        borderRadius:200,
      },
})