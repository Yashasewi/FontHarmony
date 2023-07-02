import "./Hero.css";
import Nav from "../nav/Nav";

function Hero() {
  return (
    <div>
      <div className="min-h-screen min-w-full background flex gap-y-8 flex-col justify-center  items-center">
        <Nav />
        <h1 className="text-[16rem]">FONTHARMONY</h1>
      </div>
    </div>
  );
}

export default Hero;
