import React, { useState } from 'react';
import Tasks from './Tasks';
import Input from './Input';

function Todolist () {
    const [tasks, setTasks] = useState(["Make a todo list"]);

    const addTask = (e, newTask) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
    }

    const removeTask = index => {
        let newTaskArray = tasks.filter((task, i) => {
            if (index === i) {
                return false
            } else {
                return true
            }
        });
        setTasks(newTaskArray);
        // The below line is the same as the above lines
        // setTasks(tasks.filter((task, i) => index !== i));
    }

    return (
        <div>
            <Input onClick={addTask} />
            <Tasks tasks={tasks} deleteTaskHandler={removeTask} />
        </div>
    )
}

export default Todolist;