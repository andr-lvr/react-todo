import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React project', status: 'pending', priority: 'high', deadline: '2024-11-10' },
    { id: 2, title: 'Buy groceries', status: 'completed', priority: 'low', deadline: '2024-11-05' },
    { id: 3, title: 'Book flight tickets', status: 'pending', priority: 'medium', deadline: '2024-11-07' }
  ]);

  // Add new task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  // Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Edit task
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};

export default App;
