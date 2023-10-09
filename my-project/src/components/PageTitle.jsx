import bg1 from "../assets/imgs/about-hero-desktop.jpg";

function PageTitle({ title, page }) {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundImage: `url(${bg1})`,
      }}
    >
      <h1 className="text-h1 text-white py-[72px] px-[165px]">{title}</h1>
    </div>
  );
}

export default PageTitle;
