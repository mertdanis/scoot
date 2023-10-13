import Button from "./Button";

function ContentDirection({ title, content, direction, children, button }) {
  return (
    <>
      {direction === "left" ? (
        <div className="flex  relative ">
          <div className="flex  items-center ">
            <div className="flex flex-col gap-6">
              <h2 className=" text-h2 w-[45%]">{title}</h2>
              <p className="w-[45%]">{content}</p>
              {button ? (
                <div className="w-[180px]">
                  <Button>Learn More</Button>
                </div>
              ) : (
                ""
              )}
            </div>
            {children}
          </div>
        </div>
      ) : (
        <div className="flex justify-between   relative    items-center">
          {children}

          <div className="flex flex-col w-[30%]  gap-6">
            <h2 className=" text-h2 ">{title}</h2>
            <p className="">{content}</p>
            {button ? (
              <div className="w-[180px]">
                <Button>Learn More</Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContentDirection;
