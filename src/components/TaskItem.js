import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const TaskItem = ({ task, onDelete, onEdit, onToggleComplete }) => {
  return (
    <div className="TaskItem">
        <p 
            className={`task-text ${task.completed ? "completed" : "incomplete"}`} 
            onClick={() => onToggleComplete(task.id)}
        >
            {task.description}
        </p>
        <div className="actions">
            <FontAwesomeIcon 
                className="edit-icon" 
                icon={faEdit} 
                onClick={() => onEdit(task.id)} 
            />
            <FontAwesomeIcon 
                className="delete-icon" 
                icon={faTrashAlt} 
                onClick={() => onDelete(task.id)} 
            />
        </div>
    </div>
  );
};
