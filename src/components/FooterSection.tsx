const features = ["Hybrid-expertis", "Vägassistans ingår", "Auktoriserad personal"];
const bottomNav = ["calculate", "history_toggle_off", "storefront"];

export function FooterSection() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold text-on-surface">
          Toyota Originalservice
        </h2>
        <div className="mt-4 flex justify-center gap-4">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-surface-container-low px-4 py-1.5 text-xs font-medium text-on-surface-variant"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-8">
          {bottomNav.map((icon) => (
            <button
              key={icon}
              className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-2xl">
                {icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
