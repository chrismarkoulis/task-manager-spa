import { render, screen } from "@testing-library/react";
import TaskItem from "./";

const task = {
  id: 1,
  title: "Test Task",
  completed: false,
};

const Wrapper = ({ children }) => (
  <div>
    {children}
  </div>
);

describe("TaskItem", () => {
  it("renders the task title", () => {
    render(<TaskItem task={task} index={0} />, { wrapper: Wrapper });
    
    expect(screen.getByText(task.title)).toBeInTheDocument();
  });
});
