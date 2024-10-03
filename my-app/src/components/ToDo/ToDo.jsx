import React,{ useState} from 'react';
import './ToDo.css';

function ToDo() {
    const [tasks,setTasks] = useState(["zrobić śniadanie", "zrobić obiad", "zrobić kolacje"]);
    const [newTask,setNewTask] =useState("");
    const [search, setSearch] = useState("");

    function AddTask()
    {
        if(newTask.trim() !== "")
        {
            setTasks(tasks => [...tasks,newTask]);
            setNewTask("");
        }
    }
     function DeleteTask(index){
        const tempTasks = tasks.filter((element, i) => i !==index);
        setTasks(tempTasks);
     } 
  return (
    <div className='ToDoList'>
        <h1>To do list</h1>
        <div>
            <input
            className='input1'
            type='text'
            placeholder='enter task'
            value={newTask}
           onChange={(event) =>{
            setNewTask(event.target.value);
          }}
            />
            <button
            className='buttonAdd'
            onClick={AddTask}>Add</button>
        </div>
        <input 
        className='input2'
            onChange={
            (event) => setSearch(event.target.value)
            }
        />
        <ol>
        { tasks
            .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    <button
                    onClick={() => DeleteTask(index)}
                        className='buttonDelete'
                    
                    >Delete</button>
                </li>
            ))}
        </ol>
    </div>
  );
}

export default ToDo;
