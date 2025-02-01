import React from "react";

interface TaskProps {
  task: {
    description: string;
    priority: "Low" | "Medium" | "High";
    completed: boolean;
  };
  toggleTask: () => void;
}

const Task:React.FC<TaskProps> = ({ task, toggleTask }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      {task.description} - <strong>{task.priority}</strong>
    </li>
  );
};

export default Task;
