import Button from "./Button";
import heroBg from "../assets/imgs/home-hero-desktop.jpg";

function Hero() {
  return (
    <div
      style={{
        height: "650px",
        width: "100%",
        backgroundImage: `url(${heroBg})`,
      }}
      className=" relative 	bg-no-repeat bg-cover "
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
        className="absolute left-[755px] top-[354px]"
        src="/src/assets/patterns/right-arrow.svg"
        alt="line"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="186"
        height="64"
        viewBox="0 0 186 64"
        fill="none"
        className="absolute bottom-[165px] right-0"
      >
        <circle cx="31" cy="32" r="29.5" stroke="white" stroke-width="3" />
        <circle cx="117" cy="32" r="29.5" stroke="white" stroke-width="3" />
        <circle cx="203" cy="32" r="31" fill="white" />
      </svg>
    </div>
  );
}

export default Hero;
