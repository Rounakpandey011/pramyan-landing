import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "@/Img/Banner_Image.jpg";

type FormState = {
  parentName: string;
  mobile: string;
  email: string;
  studentClass: string;
  sendUpdates: boolean;
};

const initialForm: FormState = {
  parentName: "",
  mobile: "",
  email: "",
  studentClass: "",
  sendUpdates: false,
};

// Change this if your backend runs elsewhere
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api/leads";

const Hero = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!form.parentName || !form.mobile || !form.email || !form.studentClass) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed");
      }

      navigate("/thank-you");
    } catch (err) {
      // Even if backend fails, redirect so user isn't blocked.
      // Comment the navigate line below and uncomment setError to block on failure.
      console.error("Lead submission error:", err);
      navigate("/thank-you");

      // setError(
      //   err instanceof Error ? err.message : "Something went wrong. Try again."
      // );
    } finally {
      setSubmitting(false);
    }
  };

  return (
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

        <button
          type="button"
          onClick={() => {
            document
              .getElementById("fee-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 bg-brand-yellow text-accent-foreground font-display font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
          View Fees
        </button>
      </div>

      {/* FULL-WIDTH Download Fee Structure band — edge to edge of hero */}
      <div
        id="fee-form"
        className="w-full bg-black/20 px-6 md:px-16 py-12 md:py-16 animate-fade-in-up">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
          Download Fee Structure
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full">
          <input
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            placeholder="Parent's Name"
            required
            className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            type="tel"
            required
            className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            required
            className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <input
            name="studentClass"
            value={form.studentClass}
            onChange={handleChange}
            placeholder="Class"
            required
            className="px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
          <label className="flex items-center gap-2 text-sm text-white justify-center md:justify-start">
            <input
              name="sendUpdates"
              checked={form.sendUpdates}
              onChange={handleChange}
              type="checkbox"
              className="h-4 w-4 accent-brand-yellow"
            />
            Send Update on WhatsApp/Call
          </label>

          {error && (
            <p className="sm:col-span-2 md:col-span-5 text-center text-red-100 bg-red-900/40 py-2 rounded-md text-sm">
              {error}
            </p>
          )}

          <div className="sm:col-span-2 md:col-span-5 flex justify-center mt-4">
            <button
              type="submit"
              disabled={submitting}
              className="bg-brand-yellow font-display text-accent-foreground font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
              {submitting ? "Submitting..." : "submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
