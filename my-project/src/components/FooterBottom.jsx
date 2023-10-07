function FooterBottom() {
  return (
    <div className="flex justify-between p-3 bg-black text-white">
      <div className="flex items-center gap-6">
        <img src="/public/logo.svg" alt="site-logo" />
        <ul className="flex  gap-3">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <a href="#">Careers</a>
          <li></li>
        </ul>
      </div>
      <div className="flex items-center gap-6 h-[24px]">
        <a href="">
          <img src="/src/assets/icons/facebook.svg" alt="facebook-logo" />
        </a>
        <a href="">
          <img src="/src/assets/icons/twitter.svg" alt="twitter-logo" />
        </a>
        <a href="">
          <img src="/src/assets/icons/instagram.svg" alt="instagram-logo" />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
