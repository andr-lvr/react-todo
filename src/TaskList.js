import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, removeTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} removeTask={removeTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
