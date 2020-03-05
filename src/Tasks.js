import React, {Component} from 'react';

function Tasks(props) {
    return (
        <ul>
            {props.tasks.map((task, i) => (
                <li key={`task-${i}`} onClick={() => props.deleteTaskHandler(i)}>{task}</li>
            ))}
        </ul>
    )
}

export default Tasks;