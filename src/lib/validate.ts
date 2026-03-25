type ValidationSuccess = { valid: true; value: number };
type ValidationError = { valid: false; error: string };
export type ValidationResult = ValidationSuccess | ValidationError;

export function validateInput(raw: string): ValidationResult {
  const trimmed = raw.trim();
  const parsed = Number(trimmed);

  if (trimmed === "" || isNaN(parsed)) {
    return { valid: false, error: "Endast numeriska värden accepteras" };
  }

  if (parsed < 1000) {
    return { valid: false, error: "Minsta godkända värde är 1000 km" };
  }

  if (parsed > 5500) {
    return { valid: false, error: "Högsta godkända värde är 5500 km" };
  }

  const rounded = Math.round(parsed / 100) * 100;
  const clamped = Math.min(5500, Math.max(1000, rounded));

  return { valid: true, value: clamped };
}
