import {
  Calculator,
  Atom,
  FlaskConical,
  Leaf,
  Languages,
  Globe2,
  Monitor,
  BookOpen,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", Icon: Calculator },
  { name: "Physics", Icon: Atom },
  { name: "Chemistry", Icon: FlaskConical },
  { name: "Biology", Icon: Leaf },
  { name: "English", Icon: Languages },
  { name: "Social Science", Icon: Globe2 },
  { name: "Computer Science", Icon: Monitor },
  { name: "Hindi", Icon: BookOpen },
];

const Subjects = () => (
  <section className="py-16 bg-brand-mint">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        All Core Subjects. Class 9 &amp; 10.
      </h2>
      <p className="text-[#08bfcc] text-sm font-semibold md:text-base mt-2 mb-10">
        CBSE and ICSE. Specialist tutors for every subject – not generalists
        doing everything.
      </p>

      <div className="flex flex-wrap justify-center gap-9 max-w-4xl mx-auto">
        {subjects.map(({ name, Icon }, i) => (
          <div
            key={name}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[hsl(210,77%,8%)] bg-rgb(255 255 255 / 0%); shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all animate-scale-in"
            style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}>
            <Icon className="h-4 w-4 text-brand-teal" />
            <span className="text-sm font-medium text-foreground">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Subjects;
