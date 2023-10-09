function FooterTop() {
  return (
    <div className="px-[165px] relative py-[102px] flex items-center justify-between  bg-dark_navy h-[300px]">
      <div className="bg-dark_navy">
        <h2 className="text-h2 text-white w-[60%]">
          Sign up and Scoot off today
        </h2>
      </div>
      <div className="flex gap-6 ">
        <img
          className="hover:cursor-pointer"
          src="/src/assets/icons/app-store.svg"
          alt="app-store-logo"
        />
        <img
          className="hover:cursor-pointer "
          src="/src/assets/icons/google-play.svg"
          alt="google-play-logo"
        />
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
