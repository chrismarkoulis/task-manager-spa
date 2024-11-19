import { render, screen, fireEvent } from "@testing-library/react";
import Suggestions from "./";

describe("Suggestions", () => {
  it("renders the spinner when loading", () => {
    render(<Suggestions loading={true} />);
    expect(screen.getByTestId("spinner-icon")).toBeInTheDocument();
  });

  it("renders the error message when there is an error", () => {
    const error = "Something went wrong";
    render(<Suggestions error={error} loading={false} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it("renders the no suggestions message when there are no suggestions", () => {
    render(<Suggestions suggestions={[]} loading={false} />);
    expect(screen.getByText("No suggestions found")).toBeInTheDocument();
  });

  it("renders the suggestions and handles selection", () => {
    const mockOnSelect = jest.fn();
    const mockSuggestions = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ];
    
    render(
      <Suggestions
        suggestions={mockSuggestions}
        loading={false}
        error={null}
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Task 1"));
    expect(mockOnSelect).toHaveBeenCalledWith("Task 1");
  });
});
