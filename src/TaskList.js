import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, editTask, toggleTaskStatus }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          editTask={editTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
