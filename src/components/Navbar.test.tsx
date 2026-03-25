import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders Kalkylator link", () => {
    render(<Navbar />);
    expect(screen.getByText("Kalkylator")).toBeInTheDocument();
  });

  it("renders Serviceintervall link", () => {
    render(<Navbar />);
    expect(screen.getByText("Serviceintervall")).toBeInTheDocument();
  });

  it("renders Hitta Verkstad link", () => {
    render(<Navbar />);
    expect(screen.getByText("Hitta Verkstad")).toBeInTheDocument();
  });

  it("renders account_circle icon", () => {
    render(<Navbar />);
    expect(screen.getByText("account_circle")).toBeInTheDocument();
  });

  it("renders settings icon", () => {
    render(<Navbar />);
    expect(screen.getByText("settings")).toBeInTheDocument();
  });
});
