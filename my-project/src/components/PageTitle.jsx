import bg1 from "../assets/imgs/about-hero-desktop.jpg";
import bg2 from "../assets/imgs/careers-locations-hero-desktop.jpg";

function PageTitle({ title, page }) {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundImage: `${page === "about" ? `url(${bg2}` : `url(${bg1}`} )`,
      }}
    >
      <h1 className="sm:text-h1 flex justify-center py-[60px] text-h3 text-white sm:py-[72px] sm:px-[165px]">
        {title}
      </h1>
    </div>
  );
}

export default PageTitle;
