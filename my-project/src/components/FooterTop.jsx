function FooterTop() {
  return (
    <div className="sm:px-[250px] relative gap-[40px] flex flex-col sm:flex-row items-center justify-center h-[320px]  bg-dark_navy sm:h-[300px]">
      <div className="bg-dark_navy">
        <h2 className="sm:text-h2 sm:text-start text-center text-[32px] text-white sm:w-[60%]">
          Sign up and Scoot off today
        </h2>
      </div>
      <div className="flex  gap-6  sm:mr-[150px]">
        <img src="/src/assets/icons/app-store.svg" alt="app-store-logo" />
        <img src="/src/assets/icons/google-play.svg" alt="google-play-logo" />
      </div>
      <img
        className="absolute bottom-0 right-48"
        src="/src/assets/patterns/semi-circles.svg"
        alt="circle"
      />
    </div>
  );
}

export default FooterTop;
