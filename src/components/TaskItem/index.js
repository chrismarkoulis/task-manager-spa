import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { StyledTaskItem, StyledButton } from './style';

const TaskItem = ({ task }) => {
  const { deleteTask, editTask, toggleComplete } = useContext(TaskContext);

  return (
    <StyledTaskItem>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.title}</span>
      <div>
        <StyledButton onClick={() => editTask(task.id, prompt('Edit task:', task.title))}>
          Edit
        </StyledButton>
        <StyledButton onClick={() => deleteTask(task.id)}>Delete</StyledButton>
      </div>
    </StyledTaskItem>
  );
};

export default TaskItem;
