import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { StyledForm, StyledButton, StyledInput } from './style';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Add a new task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <StyledButton type="submit">Add Task</StyledButton>
    </StyledForm>
  );
};

export default TaskForm;
