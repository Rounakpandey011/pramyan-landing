import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";
import thankYouBanner from "@/Img/Thank_you_Page_Banner.png";
import logo from "@/Img/Logo.png";

// Reusable external link component — always opens in new tab + safe attrs
type ExtLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const ExtLink = ({ href, className, children, ...props }: ExtLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    {...props}>
    {children}
  </a>
);

const ThankYou = () => {
  // Replace this with the real website URL when ready
  const websiteUrl = "https://pramyan.com/";

  // Set the browser tab title for this page
  useEffect(() => {
    document.title = "Thank You — Pramyan";
  }, []);

  return (
    <main className="min-h-screen bg-[#E6F7F9] flex flex-col">
      {/* Logo */}
      <div className="flex justify-center pt-6 md:pt-10 pb-2 md:pb-4">
        <img src={logo} alt="Pramyan" className="h-14 md:h-20 object-contain" />
      </div>

      {/* Hero content */}
      {/* Note: pb-40 reserves space for the desktop image which uses bottom:-160px to bleed below */}
      <section className="flex-1 flex items-center justify-center px-4 md:px-10 pt-10 pb-10 md:pb-40">
        <div className="relative w-full max-w-6xl flex items-center">
          {/* CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl px-8 py-10 md:px-14 md:py-14 w-full md:w-[60%] shadow-sm">
            <h1 className="font-display text-[40px] md:text-[52px] font-bold text-brand-navy leading-tight mb-5">
              You're All Set!
            </h1>

            <p className="text-brand-teal text-lg md:text-xl leading-relaxed max-w-md mb-8">
              Our academic expert will call you shortly to understand your
              child's needs and schedule a free demo class.
            </p>

            <ExtLink
              href="https://pramyan.com/"
              className="inline-block font-display bg-brand-yellow text-accent-foreground font-semibold text-lg px-8 py-3 rounded-md shadow-md hover:scale-105 transition">
              Visit Website
            </ExtLink>
          </div>

          {/* DESKTOP IMAGE */}
          <img
            src={thankYouBanner}
            alt="Pramyan academic expert with laptop"
            className="hidden md:block absolute right-4 bottom-[-160px] h-[420px] lg:h-[520px] object-contain"
          />
        </div>
      </section>

      {/* Teal divider */}
      <div className="h-1 bg-brand-teal w-full"></div>

      {/* Footer */}
      <footer className="bg-[#E6F7F9] py-8 md:py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-sm">
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-brand-navy text-sm md:text-base mb-3 md:mb-4 uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex items-center gap-2.5 md:gap-3">
              <ExtLink
                href="https://www.facebook.com/pramyan.thepadhailikhai"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center hover:opacity-80 transition">
                <Facebook size={16} />
              </ExtLink>
              <ExtLink
                href="https://www.youtube.com/@Pramyan"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center hover:opacity-80 transition">
                <Youtube size={16} />
              </ExtLink>
              <ExtLink
                href="https://www.instagram.com/pramyan_"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center hover:opacity-80 transition">
                <Instagram size={16} />
              </ExtLink>
              <ExtLink
                href="https://www.linkedin.com/company/pramyan/"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center hover:opacity-80 transition">
                <Linkedin size={16} />
              </ExtLink>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-brand-navy text-sm md:text-base mb-3 md:mb-4 uppercase tracking-wide">
              Programs
            </h3>
            <ul className="space-y-2 text-brand-navy">
              <li>
                <ExtLink
                  href="https://pramyan.com/#schoolconnect"
                  className="hover:text-brand-teal transition">
                  School Connect
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/#advschoolconnect"
                  className="hover:text-brand-teal transition">
                  Advanced School Connect
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/#smartconnect"
                  className="hover:text-brand-teal transition">
                  Smart School Connect
                </ExtLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-brand-navy text-sm md:text-base mb-3 md:mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 text-brand-navy">
              <li>
                <ExtLink
                  href="https://pramyan.com/"
                  className="hover:text-brand-teal transition">
                  Home
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/"
                  className="hover:text-brand-teal transition">
                  About
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/"
                  className="hover:text-brand-teal transition">
                  Become a tutor
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/contact-us"
                  className="hover:text-brand-teal transition">
                  Contact
                </ExtLink>
              </li>
              <li>
                <ExtLink
                  href="https://pramyan.com/terms&conditions"
                  className="hover:text-brand-teal transition">
                  Terms Conditions
                </ExtLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-brand-navy text-sm md:text-base mb-3 md:mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <div className="text-brand-navy space-y-3">
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-sm leading-relaxed">
                  Unit 603–604, 6th Floor, Tower B, Bhutani Alphathum, Sector
                  90, Noida, Uttar Pradesh 201305, India
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hr@pramyan.com"
                  className="hover:text-brand-teal transition">
                  hr@pramyan.com
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+917080142227"
                  className="hover:text-brand-teal transition">
                  +91-70801-42227
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ThankYou;
