import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProfilePhoto from "../Images/profilePhoto.jpg";

const ProfileCard = () => {
  const [initialTranslate, setinitialTranslate] = useState(false);
  useEffect(() => {
    setinitialTranslate(true);
  }, []);

  return (
    <>
      <div
        className={
          "w-full grid justify-items-center transition-all duration-700 " +
          (initialTranslate ? "translate-y-0" : "translate-y-full")
        }
      >
        <div className="lg:w-1/2 w-4/5 lg:flex bg-white lg:justify-between">
          <div className="lg:w-1/2 pt-10 bg-amber-900 bg-opacity-10 grid justify-items-center gap-8">
            <img className="rounded-full w-52 h-52" src={ProfilePhoto} />
            <div className="text-2xl text-center font-bold">
              <div>Nishant</div>
              <div>Kedare</div>
            </div>
            <div className="w-16 border-2 rounded-full border-blue-500"></div>
            <div className="text-2xl font-thin">Web Developer</div>
            <div className="bg-white py-4 w-full grid justify-items-center">
              <div className="flex justify-between gap-8">
                <a
                  href="https://www.linkedin.com/in/nishant-kedare-23b25b259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-8 w-8 hover:scale-150 transition-all duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5109 8.79565V10.4934C12.8664 9.95068 13.3563 9.51003 13.9326 9.21466C14.509 8.91928 15.1519 8.77932 15.7984 8.8085C19.2533 8.8085 20 10.9686 20 13.7785V19.5H16.8V14.4283C16.8 13.2187 16.5557 11.6623 14.672 11.6623C12.8448 11.6623 12.5333 12.9789 12.5333 14.3384V19.5H9.34293V8.79565H12.5109Z"
                      fill="#2F2F38"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.2 6.10565C7.2 6.42322 7.10616 6.73366 6.93035 6.9977C6.75454 7.26175 6.50466 7.46755 6.21229 7.58908C5.91993 7.71061 5.59823 7.74241 5.28786 7.68045C4.97749 7.6185 4.69239 7.46557 4.46863 7.24102C4.24487 7.01646 4.09248 6.73037 4.03074 6.4189C3.96901 6.10743 4.00069 5.78459 4.12179 5.4912C4.24289 5.1978 4.44797 4.94703 4.71109 4.7706C4.97421 4.59417 5.28355 4.5 5.6 4.5C6.02435 4.5 6.43131 4.66917 6.73137 4.97028C7.03143 5.2714 7.2 5.67981 7.2 6.10565Z"
                      fill="#2F2F38"
                    />
                    <path d="M7.2 8.8085H4V19.5H7.2V8.8085Z" fill="#2F2F38" />
                  </svg>
                </a>
                <a href={`mailto:kedarenishant11111@gmail.com`}>
                  <svg
                    className="w-8 h-8 hover:scale-150 transition-all duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 pt-10 max-lg:bg-amber-900 max-lg:bg-opacity-20 grid justify-items-center max-lg:gap-3">
            <div className="text-7xl max-lg:text-5xl font-bold">Hello</div>
            <div className="text-xl font-bold">Here's who I am & what I do</div>
            <div className="flex justify-between w-full gap-6 h-min px-10">
              <Link
                to="/portfolio/resume"
                className="select-none border-2 py-1 w-1/2 text-center transition-colors duration-500 font-semibold rounded-full border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-black"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="select-none border-2 py-1 w-1/2 text-center transition-colors duration-500 font-semibold rounded-full border-black bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500"
              >
                Projects
              </Link>
            </div>
            <div className="px-6 lg:px-10 pt-6 max-lg:text-sm text-sm max-lg:text-center lg:text-left">
              Dedicated and results-driven software engineer with a strong
              background in Laravel. Committed to delivering innovative and
              efficient software solutions by leveraging my expertise in these
              technologies. My passion for problem-solving drives me to
              continuously seek the best solutions for complex challenges. I am
              eager to contribute my skills and knowledge to a dynamic team,
              delivering high-quality software products that meet and
              exceedclient expectations.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
