const stats = [
  { value: "93%", label: "of students improve their score within 8 weeks" },
  { value: "+22%", label: "average marks improvement in Class 10 boards" },
  { value: "4.9★", label: "average rating from parents after 3 months" },
  { value: "87%", label: "of students report stronger confidence in school" },
];

const Stats = () => (
  <section className="py-16 bg-brand-mint">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
        Numbers That Matter to Parents
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="bg-brand-navy text-white rounded-md p-6 shadow-md hover:-translate-y-1 transition-transform animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
            <div className="font-display text-3xl md:text-4xl font-bold text-[#0c96a0]">
              {s.value}
            </div>
            <div className="text-xs md:text-sm mt-2 text-white/85 leading-relaxed">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-brand-yellow font-display text-accent-foreground font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
        View Fees
      </button>
    </div>
  </section>
);

export default Stats;
