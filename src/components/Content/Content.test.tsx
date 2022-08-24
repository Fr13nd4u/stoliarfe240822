import React from "react";
import { render, screen } from "@testing-library/react";
import Content from ".";
import Main from "./Main";
import Left from "./Left";
import Right from "./Right";

describe("Content", () => {
  it("renders Content component", () => {
    render(<Content />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});

const defaultMainProps = {
  reload: jest.fn(),
  currentBG: "string",
};

describe("Main", () => {
  it("renders Content component", () => {
    render(<Main {...defaultMainProps} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

const defaultProps = {
  currentBG: "string",
};

describe("Left", () => {
  it("renders Left component", () => {
    render(<Left {...defaultProps} />);
    expect(screen.getByText(/Left/i)).toBeInTheDocument();
  });
});

describe("Right", () => {
  it("renders Right component", () => {
    render(<Right {...defaultProps} />);
    expect(screen.getByText(/Right/i)).toBeInTheDocument();
  });
});
