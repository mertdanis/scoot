import Hero from "../components/Hero";
import ContentCol from "../components/ContentCol";
import ContentRow from "../components/ContentRow";

function Home() {
  return (
    <div>
      <Hero />

      <div className="flex  py-[100px]">
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

      <ContentCol
        direction={"left"}
        title={"Easy to use riding telemetry"}
        content={
          "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        }
        img={"1"}
      />
      <ContentCol
        direction={"right"}
        title={"Coming to a city near you"}
        content={
          "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        }
        img={"2"}
      />
      <ContentCol
        direction={"left"}
        title={"Easy to use riding telemetry"}
        content={
          "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        }
        img={"3"}
      />
    </div>
  );
}

export default Home;
