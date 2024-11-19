import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
    animation: ${rotate} 1s linear infinite;
  }
`;
