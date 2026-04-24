import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the demo class truly free? Any hidden charges?",
    a: "Completely free. No credit card, no registration fee. We believe in earning your trust before asking for anything. You pay only if you decide to continue after the demo.",
  },
  {
    q: "How is this different from a regular batch tuition?",
    a: "Pramyan is true 1:1 — your child gets the tutor's undivided attention, with a study plan personalised to their weaknesses and target score.",
  },
  {
    q: "What if my child doesn't get along with the tutor?",
    a: "We'll switch tutors immediately, no questions asked. Your child's comfort and progress come first.",
  },
  {
    q: "Which boards and classes do you cover?",
    a: "We cover CBSE and ICSE for Class 9 and Class 10, across all core subjects.",
  },
  {
    q: "How do classes happen? What equipment does my child need?",
    a: "Classes happen live online. All you need is a laptop or tablet with a stable internet connection.",
  },
  {
    q: "How soon can we start after booking the demo?",
    a: "Most students start regular classes within 48 hours of completing the demo.",
  },
];

const FAQs = () => (
  <section className="py-16 bg-brand-mint">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl  text-navy font-bold text-center text-foreground mb-10">
        FAQs
      </h2>

      <div className="bg-white rounded-md shadow-md p-4 md:p-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b last:border-0 py-1">
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:no-underline py-3">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQs;
