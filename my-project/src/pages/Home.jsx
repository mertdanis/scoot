import Hero from "../components/Hero";
import ContentRow from "../components/ContentRow";
import ContentDirection from "../components/ContentDirection";

function Home() {
  return (
    <div>
      <Hero />

      <div className="flex  mt-[100px] mb-[200px] gap-[30px] mx-[165px]">
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
      <div className="flex  flex-col gap-[70px] px-[165px] mb-[100px]">
        <ContentDirection
          direction={"left"}
          title={"Easy to use riding telemetry"}
          content={
            "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          }
          img={"1"}
        >
          <img className="rounded-full" src="/src/assets/imgs/telemetry.jpg" />
        </ContentDirection>
        <ContentDirection
          direction={"right"}
          img={"2"}
          title={"Coming to a city near you"}
          content={
            "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          }
        >
          <img className="rounded-full" src="/src/assets/imgs/near-you.jpg" />
        </ContentDirection>
        <ContentDirection
          direction={"left"}
          img={"3"}
          title={"Easy to use riding telemetry"}
          content={
            "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          }
        >
          <img className="rounded-full" src="/src/assets/imgs/payments.jpg" />
        </ContentDirection>
      </div>
    </div>
  );
}

export default Home;
