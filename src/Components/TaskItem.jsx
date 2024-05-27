import React from "react";

const TaskItem = ({task, toggleComplete, deleteTask}) => {
  return (
    <div style={{display: 'flex', alignItems: "center", gap: '20px', padding: '20px'}}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <div>
        <h2
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.task}
        </h2>
        <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.desc}
        </p>
      </div>
      <button style={{width: '25px', height: '25px'}} onClick={() => deleteTask(task.id)}>🗑</button>
    </div>
  );
};

export default TaskItem;
