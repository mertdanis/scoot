import Hero from "../components/Hero";
import ContentRow from "../components/ContentRow";
import ContentDirection from "../components/ContentDirection";

function Home() {
  return (
    <div>
      <Hero />

      <div className="flex sm:flex-row flex-col  my-[100px] sm:mb-[200px]  items-center justify-center gap-[30px] ">
        <ContentRow
          title={"Locate with app"}
          content={
            "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
          }
          img={"group-8"}
        />
        <ContentRow
          title={"Pick your scooter"}
          content={
            "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
          }
          img={"group-9"}
        />
        <ContentRow
          title={"Enjoy the ride"}
          content={
            "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
          }
          img={"group-10"}
        />
      </div>
      <div className="flex sm:text-start text-center flex-col sm:gap-[70px] gap-[50px]  mb-[100px]">
        <ContentDirection
          direction={"left"}
          title={"Easy to use riding telemetry"}
          content={
            "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          }
          button={true}
        >
          <img className="rounded-full" src="/src/assets/imgs/telemetry.jpg" />
          <img
            className="sm:absolute hidden -right-[200px] bottom-[38px]"
            src="/src/assets/patterns/left-downward-arrow.svg"
          />{" "}
        </ContentDirection>
        <ContentDirection
          direction={"right"}
          title={"Coming to a city near you"}
          content={
            "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          }
          button={true}
        >
          <img className="rounded-full" src="/src/assets/imgs/near-you.jpg" />
          <img
            className="sm:absolute hidden top-0 -left-[200px]"
            src="/src/assets/patterns/right-arrow.svg"
            alt=""
          />
        </ContentDirection>
        <ContentDirection
          direction={"left"}
          title={"Zero hassle payments"}
          content={
            "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          }
          button={true}
        >
          <img className="rounded-full" src="/src/assets/imgs/payments.jpg" />
          <img
            className="sm:absolute hidden -right-[430px] bottom-[282px]"
            src="/src/assets/patterns/left-downward-arrow.svg"
            alt=""
          />
        </ContentDirection>
      </div>
    </div>
  );
}

export default Home;
