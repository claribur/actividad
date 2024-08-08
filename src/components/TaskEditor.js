import React, { useState } from 'react';

export const TaskEditor = ({ updateTaskDescription, task }) => {
    const [newDescription, setNewDescription] = useState(task.description);

    const handleUpdate = () => {
        updateTaskDescription(newDescription, task.id);
    };

    return (
        <div className="TaskEditor">
            <input 
                type="text" 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)} 
                className="task-input" 
            />
            <button onClick={handleUpdate} className="submit-btn">Update</button>
        </div>
    );
};
