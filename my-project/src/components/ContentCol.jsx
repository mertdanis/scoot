import Button from "./Button";

function ContentCol({ title, content, direction, img }) {
  return (
    <>
      {direction === "left" ? (
        <div className="flex my-[50px] relative    items-center">
          <div className="flex  my-[50px] ">
            <div className="flex flex-col gap-6">
              <h2 className=" text-h2 w-[45%]">{title}</h2>
              <p className="w-[45%]">{content}</p>
              <div className="w-[180px]">
                <Button>Learn More</Button>
              </div>
            </div>
            {img === "1" ? (
              <img
                className="absolute right-0 bottom-[38px]"
                src="/src/assets/patterns/left-downward-arrow.svg"
              />
            ) : (
              <img
                className="absolute -right-[430px] bottom-[282px]"
                src="/src/assets/patterns/left-downward-arrow.svg"
                alt=""
              />
            )}
            {img === "1" ? (
              <img
                className="rounded-full"
                src="/src/assets/imgs/telemetry.jpg"
              />
            ) : (
              <img
                className="rounded-full"
                src="/src/assets/imgs/payments.jpg"
                alt=""
              />
            )}
            {img === "2" ? (
              <img src="/src/assets/imgs/about-hero-mobile.jpg" />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="flex relative    items-center">
          {img === "2" ? (
            <img className="rounded-full" src="/src/assets/imgs/near-you.jpg" />
          ) : (
            ""
          )}
          {img === "2" ? (
            <img
              className="absolute top-0 -left-[260px]"
              src="/src/assets/patterns/right-arrow.svg"
              alt=""
            />
          ) : (
            ""
          )}
          <div className="flex flex-col   gap-6">
            <h2 className=" text-h2 w-[45%]">{title}</h2>
            <p className="w-[45%]">{content}</p>
            <div className="w-[180px]">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentCol;
