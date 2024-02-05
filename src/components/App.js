import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterTasksByCategory = () => {
    if (selectedCategory === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filterTasksByCategory()} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
