export function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-xl px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex gap-6">
          <a href="#kalkylator" className="font-body text-sm font-medium text-primary">
            Kalkylator
          </a>
          <a href="#serviceintervall" className="font-body text-sm font-medium text-on-surface-variant">
            Serviceintervall
          </a>
          <a href="#verkstad" className="font-body text-sm font-medium text-on-surface-variant">
            Hitta Verkstad
          </a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-on-surface-variant">
            account_circle
          </span>
          <span className="material-symbols-outlined text-on-surface-variant">
            settings
          </span>
        </div>
      </div>
    </nav>
  );
}
