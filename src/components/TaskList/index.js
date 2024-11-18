import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem";
import { StyledTaskList } from "./style";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';


const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const { handleOnDragEnd } = useDragAndDrop();

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <StyledTaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </StyledTaskList>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
