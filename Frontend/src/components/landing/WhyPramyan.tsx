import why1 from "@/Img/why_pramyan_section_1.jpg";
import why2 from "@/Img/why_pramyan_section_2.jpg";
import why3 from "@/Img/why_pramyan_section_3.jpg";
import why4 from "@/Img/why_pramyan_section_4.jpg";
import why5 from "@/Img/why_pramyan_section_5.jpg";

const items = [
  { title: "SWOT-Based Study Plans", img: why1 },
  { title: "Skilled & Verified Tutors", img: why2 },
  { title: "Dedicated Academic Support", img: why3 },
  { title: "Structured Learning Paths", img: why4 },
  { title: "Skill Development Courses", img: why5 },
];

const WhyPramyan = () => (
  <section className="py-16 bg-brand-white">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
        Why Pramyan?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white animate-fade-in-up border-b-4 border-[#0C96A0]"
            style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
            <img
              src={it.img}
              alt={it.title}
              className="w-full h-40 md:h-44 object-fill"
            />
            <div className="bg-brand-deep text-white text-xs md:text-sm font-semibold py-3 px-2 min-h-[56px] flex items-center justify-center">
              {it.title}
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

export default WhyPramyan;
