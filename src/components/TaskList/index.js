import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem';
import { StyledTaskList } from './style';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
