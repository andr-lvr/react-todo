import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React project', status: 'pending', priority: 'high', deadline: '2024-11-10' },
    { id: 2, title: 'Buy groceries', status: 'completed', priority: 'low', deadline: '2024-11-05' },
    { id: 3, title: 'Book flight tickets', status: 'pending', priority: 'medium', deadline: '2024-11-07' }
  ]);

  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [sortBy, setSortBy] = useState('');

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

  // Toggle task status between pending and completed
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
    ));
  };

  // Handle sorting
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'deadline') {
      return new Date(a.deadline) - new Date(b.deadline);
    }
    return 0; // No sorting
  });

  // Handle filtering
  const filteredTasks = sortedTasks.filter(task => {
    return (
      (!filterPriority || task.priority === filterPriority) &&
      (task.title.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilterPriority(e.target.value)} value={filterPriority}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">No Sorting</option>
          <option value="deadline">Sort by Deadline</option>
        </select>
      </div>

      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        editTask={editTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
};

export default App;
