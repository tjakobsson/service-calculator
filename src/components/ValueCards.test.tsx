import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ValueCards } from "./ValueCards";

describe("ValueCards", () => {
  it("renders Bevara garantin card", () => {
    render(<ValueCards />);
    expect(screen.getByText("Bevara garantin")).toBeInTheDocument();
  });

  it("renders Maximal säkerhet card", () => {
    render(<ValueCards />);
    expect(screen.getByText("Maximal säkerhet")).toBeInTheDocument();
  });

  it("renders Hitta din verkstad card", () => {
    render(<ValueCards />);
    expect(screen.getByText("Hitta din verkstad")).toBeInTheDocument();
  });

  it("renders verified icon", () => {
    render(<ValueCards />);
    expect(screen.getByText("verified")).toBeInTheDocument();
  });

  it("renders security icon", () => {
    render(<ValueCards />);
    expect(screen.getByText("security")).toBeInTheDocument();
  });

  it("renders handyman icon", () => {
    render(<ValueCards />);
    expect(screen.getByText("handyman")).toBeInTheDocument();
  });

  it("renders Boka nu button", () => {
    render(<ValueCards />);
    expect(screen.getByRole("button", { name: "Boka nu" })).toBeInTheDocument();
  });
});
