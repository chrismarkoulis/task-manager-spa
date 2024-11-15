import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;