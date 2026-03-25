import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FooterSection } from "./FooterSection";

describe("FooterSection", () => {
  it("renders Toyota Originalservice title", () => {
    render(<FooterSection />);
    expect(screen.getByText("Toyota Originalservice")).toBeInTheDocument();
  });

  it("renders Hybrid-expertis tag", () => {
    render(<FooterSection />);
    expect(screen.getByText("Hybrid-expertis")).toBeInTheDocument();
  });

  it("renders Vägassistans ingår tag", () => {
    render(<FooterSection />);
    expect(screen.getByText("Vägassistans ingår")).toBeInTheDocument();
  });

  it("renders Auktoriserad personal tag", () => {
    render(<FooterSection />);
    expect(screen.getByText("Auktoriserad personal")).toBeInTheDocument();
  });

  it("renders calculate icon", () => {
    render(<FooterSection />);
    expect(screen.getByText("calculate")).toBeInTheDocument();
  });

  it("renders history_toggle_off icon", () => {
    render(<FooterSection />);
    expect(screen.getByText("history_toggle_off")).toBeInTheDocument();
  });

  it("renders storefront icon", () => {
    render(<FooterSection />);
    expect(screen.getByText("storefront")).toBeInTheDocument();
  });
});
