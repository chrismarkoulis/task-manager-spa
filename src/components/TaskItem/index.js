import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { StyledTaskItem, StyledButton, StyledInput, StyledCheckbox, StyledTitle } from './style';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

const ICON_SIZE = 20;

const TaskItem = ({ task, index }) => {
  const { deleteTask, editTask, toggleComplete } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && newTitle.trim() !== '') {
      editTask(task.id, newTitle.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      handleEdit();
    }
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <StyledTaskItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledCheckbox type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
          {isEditing ? (
            <StyledInput
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <StyledTitle completed={task.completed}>{task.title}</StyledTitle>
          )}
          <div>
            <StyledButton onClick={handleEdit}>
              {isEditing ? <FaSave size={ICON_SIZE} /> : <FaEdit size={ICON_SIZE} />}
            </StyledButton>
            <StyledButton onClick={() => deleteTask(task.id)}>
              <FaTrash size={ICON_SIZE} />
            </StyledButton>
          </div>
        </StyledTaskItem>
      )}
    </Draggable>
  );
};

export default TaskItem;
