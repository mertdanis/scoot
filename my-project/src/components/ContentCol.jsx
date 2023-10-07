import Button from "./Button";

function ContentCol({ title, content, direction }) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-6">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="w-[180px]">
          <Button>Learn More</Button>
        </div>
      </div>
      <img
        className="my-6"
        src="/src/assets/imgs/telemetry.jpg"
        alt="telemetry-img"
      />
    </div>
  );
}

export default ContentCol;
