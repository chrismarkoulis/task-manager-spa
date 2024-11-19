import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskForm from "./";
import { TaskContext } from "../../context/TaskContext";
import { useSuggestions } from "../../hooks";

jest.mock("../../hooks", () => ({
  useSuggestions: jest.fn(),
}));

const mockAddTask = jest.fn();

const Wrapper = ({ children }) => (
  <TaskContext.Provider value={{ addTask: mockAddTask }}>
    {children}
  </TaskContext.Provider>
);

describe("TaskForm", () => {
  beforeEach(() => {
    useSuggestions.mockReturnValue({
      suggestions: ["Task 1", "Task 2"],
      loading: false,
      error: null,
      getSuggestions: jest.fn(),
    });
  });

  afterEach(() => {
    mockAddTask.mockClear();
  });

  it("renders the form and input field", () => {
    render(<TaskForm />, { wrapper: Wrapper });

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("calls getSuggestions when typing in the input", async () => {
    render(<TaskForm />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New Task" } });

    await waitFor(() => {
      expect(useSuggestions().getSuggestions).toHaveBeenCalledWith("New Task");
    });
  });

  it("shows suggestions dropdown when taskTitle is set", () => {
    render(<TaskForm />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New" } });
  });

  it("submits the form and calls addTask", async () => {
    render(<TaskForm />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockAddTask).toHaveBeenCalledWith({
        id: expect.any(Number),
        title: "New Task",
        completed: false,
      });
    });
  });

  it("sets body overflow to hidden when suggestions exist", () => {
    render(<TaskForm />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New" } });

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("sets body overflow to auto when no suggestions are present", () => {
    useSuggestions.mockReturnValue({
      suggestions: [],
      loading: false,
      error: null,
      getSuggestions: jest.fn(),
    });

    render(<TaskForm />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "No Suggestions" } });

    expect(document.body.style.overflow).toBe("auto");
  });
});
