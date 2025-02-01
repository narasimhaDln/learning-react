import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskItem {
  description: string;
  priority: string;
  completed: boolean;
}

const AddTask: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  const addTask = (task: TaskItem) => {
    setTasks((prevTasks) => [...prevTasks, task]); // Correct way to update state
  };

  const toggleTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} filter={filter} />
    </div>
  );
};

export default AddTask;
