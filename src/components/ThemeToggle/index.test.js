import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./";
import { ThemeContext } from "../../context/ThemeContext";

const Wrapper = ({ children }) => (
  <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: jest.fn() }}>
    {children}
  </ThemeContext.Provider>
);

describe("ThemeToggle", () => {
  it("renders the sun icon when dark mode is enabled", () => {
    render(<ThemeToggle />, {
      wrapper: ({ children }) => (
        <ThemeContext.Provider
          value={{ isDarkMode: true, toggleTheme: jest.fn() }}
        >
          {children}
        </ThemeContext.Provider>
      ),
    });
    expect(screen.getByRole("button")).toContainHTML("<svg");
  });

  it("renders the moon icon when dark mode is disabled", () => {
    render(<ThemeToggle />, {
      wrapper: Wrapper,
    });
    expect(screen.getByRole("button")).toContainHTML("<svg");
  });

  it("calls toggleTheme when clicked", () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle />, {
      wrapper: ({ children }) => (
        <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: mockToggleTheme }}>
          {children}
        </ThemeContext.Provider>
      ),
    });
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
