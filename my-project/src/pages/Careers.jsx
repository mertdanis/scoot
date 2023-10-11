import SectionTitle from "../components/MainTitle";
import PageTitle from "../components/PageTitle";
import ContentCol from "../components/ContentCol";
import ContentDirection from "../components/ContentDirection";
import Jobs from "../components/Jobs";

function Careers() {
  return (
    <div>
      <PageTitle title={"Careers"} page={"careers"} />
      <ContentDirection
        direction={"left"}
        title={"Care to join our mission?"}
        content={
          "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        }
      >
        <img
          className="relative rounded-full"
          src="/src/assets/imgs/join-us.jpg"
        />
        <img
          className="absolute bottom-0 right-0"
          src="/src/assets/patterns/left-downward-arrow.svg"
        />
      </ContentDirection>
      <SectionTitle>Why Join us?</SectionTitle>
      <div className="flex">
        <ContentCol
          title={"Our tech"}
          content={
            "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
          }
        >
          <img
            className="relative rounded-full"
            src="/src/assets/imgs/our-tech.jpg"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            className="absolute top-[190px] left-[70px]"
          >
            <circle cx="48" cy="48" r="48" fill="#FCB72B" />
          </svg>
        </ContentCol>
        <ContentCol
          title={"Our integrity"}
          content={
            "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
          }
        >
          <img
            className="rounded-full relative"
            src="/src/assets/imgs/our-integrity.jpg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            className="absolute top-[190px] left-[70px]"
          >
            <circle cx="48" cy="48" r="48" fill="#FCB72B" />
          </svg>
        </ContentCol>
        <ContentCol
          title={"Our community"}
          content={
            "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
          }
        >
          <img
            className="relative rounded-full"
            src="/src/assets/imgs/our-community.jpg"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            className="absolute top-[190px] left-[70px]"
          >
            <circle cx="48" cy="48" r="48" fill="#FCB72B" />
          </svg>
        </ContentCol>
      </div>
      <div className="my-[50px]">
        <Jobs
          position={"General Manager"}
          location={"Jakarta, Indonesia"}
        ></Jobs>
        <Jobs position={"UI/UX Designer"} location={"Yokohama, Japan"}></Jobs>
        <Jobs
          position={"Blog Content Copywriter"}
          location={"New York, United States"}
        ></Jobs>
        <Jobs
          position={"Graphic Designer"}
          location={"New York, United States"}
        ></Jobs>
        <Jobs
          position={"Fleet Supervisor"}
          location={"Jakarta, Indonesia"}
        ></Jobs>
        <Jobs
          position={"UX Analyst"}
          location={"London, United Kingdom"}
        ></Jobs>
      </div>
    </div>
  );
}

export default Careers;
