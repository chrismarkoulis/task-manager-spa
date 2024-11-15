import styled from 'styled-components';

export const StyledTaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  span {
    flex-grow: 1;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  }
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
