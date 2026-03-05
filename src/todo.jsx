import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {

    let [newtodo, setNewtodo] = useState("");
    let [tasks, setTasks] = useState([]);

    const addtask = (event) => {
        setNewtodo(event.target.value);
    }

    const newtodos = () => {
        setTasks([...tasks, { task: newtodo, id: uuidv4() , completed:false}]);
        setNewtodo("");
    }

    const Delete = (id) => {
        setTasks(tasks.filter((todo) => todo.id !== id));
    }

    const mark = (id) => {
        let newTasks = tasks.map((todo) => {

            if(id===todo.id){
                return {
                ...todo,
                completed:true
            }
            }
            else{
                return todo;
            }
        });

        setTasks(newTasks);
    }

    return (
        <>
            <h2>Task List</h2>
            <hr />

            <input
                placeholder="enter your task"
                value={newtodo}
                onChange={addtask}
            />

            <button onClick={newtodos}>New Task</button>
            

            <ul>
                {tasks.map((taske) => (
                    <li key={taske.id} style={{textDecoration: taske.completed ? "line-through" : "none"}}>
                        {taske.task}
                        &nbsp;&nbsp;
                        <button onClick={() => Delete(taske.id)}>Delete</button>
                        <button onClick={() => mark(taske.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>
            
        </>
    )
}