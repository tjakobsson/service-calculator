import { describe, it, expect } from "vitest";
import { validateInput } from "./validate";

describe("validateInput", () => {
  it("accepts 1000 as valid", () => {
    const result = validateInput("1000");
    expect(result).toEqual({ valid: true, value: 1000 });
  });

  it("accepts 3000 as valid", () => {
    const result = validateInput("3000");
    expect(result).toEqual({ valid: true, value: 3000 });
  });

  it("accepts 5500 as valid", () => {
    const result = validateInput("5500");
    expect(result).toEqual({ valid: true, value: 5500 });
  });

  it("rounds 1550 up to 1600", () => {
    const result = validateInput("1550");
    expect(result).toEqual({ valid: true, value: 1600 });
  });

  it("rounds 1540 down to 1500", () => {
    const result = validateInput("1540");
    expect(result).toEqual({ valid: true, value: 1500 });
  });

  it("rounds 1050 up to 1100", () => {
    const result = validateInput("1050");
    expect(result).toEqual({ valid: true, value: 1100 });
  });

  it("rounds 5450 up to 5500 (standard rounding)", () => {
    const result = validateInput("5450");
    expect(result).toEqual({ valid: true, value: 5500 });
  });

  it("clamps rounded value that would exceed 5500 back to 5500", () => {
    const result = validateInput("5480");
    expect(result).toEqual({ valid: true, value: 5500 });
  });

  it("rejects value below 1000", () => {
    const result = validateInput("500");
    expect(result).toEqual({ valid: false, error: "Minsta godkända värde är 1000 km" });
  });

  it("rejects value above 5500", () => {
    const result = validateInput("6000");
    expect(result).toEqual({ valid: false, error: "Högsta godkända värde är 5500 km" });
  });

  it("rejects non-numeric input", () => {
    const result = validateInput("abc");
    expect(result).toEqual({ valid: false, error: "Endast numeriska värden accepteras" });
  });

  it("rejects empty input", () => {
    const result = validateInput("");
    expect(result).toEqual({ valid: false, error: "Endast numeriska värden accepteras" });
  });

  it("rejects whitespace-only input", () => {
    const result = validateInput("   ");
    expect(result).toEqual({ valid: false, error: "Endast numeriska värden accepteras" });
  });

  it("trims whitespace from valid input", () => {
    const result = validateInput("  2000  ");
    expect(result).toEqual({ valid: true, value: 2000 });
  });
});
