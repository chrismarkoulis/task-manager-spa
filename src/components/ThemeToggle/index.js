import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledToggle } from './style';
import { FaSun, FaMoon } from 'react-icons/fa';


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledToggle onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </StyledToggle>
  );
};

export default ThemeToggle;
