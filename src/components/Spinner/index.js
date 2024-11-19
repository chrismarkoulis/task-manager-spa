import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { StyledSpinner } from './style';

const Spinner = () => {
  return (
    <StyledSpinner>
      <AiOutlineLoading3Quarters />
    </StyledSpinner>
  );
};

export default Spinner;
