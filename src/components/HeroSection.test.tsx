import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders the tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText("Precision & Care")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<HeroSection />);
    expect(screen.getByText("Service-kalkylator")).toBeInTheDocument();
  });
});
