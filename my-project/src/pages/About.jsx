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

      <div className="my-[70px] flex flex-col gap-[70px]">
        <ContentDirection
          direction={"left"}
          title={"Mobility for the digital era"}
          content={
            "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          }
          button={false}
        >
          <img
            className="rounded-full relative"
            src="/src/assets/imgs/digital-era.jpg"
          />
          <img
            className="absolute bottom-[38px] -right-[200px]"
            src="/src/assets/patterns/left-upward-arrow.svg"
          />
        </ContentDirection>

        <ContentDirection
          title={"Better urban living"}
          content={
            "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          }
          direction={"right"}
          button={false}
        >
          <img
            className="rounded-full relative"
            src="/src/assets/imgs/better-living.jpg"
          />
          <img
            className="absolute top-[60px] -left-[200px]"
            src="/src/assets/patterns/right-arrow.svg"
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
            <g>
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                fill="#495567"
                dy="5px"
                fontSize={"24px"}
                fontWeight={"700"}
              >
                01
              </text>
            </g>
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
            <g>
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                fill="#495567"
                dy="5px"
                fontSize={"24px"}
                fontWeight={"700"}
              >
                02
              </text>
            </g>
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
          <div className="flex items-center justify-center">
            <div className=""></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              className="absolute top-[190px] left-[70px]"
            >
              <circle cx="48" cy="48" r="48" fill="#FCB72B" />
              <g>
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  fill="#495567"
                  dy="5px"
                  fontSize={"24px"}
                  fontWeight={"700"}
                >
                  03
                </text>
              </g>
            </svg>
          </div>
        </ContentCol>
      </div>

      <div className="my-[50px]">
        <SectionTitle title={"FAQs"} />
        <div className="flex flex-col  items-start gap-[50px] ">
          <div className="flex gap-[250px] ">
            <SectionTitle title={"How it works"} />
            <div>
              <Accordion section={1} />
            </div>
          </div>
          <div className="flex gap-[250px]">
            <SectionTitle title={"Safe driving"} />
            <div>
              <Accordion section={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
