import { NavLink } from "react-router-dom";

import Button from "../components/Button";

// import About from "../pages/About";
// import Location from "../pages/Location";
// import Careers from "../pages/Careers";

function Header() {
  return (
    <nav>
      <ul className="flex  py-[35px] px-[169px] justify-between items-center  text-white  ">
        <div className="flex items-center ">
          <NavLink className="mr-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="109"
              height="29"
              viewBox="0 0 109 29"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M107.697 23.2V28H99.2971C98.3905 28 97.6505 27.7067 97.0771 27.12C96.5038 26.5333 96.2171 25.7867 96.2171 24.88V12.96H90.3371V8.16H96.2171V0H101.257V8.16H108.417V12.96H101.257V22C101.257 22.8 101.617 23.2 102.337 23.2H107.697ZM9.71998 28.56C12.3333 28.56 14.36 27.9733 15.8 26.8C17.24 25.6267 17.96 24.0533 17.96 22.08V21.84C17.96 20.0533 17.32 18.66 16.04 17.66C14.76 16.66 13.1066 16.0533 11.08 15.84C9.31997 15.6533 8.10664 15.42 7.43998 15.14C6.77331 14.86 6.43998 14.4 6.43998 13.76C6.43998 13.3067 6.65331 12.9267 7.07998 12.62C7.50664 12.3133 8.14664 12.16 8.99998 12.16C9.93331 12.16 10.6933 12.3667 11.28 12.78C11.8666 13.1933 12.28 13.76 12.52 14.48L17.08 12.64C16.8666 12.08 16.56 11.5 16.16 10.9C15.76 10.3 15.24 9.75333 14.6 9.26C13.96 8.76667 13.18 8.36667 12.26 8.06C11.34 7.75333 10.2533 7.6 8.99998 7.6C8.03998 7.6 7.10664 7.73333 6.19998 8C5.29331 8.26667 4.49331 8.66 3.79998 9.18C3.10664 9.7 2.54664 10.3333 2.11998 11.08C1.69331 11.8267 1.47998 12.6933 1.47998 13.68V13.92C1.47998 15.8133 2.13998 17.2467 3.45998 18.22C4.77998 19.1933 6.55998 19.7733 8.79998 19.96C9.62664 20.04 10.3133 20.1467 10.86 20.28C11.4066 20.4133 11.84 20.58 12.16 20.78C12.48 20.98 12.7 21.1933 12.82 21.42C12.94 21.6467 13 21.8933 13 22.16C13 22.6133 12.7666 23.0333 12.3 23.42C11.8333 23.8067 10.9733 24 9.71998 24C8.30664 24 7.25998 23.68 6.57998 23.04C5.89998 22.4 5.45331 21.6533 5.23998 20.8L0.599976 22.32C0.733309 23.0133 0.993309 23.7267 1.37998 24.46C1.76664 25.1933 2.31998 25.86 3.03998 26.46C3.75998 27.06 4.66664 27.56 5.75998 27.96C6.85331 28.36 8.17331 28.56 9.71998 28.56ZM32.1743 28.56C35.0009 28.56 37.2609 27.84 38.9543 26.4C40.6476 24.96 41.7209 23.0667 42.1743 20.72L37.2143 19.48C36.9743 20.7867 36.4476 21.8267 35.6343 22.6C34.8209 23.3733 33.6409 23.76 32.0943 23.76C31.3743 23.76 30.6943 23.6467 30.0543 23.42C29.4143 23.1933 28.8543 22.8533 28.3743 22.4C27.8943 21.9467 27.5143 21.38 27.2343 20.7C26.9543 20.02 26.8143 19.24 26.8143 18.36V18.12C26.8143 17.24 26.9543 16.4467 27.2343 15.74C27.5143 15.0333 27.8943 14.4333 28.3743 13.94C28.8543 13.4467 29.4143 13.0667 30.0543 12.8C30.6943 12.5333 31.3743 12.4 32.0943 12.4C33.6409 12.4 34.8409 12.8267 35.6943 13.68C36.5476 14.5333 37.0543 15.5467 37.2143 16.72L42.1743 15.44C41.7209 13.0933 40.6343 11.2 38.9143 9.76C37.1943 8.32 34.9476 7.6 32.1743 7.6C30.7343 7.6 29.3809 7.84 28.1143 8.32C26.8476 8.8 25.7409 9.49333 24.7943 10.4C23.8476 11.3067 23.1076 12.4 22.5743 13.68C22.0409 14.96 21.7743 16.4 21.7743 18V18.48C21.7743 20.08 22.0409 21.5067 22.5743 22.76C23.1076 24.0133 23.8409 25.0667 24.7743 25.92C25.7076 26.7733 26.8076 27.4267 28.0743 27.88C29.3409 28.3333 30.7076 28.56 32.1743 28.56ZM58.5285 27.88C57.2885 28.3333 55.9885 28.56 54.6285 28.56C53.2685 28.56 51.9685 28.3333 50.7285 27.88C49.4885 27.4267 48.3885 26.7667 47.4285 25.9C46.4685 25.0333 45.7085 23.9667 45.1485 22.7C44.5885 21.4333 44.3085 19.9733 44.3085 18.32V17.84C44.3085 16.2133 44.5885 14.7667 45.1485 13.5C45.7085 12.2333 46.4685 11.16 47.4285 10.28C48.3885 9.4 49.4885 8.73333 50.7285 8.28C51.9685 7.82667 53.2685 7.6 54.6285 7.6C55.9885 7.6 57.2885 7.82667 58.5285 8.28C59.7685 8.73333 60.8685 9.4 61.8285 10.28C62.7885 11.16 63.5485 12.2333 64.1085 13.5C64.6685 14.7667 64.9485 16.2133 64.9485 17.84V18.32C64.9485 19.9733 64.6685 21.4333 64.1085 22.7C63.5485 23.9667 62.7885 25.0333 61.8285 25.9C60.8685 26.7667 59.7685 27.4267 58.5285 27.88ZM54.6285 23.76C53.9086 23.76 53.2285 23.64 52.5886 23.4C51.9485 23.16 51.3885 22.8133 50.9086 22.36C50.4286 21.9067 50.0485 21.3533 49.7685 20.7C49.4885 20.0467 49.3485 19.3067 49.3485 18.48V17.68C49.3485 16.8533 49.4885 16.1133 49.7685 15.46C50.0485 14.8067 50.4286 14.2533 50.9086 13.8C51.3885 13.3467 51.9485 13 52.5886 12.76C53.2285 12.52 53.9086 12.4 54.6285 12.4C55.3485 12.4 56.0285 12.52 56.6685 12.76C57.3085 13 57.8685 13.3467 58.3485 13.8C58.8285 14.2533 59.2085 14.8067 59.4885 15.46C59.7686 16.1133 59.9086 16.8533 59.9086 17.68V18.48C59.9086 19.3067 59.7686 20.0467 59.4885 20.7C59.2085 21.3533 58.8285 21.9067 58.3485 22.36C57.8685 22.8133 57.3085 23.16 56.6685 23.4C56.0285 23.64 55.3485 23.76 54.6285 23.76ZM81.2228 27.88C79.9828 28.3333 78.6828 28.56 77.3228 28.56C75.9628 28.56 74.6628 28.3333 73.4228 27.88C72.1828 27.4267 71.0828 26.7667 70.1228 25.9C69.1628 25.0333 68.4028 23.9667 67.8428 22.7C67.2828 21.4333 67.0028 19.9733 67.0028 18.32V17.84C67.0028 16.2133 67.2828 14.7667 67.8428 13.5C68.4028 12.2333 69.1628 11.16 70.1228 10.28C71.0828 9.4 72.1828 8.73333 73.4228 8.28C74.6628 7.82667 75.9628 7.6 77.3228 7.6C78.6828 7.6 79.9828 7.82667 81.2228 8.28C82.4628 8.73333 83.5628 9.4 84.5228 10.28C85.4828 11.16 86.2428 12.2333 86.8028 13.5C87.3628 14.7667 87.6428 16.2133 87.6428 17.84V18.32C87.6428 19.9733 87.3628 21.4333 86.8028 22.7C86.2428 23.9667 85.4828 25.0333 84.5228 25.9C83.5628 26.7667 82.4628 27.4267 81.2228 27.88ZM77.3228 23.76C76.6028 23.76 75.9228 23.64 75.2828 23.4C74.6428 23.16 74.0828 22.8133 73.6028 22.36C73.1228 21.9067 72.7428 21.3533 72.4628 20.7C72.1828 20.0467 72.0428 19.3067 72.0428 18.48V17.68C72.0428 16.8533 72.1828 16.1133 72.4628 15.46C72.7428 14.8067 73.1228 14.2533 73.6028 13.8C74.0828 13.3467 74.6428 13 75.2828 12.76C75.9228 12.52 76.6028 12.4 77.3228 12.4C78.0428 12.4 78.7228 12.52 79.3628 12.76C80.0028 13 80.5628 13.3467 81.0428 13.8C81.5228 14.2533 81.9028 14.8067 82.1828 15.46C82.4628 16.1133 82.6028 16.8533 82.6028 17.68V18.48C82.6028 19.3067 82.4628 20.0467 82.1828 20.7C81.9028 21.3533 81.5228 21.9067 81.0428 22.36C80.5628 22.8133 80.0028 23.16 79.3628 23.4C78.7228 23.64 78.0428 23.76 77.3228 23.76Z"
                fill="#495567"
              />
            </svg>
          </NavLink>
          <div className="flex gap-[32px] text-dim_grey font-space-mono">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/location">Location</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </div>
        </div>

        <Button>Get Scootin</Button>
      </ul>
    </nav>
  );
}

export default Header;
