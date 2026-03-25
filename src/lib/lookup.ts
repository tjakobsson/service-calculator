import data from "../data/korstracka.json";

export interface ServiceInterval {
  månader: number;
  veckor: number;
  dagar: number;
}

interface DataEntry {
  arlig_körsträcka: number;
  månader: number;
  veckor: number;
  dagar: number;
}

const entries = data as DataEntry[];

export function lookupInterval(km: number): ServiceInterval {
  const entry = entries.find((e) => e.arlig_körsträcka === km);
  if (!entry) {
    throw new Error(`No data entry found for ${km} km`);
  }
  return {
    månader: entry.månader,
    veckor: entry.veckor,
    dagar: entry.dagar,
  };
}
