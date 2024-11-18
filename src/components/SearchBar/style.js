import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  margin-bottom: 20px;
  input {
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.border};;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
`;
