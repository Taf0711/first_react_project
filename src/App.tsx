import React, {FC, useState} from "react";
import './App.css'

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<string>("")
  const [task, setTask] = useState<string>("")
    return (
      <div className='App'> 
        <div className='header'>
          <div className="inputContainer">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline (in Days)..." />
          </div>
          <button>Add Task</button>
        </div>
        <div className='todolist'></div>
      </div>
    );
  };
  export default App;
  