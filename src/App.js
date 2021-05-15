import React from "react"
import {useState} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
     {
          id: 1,
          text: "Doctor's Appointment",
          day: "Feb 5th at 2:30 PM",
          reminder: true
     },
     {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30 PM",
          reminder: true
     },
     {
          id: 3,
          text: "Food Shopping",
          day: "Feb 5th at 2:30 PM",
          reminder: false
     }])

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  console.log(tasks);
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to show"}
    </div>
  );
}

export default App;
