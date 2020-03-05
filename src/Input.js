import React, { useState } from 'react';

function Input(props) {
    const [newtask, setNewtask] = useState('');

    const trackNewTask = (e) => {
        console.log(newtask);
        setNewtask(e.target.value);
    }

    return (
        <div>
            <label>Input Task: </label>
            <input type="text" name="task" onChange={trackNewTask} />
            <button onClick={(e) => {
                props.onClick(e, newtask)
            }}>Add</button>
        </div>
    )
}

export default Input;