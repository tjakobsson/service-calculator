import { ToyotaLogo } from "./ToyotaLogo";

export function TopBar() {
  return (
    <header className="w-full bg-on-surface px-6 py-3">
      <div className="mx-auto flex max-w-5xl items-center">
        <ToyotaLogo className="h-6" />
      </div>
    </header>
  );
}
