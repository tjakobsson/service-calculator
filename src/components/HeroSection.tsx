import heroImage from "../assets/hero.jpg";

export function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center px-8 py-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
          Precision &amp; Care
        </p>
        <h1 className="font-display text-3xl font-bold text-white">
          Service-kalkylator
        </h1>
      </div>
    </section>
  );
}
