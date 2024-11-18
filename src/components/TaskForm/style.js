import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
