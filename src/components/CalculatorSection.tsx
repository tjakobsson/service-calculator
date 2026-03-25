import type { ServiceInterval } from "../lib/lookup";

function formatDecimal(n: number): string {
  return n.toFixed(1);
}

interface CalculatorSectionProps {
  km: number;
  result: ServiceInterval;
  onKmChange: (km: number) => void;
}

export function CalculatorSection({ km, result, onKmChange }: CalculatorSectionProps) {
  return (
    <section id="kalkylator">
      <div className="rounded-2xl bg-white/80 p-8 shadow-[0_20px_40px_rgba(27,28,28,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(27,28,28,0.12)]">
        <label className="mb-1 block text-sm font-medium text-on-surface">
          Årlig körsträcka
        </label>
        <p className="mb-4 text-xs text-on-surface-variant">
          Ange hur många mil du kör per år
        </p>

        <div className="mb-4 text-center">
          <span className="font-display text-2xl font-bold text-on-surface">
            {km}
          </span>
          <span className="ml-1 text-sm text-on-surface-variant">Mil</span>
        </div>

        <div className="mb-2">
          <input
            type="range"
            min={1000}
            max={5500}
            step={100}
            value={km}
            onChange={(e) => onKmChange(Number(e.target.value))}
            className="w-full"
            aria-label="Körsträcka"
          />
        </div>

        <div className="mb-6 flex justify-between text-xs text-on-surface-variant">
          <span>1000</span>
          <span>5500</span>
        </div>

        <div className="rounded-xl bg-surface-container-low p-6">
          <div className="text-center">
            <p className="font-display text-5xl font-bold text-primary">
              {result.dagar}
            </p>
            <p className="mt-1 text-sm text-on-surface-variant">
              dagars serviceintervall
            </p>
            <div className="mt-3 flex justify-center gap-4 text-sm text-on-surface-variant">
              <span className="rounded-full bg-surface-container-highest px-3 py-1">
                {formatDecimal(result.månader)} månader
              </span>
              <span className="rounded-full bg-surface-container-highest px-3 py-1">
                {formatDecimal(result.veckor)} veckor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
