import React, { useState } from 'react';
import './Task.css';

const TaskItem = ({ task, removeTask, editTask, toggleTaskStatus }) => {
  const { id, title, status, priority, deadline } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const saveEdit = () => {
    editTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task ${status}`}>
      {isEditing ? (
        <>
          <input type="text" name="title" value={editedTask.title} onChange={handleEditChange} />
          <input type="text" name="status" value={editedTask.status} onChange={handleEditChange} />
          <input type="text" name="priority" value={editedTask.priority} onChange={handleEditChange} />
          <input type="date" name="deadline" value={editedTask.deadline} onChange={handleEditChange} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>Status: {status}</p>
          <p>Priority: {priority}</p>
          <p>Deadline: {deadline}</p>
          <label>
            <input
              type="checkbox"
              checked={status === 'completed'}
              onChange={() => toggleTaskStatus(id)}
            />
            Mark as {status === 'completed' ? 'New' : 'Completed'}
          </label>
          <button onClick={() => removeTask(id)}>Remove</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
