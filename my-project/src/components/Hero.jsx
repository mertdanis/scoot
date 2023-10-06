import Button from "./Button";

function Hero() {
  return (
    <div className="h-screen bg-home-hero relative bg-fit	 text-white">
      <div className="mt-6">
        <h2 className="text-4xl">Scooter sharing made simple</h2>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
      </div>

      <img
        className="absolute left-0 top-60"
        src="/src/assets/patterns/line.svg"
        alt="line"
      />
      <img
        className="absolute left-60 top-60"
        src="/src/assets/patterns/right-arrow.svg"
        alt="line"
      />
      <Button>Get Scootin</Button>
    </div>
  );
}

export default Hero;
