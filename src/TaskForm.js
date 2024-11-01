import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    status: 'pending',
    priority: 'low',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: '', status: 'pending', priority: 'low', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newTask.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />
      <select name="status" value={newTask.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" value={newTask.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" name="deadline" value={newTask.deadline} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
