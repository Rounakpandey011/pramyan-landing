import bannerImg from "@/Img/Banner_Image.jpg";

const Hero = () => (
  <section
    className="relative w-full pb-14 bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(rgba(15, 81, 115, 1.55), rgb(15 81 115 / 14%)), url(${bannerImg})`,
    }}>
    {/* Top area (heading + first CTA) stays centered with container */}
    <div className="container py-16 md:py-24 text-center text-white animate-fade-in">
      <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
        Best Online Tuition Classes for <br />
        Class 9<sup>th</sup> &amp; 10<sup>th</sup> Students.
      </h1>

      <button className="mt-8 bg-brand-yellow text-accent-foreground  font-display font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
        View Fees
      </button>
    </div>

    {/* FULL-WIDTH Download Fee Structure band — edge to edge of hero */}
    <div className="w-full bg-black/20  px-6 md:px-16 py-12 md:py-16 animate-fade-in-up">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
        Download Fee Structure
      </h2>

      <form
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full"
        onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Parent's Name"
          className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
        <input
          placeholder="Mobile"
          className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
        <input
          placeholder="Email"
          className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
        <input
          placeholder="Class"
          className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
        <label className="flex items-center gap-2 text-sm text-white justify-center md:justify-start">
          <input type="checkbox" className="h-4 w-4 accent-brand-yellow" />
          Send Update on WhatsApp/Call
        </label>
      </form>

      <div className="flex justify-center mt-8">
        <button className="bg-brand-yellow font-display text-accent-foreground font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
          View Fees
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
