import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./";
import { TaskContext } from "../../context/TaskContext";

const mockHandleSearch = jest.fn();
const mockHandleFilter = jest.fn();

const Wrapper = ({ children }) => (
  <TaskContext.Provider
    value={{
      handleSearch: mockHandleSearch,
      handleFilter: mockHandleFilter,
      searchTerm: "",
      filter: "all",
    }}
  >
    {children}
  </TaskContext.Provider>
);

describe("SearchBar", () => {
  beforeEach(() => {
    mockHandleSearch.mockClear();
    mockHandleFilter.mockClear();
  });

  it("renders the search input and filter select elements", () => {
    render(<SearchBar />, { wrapper: Wrapper });

    expect(screen.getByPlaceholderText("Search tasks...")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("calls handleSearch when typing in the input field", () => {
    render(<SearchBar />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText("Search tasks...");
    fireEvent.change(input, { target: { value: "New Task" } });

    expect(mockHandleSearch).toHaveBeenCalled();
    expect(mockHandleSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "New Task" }),
      })
    );
  });

  it("calls handleFilter when selecting a filter option", () => {
    render(<SearchBar />, { wrapper: Wrapper });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "completed" } });

    expect(mockHandleFilter).toHaveBeenCalled();
    expect(mockHandleFilter).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "completed" }),
      })
    );
  });

  it("displays the correct value for the filter select", () => {
    render(<SearchBar />, { wrapper: Wrapper });

    const select = screen.getByRole("combobox");
    expect(select.value).toBe("all");
  });
});
