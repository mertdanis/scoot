import Button from "./Button";
import heroBg from "../assets/imgs/home-hero-desktop.jpg";
import heroBgSM from "../assets/imgs/home-hero-mobile.jpg";

function Hero() {
  return (
    <div
      style={{
        height: "650px",
        width: "100%",
        backgroundImage: `url(${heroBgSM})`,
      }}
      className=" relative 	bg-no-repeat bg-cover "
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:py-[180px] py-[110px]  ">
        <h1 className="sm:text-h1 text-h3 sm:w-[60%]  leading-[56px] sm:px-[165px] text-white">
          Scooter sharing made simple
        </h1>
        <div className="sm:px-[260px] sm:py-[15px]">
          <p className="sm:w-[40%] leading-[25px] text-white mt-3">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className="pt-[45px]">
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>

      <img
        className="sm:absolute hidden top-[380px]"
        src="/src/assets/patterns/line.svg"
        alt="line"
      />
      <img
        className="sm:absolute hidden left-[755px] top-[380px]"
        src="/src/assets/patterns/right-arrow.svg"
        alt="line"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="186"
        height="64"
        viewBox="0 0 186 64"
        fill="none"
        className="sm:absolute hidden bottom-[165px] right-0"
      >
        <circle cx="31" cy="32" r="29.5" stroke="white" stroke-width="3" />
        <circle cx="117" cy="32" r="29.5" stroke="white" stroke-width="3" />
        <circle cx="203" cy="32" r="31" fill="white" />
      </svg>
    </div>
  );
}

export default Hero;
