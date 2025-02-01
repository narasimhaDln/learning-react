import Task from "./Task";

interface TaskItem { // Renamed to avoid conflicts
  description: string;
  priority: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: TaskItem[];
  toggleTask: (index: number) => void;
  filter: "all" | "completed" | "incomplete"; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, filter }) => {
  if (!tasks.length) {
    return <p>No tasks available.</p>;
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div>
      <ul>
        {filteredTasks.map((task, index) => (
          <Task key={index} task={task} toggleTask={() => toggleTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
