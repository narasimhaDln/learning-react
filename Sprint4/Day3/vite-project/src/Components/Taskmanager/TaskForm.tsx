import { useState } from "react";
import { PriorityLevels } from "./PriorityLevel";

interface Task {
  description: string;
  priority:  PriorityLevels;
  completed: boolean;
}

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<PriorityLevels>(PriorityLevels.LOW);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description.trim()) return;

    addTask({ description, priority, completed: false });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as PriorityLevels)}
      >
        {Object.values(PriorityLevels).map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
