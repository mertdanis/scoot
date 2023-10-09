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
      <div className="flex flex-col gap-6 py-[173px] ">
        <h1 className="text-h1 w-[60%] leading-[56px] px-[165px]">
          Scooter sharing made simple
        </h1>
        <div className="px-[260px]">
          <p className="w-[44%] leading-[25px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className="pt-[37px]">
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>

      <img
        className="absolute left-0 top-[354px]"
        src="/src/assets/patterns/line.svg"
        alt="line"
      />
      <img
        className="absolute left-[705px] top-[354px]"
        src="/src/assets/patterns/right-arrow.svg"
        alt="line"
      />
    </div>
  );
}

export default Hero;
