import React, { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";
import { TaskInputForm } from "./TaskInputForm";
import { v4 as generateUniqueId } from "uuid";
import { TaskEditor } from "./TaskEditor";

export const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  useEffect(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    setTotalTasks(total);
    setCompletedTasks(completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskDescription) => {
    setTasks([
      ...tasks,
      { id: generateUniqueId(), description: taskDescription, completed: false, isEditing: false },
    ]);
  }

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const toggleEditMode = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  const updateTaskDescription = (description, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className="TodoContainer">
      <div className="stats-container">
        <h1>Todo List</h1>
        <div className="stats-numbers">
          <p id="numbers"> {completedTasks} / {totalTasks} </p>
        </div>
      </div>
      <TaskInputForm addTask={addTask} /> {/* Cambiar `addTask` a `onTaskAdd` */}
      {tasks.map((task) =>
        task.isEditing ? (
          <TaskEditor updateTaskDescription={updateTaskDescription} task={task} key={task.id} />
        ) : (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={removeTask}
            onEdit={toggleEditMode}
            onToggleComplete={toggleTaskCompletion}
          />
        )
      )}
    </div>
  );
};

