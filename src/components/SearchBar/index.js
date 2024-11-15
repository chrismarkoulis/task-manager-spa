import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { StyledSearchBar, StyledSelect } from './style';

const SearchBar = () => {
  const { handleSearch, handleFilter } = useContext(TaskContext);

  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search tasks..." onChange={handleSearch} />
      <StyledSelect onChange={handleFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </StyledSelect>
    </StyledSearchBar>
  );
};

export default SearchBar;
