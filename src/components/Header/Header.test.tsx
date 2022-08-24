import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("renders Header component", () => {
    render(<Header />);
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  });
});
