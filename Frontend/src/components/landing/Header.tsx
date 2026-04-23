import logoImg from "@/Img/Logo.png";

const Header = () => (
  <header className="w-full bg-background py-5 border-b border-border/40">
    <div className="container flex items-center justify-center">
      <img
        src={logoImg}
        alt="Pramyan — Unlock Your True Potential"
        className="h-16 md:h-16 w-auto object-contain"
      />
    </div>
  </header>
);

export default Header;
