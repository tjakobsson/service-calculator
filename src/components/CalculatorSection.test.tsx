import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CalculatorSection } from "./CalculatorSection";

const defaultResult = { månader: 12.0, veckor: 51.4, dagar: 360 };

describe("CalculatorSection", () => {
  it("renders the range slider", () => {
    render(<CalculatorSection km={1000} result={defaultResult} onKmChange={vi.fn()} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("displays the current km value", () => {
    render(<CalculatorSection km={2000} result={defaultResult} onKmChange={vi.fn()} />);
    expect(screen.getByText("2000")).toBeInTheDocument();
    expect(screen.getByText("Mil")).toBeInTheDocument();
  });

  it("displays days as primary figure", () => {
    render(<CalculatorSection km={1000} result={defaultResult} onKmChange={vi.fn()} />);
    expect(screen.getByText("360")).toBeInTheDocument();
    expect(screen.getByText("dagars serviceintervall")).toBeInTheDocument();
  });

  it("displays months and weeks in pills", () => {
    render(<CalculatorSection km={1000} result={defaultResult} onKmChange={vi.fn()} />);
    expect(screen.getByText("12.0 månader")).toBeInTheDocument();
    expect(screen.getByText("51.4 veckor")).toBeInTheDocument();
  });

  it("calls onKmChange when slider moves", () => {
    const onKmChange = vi.fn();
    render(<CalculatorSection km={1000} result={defaultResult} onKmChange={onKmChange} />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "3000" } });
    expect(onKmChange).toHaveBeenCalledWith(3000);
  });

  it("displays result for 5500 km", () => {
    const result5500 = { månader: 3.3, veckor: 14.0, dagar: 98 };
    render(<CalculatorSection km={5500} result={result5500} onKmChange={vi.fn()} />);
    expect(screen.getByText("98")).toBeInTheDocument();
    expect(screen.getByText("3.3 månader")).toBeInTheDocument();
    expect(screen.getByText("14.0 veckor")).toBeInTheDocument();
  });

  it("renders the label text", () => {
    render(<CalculatorSection km={1000} result={defaultResult} onKmChange={vi.fn()} />);
    expect(screen.getByText("Årlig körsträcka")).toBeInTheDocument();
  });
});
