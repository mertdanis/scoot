import React from "react";
import PageTitle from "../components/PageTitle";
import ContentDirection from "../components/ContentDirection";
import ContentCol from "../components/ContentCol";
import SectionTitle from "../components/MainTitle";
import Accordion from "../components/Accordion";

function about() {
  return (
    <div>
      <PageTitle title={"About"} page={"about"} />

      <div className="my-[120px]">
        <ContentDirection
          direction={"left"}
          title={"Mobility for the digital era"}
          content={
            "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          }
        >
          <img
            className="rounded-full"
            src="/src/assets/imgs/digital-era.jpg"
          />
        </ContentDirection>

        <ContentDirection
          title={"Better urban living"}
          content={
            "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          }
          direction={"right"}
        >
          <img
            className="rounded-full"
            src="/src/assets/imgs/better-living.jpg"
          />
        </ContentDirection>
      </div>
      <SectionTitle className={"mb-[80px]"} title={"Our Values"} />
      <div className="flex items-center">
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
        <SectionTitle title={"FAQs"} />
        <div className="flex flex-col  items-start">
          <div className="flex gap-[50px]">
            <SectionTitle title={"How it works"} />
            <div className="">
              <Accordion
                title={"How do I download the app?"}
                content={
                  "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                }
              ></Accordion>
              <Accordion
                title={"Can I find a nearby Scoots?"}
                content={
                  "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. "
                }
              ></Accordion>
              <Accordion
                title={"Do I need a license to ride? "}
                content={
                  "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots. "
                }
              ></Accordion>
            </div>
          </div>
          <div className="flex gap-[50px]">
            <SectionTitle title={"Safe driving"} />
            <div className="">
              <Accordion
                title={"Should I wear a helmet?"}
                content={
                  "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
                }
              ></Accordion>
              <Accordion
                title={"How about the rules & regulations?"}
                content={
                  "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
                }
              ></Accordion>
              <Accordion
                title={"What if I damage my Scoot?"}
                content={
                  "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
                }
              ></Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
