const cards = [
  {
    icon: "verified",
    title: "Bevara garantin",
    description:
      "Regelbunden service hos auktoriserad Toyota-verkstad säkerställer att din garanti förblir giltig.",
  },
  {
    icon: "security",
    title: "Maximal säkerhet",
    description:
      "Utbildade tekniker inspekterar alla säkerhetskritiska komponenter vid varje servicetillfälle.",
  },
  {
    icon: "handyman",
    title: "Hitta din verkstad",
    description:
      "Boka enkelt service online hos närmaste Toyota-partner.",
    cta: "Boka nu",
  },
] as const;

export function ValueCards() {
  return (
    <section className="bg-surface-container-low py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl bg-surface-container-lowest p-6 shadow-[0_20px_40px_rgba(27,28,28,0.06)]"
          >
            <span className="material-symbols-outlined mb-3 text-3xl text-primary">
              {card.icon}
            </span>
            <h3 className="font-display text-lg font-bold text-on-surface">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-on-surface-variant">
              {card.description}
            </p>
            {"cta" in card && (
              <button className="mt-4 rounded-lg bg-gradient-to-br from-primary to-primary-dark px-5 py-2 text-sm font-medium text-on-primary transition-shadow hover:shadow-lg">
                {card.cta}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
