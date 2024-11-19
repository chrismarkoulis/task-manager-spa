import React from "react";
import { StyledDropdown, StyledList, StyledItem, NoSuggestions } from "./style";
import Spinner from "../Spinner";

const Suggestions = ({ suggestions, error, loading, onSelect }) => {
  if (loading) {
    return (
      <StyledDropdown>
        <Spinner />
      </StyledDropdown>
    );
  }

  if (error) {
    return (
      <StyledDropdown>
        <p style={{ color: "red", padding: "10px" }}>{error}</p>;
      </StyledDropdown>
    );
  }

  if (!suggestions || suggestions.length === 0) {
    return (
      <StyledDropdown>
        <NoSuggestions>No suggestions found</NoSuggestions>
      </StyledDropdown>
    );
  }

  return (
    <StyledDropdown>
      <StyledList>
        {suggestions.map((suggestion) => (
          <StyledItem
            key={suggestion.id}
            onClick={() => onSelect(suggestion.title)}
          >
            {suggestion.title}
          </StyledItem>
        ))}
      </StyledList>
    </StyledDropdown>
  );
};

export default Suggestions;
