import { useState } from 'react';

// Sample list of tasks with descriptions and completion status
const tasks = [
  { id: 1, description: 'Complete project report', completed: false },
  {
    id: 2,
    description: 'Prepare presentation for the meeting',
    completed: false,
  },
  { id: 3, description: 'Review pull requests', completed: true },
  { id: 4, description: 'Update project documentation', completed: false },
  { id: 5, description: 'Attend team stand-up', completed: true },
  { id: 6, description: 'Fix bugs in the application', completed: false },
  { id: 7, description: 'Conduct user testing', completed: false },
  { id: 8, description: 'Plan the next sprint', completed: false },
  { id: 9, description: 'Send out meeting minutes', completed: true },
  { id: 10, description: 'Research new technologies', completed: false },
];

// Main App component
export default function App() {
  const [tasks, setTasks] = useState([]); // State to store list of tasks

  // Adds a new task to the existing tasks array
  function handleAddTasks(task) {
    setTasks(tasks => [...tasks, task]);
  }

  return (
    <div className="app">
      <Header />
      <TaskForm onAddTasks={handleAddTasks} />
      <TaskList tasks={tasks} />
      <TaskStats />
    </div>
  );
}

// Header component for app title
function Header() {
  return <h1>Task Management App</h1>;
}

// TaskForm component to add new tasks
function TaskForm({ onAddTasks }) {
  const [description, setDescription] = useState(''); // Input state for new task

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return; // Avoid adding empty tasks

    const newTask = { id: Date.now(), description, completed: false }; // New task object
    onAddTasks(newTask); // Add task to list
    setDescription(''); // Clear input field
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Write your next task here</h3>
      <input
        type="text"
        placeholder="Enter task..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

// TaskList component to render all tasks
function TaskList({ tasks }) {
  return (
    <div className="list">
      <ul>
        {tasks.map(item => (
          <Item item={item} key={item.id} /> // Renders each task item
        ))}
      </ul>
    </div>
  );
}

// Item component for individual task display
function Item({ item }) {
  return (
    <li>
      <span style={item.completed ? { textDecoration: 'line-through' } : {}}>
        {item.description}
      </span>
      <button>❌</button> {/* Placeholder for task deletion */}
    </li>
  );
}

// TaskStats component to show summary (not yet implemented)
function TaskStats() {
  return (
    <footer className="stats">
      You have X tasks on your list, with X tasks completed (X%).
    </footer>
  );
}
