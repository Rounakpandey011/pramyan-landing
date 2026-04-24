import mathImg from "@/Img/Image_1.jpg";
import sciImg from "@/Img/Image_2.jpg";

const subjects = [
  { name: "", img: mathImg },
  { name: "", img: sciImg },
];

const SubjectsV2 = () => (
  <section className="py-16 bg-white">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-center max-w-8xl mx-auto">
        {/* LEFT: Heading + subtitle */}
        <div className="text-left animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.3]">
            All Core Subjects.
          </h2>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.3] mt-2">
            Class 9<sup>th</sup> and 10<sup>th</sup>.
          </h2>
          <p className="text-brand-teal text-sm md:text-base font-semibold mt-5 max-w-md">
            CBSE and ICSE. Specialist tutors for every subject – not generalists
            doing everything.
          </p>
        </div>

        {/* RIGHT: 2 big subject cards */}
        <div className="grid grid-cols-2 gap-4">
          {subjects.map((s, i) => (
            <div
              key={s.name}
              className="relative rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer animate-fade-in-up aspect-[7/4]"
              style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}>
              {/* Image fills the whole card */}
              <img
                src={s.img}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
              {/* Bottom label with dark band */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-deep/95 text-white text-center font-display text-xl md:text-2xl font-bold py-3 px-2">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SubjectsV2;
