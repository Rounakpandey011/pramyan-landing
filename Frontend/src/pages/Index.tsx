import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyPramyan from "@/components/landing/WhyPramyan";
import BuiltForResults from "@/components/landing/BuiltForResults";
import Subjects from "@/components/landing/Subjects";
import ParentsSpeak from "@/components/landing/ParentsSpeak";
import Stats from "@/components/landing/Stats";
import FAQs from "@/components/landing/FAQs";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <Hero />
    <WhyPramyan />
    <BuiltForResults />
    <Subjects />
    <ParentsSpeak />
    <Stats />
    <FAQs />
    <FooterCTA />
  </main>
);

export default Index;
