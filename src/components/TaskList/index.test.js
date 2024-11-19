import { render, screen } from "@testing-library/react";
import TaskList from "./";
import { TaskContext } from "../../context/TaskContext";
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

jest.mock('../../hooks/useDragAndDrop', () => ({
  useDragAndDrop: jest.fn(() => ({
    handleOnDragEnd: jest.fn(),
  })),
}));

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

const Wrapper = ({ children }) => (
  <TaskContext.Provider value={{ tasks }}>
    {children}
  </TaskContext.Provider>
);

describe("TaskList", () => {
  it("renders the tasks", () => {
    render(<TaskList />, { wrapper: Wrapper });
    
    tasks.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });

  it("renders the task list without crashing", () => {
    render(<TaskList />, { wrapper: Wrapper });
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
