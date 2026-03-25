import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero section", () => {
    render(<App />);
    expect(screen.getByText("Service-kalkylator")).toBeInTheDocument();
  });

  it("renders the calculator with default 1000 km showing 360 days", () => {
    render(<App />);
    expect(screen.getByText("360")).toBeInTheDocument();
    expect(screen.getByText("dagars serviceintervall")).toBeInTheDocument();
  });

  it("updates result when slider changes to 5500", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "5500" } });
    expect(screen.getByText("98")).toBeInTheDocument();
    expect(screen.getByText("3.3 månader")).toBeInTheDocument();
    expect(screen.getByText("14.0 veckor")).toBeInTheDocument();
  });

  it("updates result when slider changes to 2000", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "2000" } });
    expect(screen.getByText("270")).toBeInTheDocument();
    expect(screen.getByText("9.0 månader")).toBeInTheDocument();
  });
});
