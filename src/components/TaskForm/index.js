import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useSuggestions } from "../../hooks";
import { StyledForm, StyledButton, StyledInput, GroupInline } from "./style";
import SuggestionsDropdown from "../Suggestions";
import Spinner from "../Spinner";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");

  const { suggestions, loading, error, getSuggestions } = useSuggestions();

  useEffect(() => {
    if (taskTitle) {
      getSuggestions(taskTitle);
    }
  }, [taskTitle, getSuggestions]);

  useEffect(() => {
    if (taskTitle && suggestions.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [taskTitle, suggestions]);

  const handleSuggestionSelect = (suggestionTitle) => {
    addTask({
      id: Date.now(),
      title: suggestionTitle.trim(),
      completed: false,
    });
    setTaskTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <GroupInline>
        <StyledInput
          type="text"
          placeholder="Add a new task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <StyledButton type="submit">Add Task</StyledButton>
      </GroupInline>
      {loading && <Spinner />}
      {taskTitle && !loading && (
        <SuggestionsDropdown
          suggestions={suggestions}
          loading={loading}
          error={error}
          onSelect={handleSuggestionSelect}
        />
      )}
    </StyledForm>
  );
};

export default TaskForm;
