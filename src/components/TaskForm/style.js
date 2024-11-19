import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  width: 500px;
`;

export const GroupInline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 43px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  height: 35px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  width: 300px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  height: 35px;
  width: 21%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
