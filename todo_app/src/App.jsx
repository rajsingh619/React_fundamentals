import { useState } from "react";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TaskStates from "./components/TaskStates";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  //[{"place":0,"task":newTask}]
  const [newTask, setNewTask] = useState("");
  
  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    setTaskArray((prevTaskArray) => {
      const updatedArray = [...prevTaskArray,{"id":Date.now(),"place":0,"task":newTask}];
      return updatedArray
    });
    setNewTask("");
  }

  function setMoveTask(taskId){
    setTaskArray((prevTaskArray)=>{
      return prevTaskArray.map((task)=>{
        if(task.id === taskId){
          const newPlace = task.place + 1;
          if(newPlace>2){
            return task;
          }
          return {...task,"place":newPlace};
        }
        return task;
      })
    })
  }
 

  return (
    <>
      <Header/>
      <InputTask onAddTask={handleAddTask} onChangeInput={handleInput} taskName = {newTask}/>
      <TaskStates taskList = {taskArray} onMoveTask={setMoveTask}/>
    </>
  );
}

export default App;
