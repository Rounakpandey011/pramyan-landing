import { Play } from "lucide-react";
import parentsImg from "@/Img/Image_1.jpg";

const ParentsSpeak = () => (
  <section className="py-16 bg-brand-navy">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
        What Parents Speak About Pramyan?
      </h2>

      {/* Video / testimonial card */}
      <div className="relative max-w-2xl mx-auto rounded-md overflow-hidden shadow-xl bg-black aspect-video group cursor-pointer animate-scale-in">
        {/*
          Replace the <img> below with a <video> tag when you have the real video file:
          <video
            src="/videos/parents-speak.mp4"
            poster={parentsImg}
            controls
            className="w-full h-full object-cover"
          />
        */}
        <img
          src={parentsImg}
          alt="Parents testimonial video"
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
            <Play
              className="h-7 w-7 text-brand-teal ml-1"
              fill="currentColor"
            />
          </div>
        </div>
      </div>

      <button className="mt-10 bg-brand-yellow font-display text-accent-foreground font-semibold px-10 py-3 rounded-md shadow-lg hover:scale-105 transition-transform">
        View Fees
      </button>
    </div>
  </section>
);

export default ParentsSpeak;
