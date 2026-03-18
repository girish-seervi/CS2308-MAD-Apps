import React, { useState } from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
FlatList,
ScrollView,
StatusBar
} from 'react-native';

const TaskScreen = () => {

const [task,setTask] = useState('');
const [tasks,setTasks] = useState<any[]>([]);

const addTask = () => {

if(task.trim() === '') return;

setTasks([...tasks,{text:task,completed:false}]);
setTask('');

};

const deleteTask = (index:number) => {

const newTasks = tasks.filter((_,i)=> i!==index);
setTasks(newTasks);

};

const toggleComplete = (index:number)=>{

const updated=[...tasks];
updated[index].completed=!updated[index].completed;
setTasks(updated);

};

const completed = tasks.filter(t=>t.completed).length;

return (

<View style={styles.container}>

<StatusBar barStyle="light-content"/>

<ScrollView showsVerticalScrollIndicator={false}>

<Text style={styles.heading}>My Tasks</Text>

<Text style={styles.progress}>
Completed {completed} of {tasks.length} tasks
</Text>

<View style={styles.inputRow}>

<TextInput
placeholder="Add a new task..."
placeholderTextColor="#888"
style={styles.input}
value={task}
onChangeText={setTask}
/>

<TouchableOpacity style={styles.addButton} onPress={addTask}>
<Text style={styles.addText}>+</Text>
</TouchableOpacity>

</View>

{tasks.length === 0 && (

<View style={styles.emptyContainer}>

<Text style={styles.emptyEmoji}>📝</Text>

<Text style={styles.emptyTitle}>
No Tasks Yet
</Text>

<Text style={styles.emptySubtitle}>
Add your first task
</Text>

</View>

)}

<FlatList
data={tasks}
scrollEnabled={false}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item,index})=>(

<View style={styles.taskCard}>

<TouchableOpacity
style={styles.checkBox}
onPress={()=>toggleComplete(index)}
>

<Text style={styles.checkMark}>
{item.completed ? "✓" : ""}
</Text>

</TouchableOpacity>

<Text
style={[
styles.taskText,
item.completed && styles.completedText
]}
>

{item.text}

</Text>

<TouchableOpacity
style={styles.deleteBtn}
onPress={()=>deleteTask(index)}
>

<Text style={styles.deleteText}>✕</Text>

</TouchableOpacity>

</View>

)}
/>

</ScrollView>

</View>

);
};

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#0f172a',
padding:20
},

heading:{
fontSize:32,
fontWeight:'bold',
color:'white'
},

progress:{
color:'#94a3b8',
marginBottom:20
},

inputRow:{
flexDirection:'row',
marginBottom:20
},

input:{
flex:1,
backgroundColor:'#1e293b',
padding:14,
borderRadius:10,
color:'white',
marginRight:10
},

addButton:{
width:50,
height:50,
backgroundColor:'#3b82f6',
justifyContent:'center',
alignItems:'center',
borderRadius:10
},

addText:{
color:'white',
fontSize:24,
fontWeight:'bold'
},

taskCard:{
backgroundColor:'#1e293b',
padding:15,
borderRadius:12,
marginBottom:12,
flexDirection:'row',
alignItems:'center'
},

checkBox:{
width:26,
height:26,
borderWidth:2,
borderColor:'#3b82f6',
borderRadius:6,
marginRight:12,
justifyContent:'center',
alignItems:'center'
},

checkMark:{
color:'#3b82f6',
fontWeight:'bold'
},

taskText:{
flex:1,
color:'white',
fontSize:16
},

completedText:{
textDecorationLine:'line-through',
color:'#94a3b8'
},

deleteBtn:{
backgroundColor:'#ef4444',
width:30,
height:30,
justifyContent:'center',
alignItems:'center',
borderRadius:6
},

deleteText:{
color:'white',
fontWeight:'bold'
},

emptyContainer:{
alignItems:'center',
marginTop:40
},

emptyEmoji:{
fontSize:40
},

emptyTitle:{
color:'white',
fontSize:18,
marginTop:10
},

emptySubtitle:{
color:'#94a3b8',
marginTop:5
}

});

export default TaskScreen;