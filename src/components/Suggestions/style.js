import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 415px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-left: 43px;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const StyledItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.hoverText};
  }
`;

export const NoSuggestions = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.mutedText};
  text-align: center;
  font-size: 14px;
`;
