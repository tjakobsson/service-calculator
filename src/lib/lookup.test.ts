import { describe, it, expect } from "vitest";
import { lookupInterval } from "./lookup";

describe("lookupInterval", () => {
  it("returns 12.0 months / 51.4 weeks / 360 days for 1000 km", () => {
    expect(lookupInterval(1000)).toEqual({ månader: 12.0, veckor: 51.4, dagar: 360 });
  });

  it("returns 12.0 months / 51.4 weeks / 360 days for 1500 km", () => {
    expect(lookupInterval(1500)).toEqual({ månader: 12.0, veckor: 51.4, dagar: 360 });
  });

  it("returns 9.0 months / 38.5 weeks / 270 days for 2000 km", () => {
    expect(lookupInterval(2000)).toEqual({ månader: 9.0, veckor: 38.5, dagar: 270 });
  });

  it("returns 3.3 months / 14.0 weeks / 98 days for 5500 km", () => {
    expect(lookupInterval(5500)).toEqual({ månader: 3.3, veckor: 14.0, dagar: 98 });
  });

  it("returns 6.0 months / 25.7 weeks / 180 days for 3000 km", () => {
    expect(lookupInterval(3000)).toEqual({ månader: 6.0, veckor: 25.7, dagar: 180 });
  });
});
