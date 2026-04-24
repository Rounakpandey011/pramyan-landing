import icon1 from "@/Img/icon_1.png";
import icon2 from "@/Img/icon_2.png";
import icon3 from "@/Img/icon_3.png";
import icon4 from "@/Img/icon_4.png";
import icon5 from "@/Img/icon_5.png";

const features = [
  {
    icon: icon1,
    title: "True 1:1 — No Sharing, Ever",
    desc: "Every session is exclusively your child's. The tutor's full attention, every minute, every class.",
  },
  {
    icon: icon2,
    title: "Customised Study Plan",
    desc: "No cookie-cutter syllabus. We map your child's exact weaknesses and build a personalised roadmap to their target score.",
  },
  {
    icon: icon3,
    title: "Weekly Parent Updates",
    desc: "You'll always know where your child stands. We send progress reports and flag concerns proactively — so you're never guessing.",
  },
  {
    icon: icon4,
    title: "Flexible Scheduling",
    desc: "Classes happen when your child is freshest — evenings, weekends, or any time that works around school and activities.",
  },
  {
    icon: icon5,
    title: "Risk-Free First Class",
    desc: "Your first session is completely free, no card required. If it doesn't feel right, you walk away - no questions asked.",
  },
];

const BuiltForResults = () => (
  <section className="py-16 bg-brand-mint">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-navy mb-10">
        Built for Results, Not Just Classes
      </h2>

      {/* First row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
        {features.slice(0, 3).map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={i * 80} />
        ))}
      </div>

      {/* Second row: 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {features.slice(3).map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={(i + 3) * 80} />
        ))}
      </div>
    </div>
  </section>
);

type FeatureCardProps = {
  icon: string;
  title: string;
  desc: string;
  delay: number;
};

const FeatureCard = ({ icon, title, desc, delay }: FeatureCardProps) => (
  <div
    className="border border-black rounded-md p-5 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms`, opacity: 0 }}>
    <div className="flex items-center gap-3 mb-2">
      <img
        src={icon}
        alt=""
        className="h-10 w-10 object-contain flex-shrink-0"
      />
      <h3 className="font-display text-base font-semibold text-[#08bfcc]">
        {title}
      </h3>
    </div>
    <p className="text-sm text-navy leading-relaxed">{desc}</p>
  </div>
);

export default BuiltForResults;
