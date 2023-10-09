import Button from "./Button";

function ContentCol({ title, content, direction, img }) {
  return (
    <>
      {direction === "left" ? (
        <div className="flex gap-[220px] items-center">
          <div className="flex flex-col gap-6">
            <h2 className=" text-h2 w-[45%]">{title}</h2>
            <p>{content}</p>
            <div className="w-[180px]">
              <Button>Learn More</Button>
            </div>
          </div>
          <img
            className="my-6 rounded-full"
            src="/src/assets/imgs/telemetry.jpg"
            alt="telemetry-img"
          />
        </div>
      ) : (
        <div className="flex gap-[220px] items-center">
          <img
            className="my-6 rounded-full"
            src="/src/assets/imgs/telemetry.jpg"
            alt="telemetry-img"
          />
          <div className="flex flex-col gap-6">
            <h2 className=" text-h2 w-[45%]">{title}</h2>
            <p>{content}</p>
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
