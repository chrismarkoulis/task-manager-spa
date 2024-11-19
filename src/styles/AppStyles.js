import styled from "styled-components";

export const StyledAppContainer = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;
