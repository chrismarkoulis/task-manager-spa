import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './context/ThemeContext';
import { TaskForm, SearchBar, TaskList, ThemeToggle } from './components';
import { StyledAppContainer, StyledTitle } from './styles/AppStyles';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledAppContainer>
        <StyledTitle>my Task Manager</StyledTitle>
        <ThemeToggle />
        <TaskForm />
        <SearchBar />
        <TaskList />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
