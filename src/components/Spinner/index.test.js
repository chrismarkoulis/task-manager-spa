import { render, screen } from "@testing-library/react";
import Spinner from "./";

describe("Spinner", () => {
  it("renders the spinner icon", () => {
    render(<Spinner />);
    
    const spinnerIcon = screen.getByTestId("spinner-icon");
    expect(spinnerIcon).toBeInTheDocument();
  });
});
