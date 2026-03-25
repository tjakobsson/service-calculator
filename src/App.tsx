import { useState, useCallback } from "react";
import { TopBar } from "./components/TopBar";
import { HeroSection } from "./components/HeroSection";
import { CalculatorSection } from "./components/CalculatorSection";
import { lookupInterval, type ServiceInterval } from "./lib/lookup";

export default function App() {
  const [km, setKm] = useState(1000);
  const [result, setResult] = useState<ServiceInterval>(() => lookupInterval(1000));

  const handleKmChange = useCallback((newKm: number) => {
    setKm(newKm);
    setResult(lookupInterval(newKm));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <TopBar />
      <HeroSection />
      <main className="relative z-10 -mt-10 flex flex-1 flex-col items-center px-6 pb-10">
        <div className="w-full max-w-xl">
          <CalculatorSection km={km} result={result} onKmChange={handleKmChange} />
        </div>
      </main>
    </div>
  );
}
