import styled from 'styled-components';

export const StyledTaskItem = styled.div`
  background-color: ${({ theme }) => theme.taskBg};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.3s, background-color 0.3s;
  
  &:hover {
    border-color: ${({ theme }) => theme.borderHoverColor};
  }
`;

export const StyledCheckbox = styled.input`
  margin-right: 15px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const StyledTitle = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ theme, completed }) => (completed ? theme.textMuted : theme.text)};
  flex-grow: 1;
  margin-right: 10px;
  transition: color 0.3s;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.taskBg};
  outline: none;
  margin-right: 10px;
  
  &:focus {
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.iconSize};
  margin-left: 8px;
  transition: color 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
