import React, { useState } from 'react';

export const TaskInputForm = ({ addTask }) => { // Cambiar `onTaskAdd` a `addTask`
    const [taskDescription, setTaskDescription] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (taskDescription.trim()) {
            addTask(taskDescription); // Usa `addTask` aquí
            setTaskDescription('');
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="TaskInputForm">
            <input 
                type="text" 
                value={taskDescription} 
                onChange={(event) => setTaskDescription(event.target.value)} 
                className="task-input" 
                placeholder='Enter your task here' 
            />
            <button type="submit" className='submit-btn'>Add Task</button>
        </form>
    );
};
