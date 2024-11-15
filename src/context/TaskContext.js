import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setFilteredTasks();
  }, [tasks, searchTerm, filter]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const editTask = (id, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const setFilteredTasks = () => {
    let filtered = tasks.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === 'completed') {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === 'pending') {
      filtered = filtered.filter((task) => !task.completed);
    }

    return filtered;
  };

  const filteredTasks = setFilteredTasks();

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks,
      addTask,
      deleteTask,
      editTask,
      toggleComplete,
      handleSearch,
      handleFilter
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
