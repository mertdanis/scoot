import Button from "./Button";

function ContentDirection({ title, content, direction, children, button }) {
  return (
    <>
      {direction === "left" ? (
        <div className="flex  sm:flex-row flex-col   relative ">
          <div className="block sm:hidden mb-6">{children}</div>
          <div className="flex  items-center ">
            <div className="flex flex-col gap-6">
              <h2 className=" sm:text-h2 text-[32px] sm:w-[45%]">{title}</h2>
              <p className="sm:w-[45%]">{content}</p>
              {button ? (
                <div className="w-[180px]">
                  <Button>Learn More</Button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="hidden sm:block">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex sm:flex-row flex-col justify-between   relative    items-center">
          <div className="my-6">{children}</div>

          <div className="flex  flex-col sm:w-[30%]  gap-6">
            <h2 className=" sm:text-h2 text-[32px] ">{title}</h2>
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
