import Button from "./Button";
import heroBg from "../assets/imgs/home-hero-desktop.jpg";

function Hero() {
  return (
    <div
      style={{
        height: "650px",
        width: "100%",
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
      }}
      className=" relative 	 text-white"
    >
      <div className="flex flex-col gap-6 pt-[153px] px-[165px]">
        <h2 className="text-4xl">Scooter sharing made simple</h2>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <Button>Get Scootin</Button>
      </div>

      <img
        className="absolute left-0 top-70"
        src="/src/assets/patterns/line.svg"
        alt="line"
      />
      <img
        className="absolute right-44 top-70"
        src="/src/assets/patterns/right-arrow.svg"
        alt="line"
      />
    </div>
  );
}

export default Hero;
