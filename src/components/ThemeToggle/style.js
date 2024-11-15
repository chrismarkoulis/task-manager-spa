import styled from 'styled-components';

export const StyledToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

export const StyledToggleIcon = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
