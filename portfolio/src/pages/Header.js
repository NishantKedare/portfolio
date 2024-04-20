import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [moreOptionsButton, setmoreOptionsButton] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className={
          "fixed flex relative justify-between bg-opacity-20 py-8 px-5 lg:px-14 transition-colors duration-200 " +
          (moreOptionsButton ? "bg-amber-900" : "bg-white")
        }
      >
        <div className="flex justify-between">
          <div className="h-3 w-3 mr-2 mt-2 bg-blue-600"></div>
          <div className="lg:flex lg:gap-2 lg:justify-between">
            <div className="font-bold text-xl">Nishant Kedare</div>
            <div className="font-thin text-xl max-lg:text-base">
              {" "}
              <span className="max-lg:hidden">/</span> Web Developer
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6 font-thin max-lg:hidden">
          <Link
            to="/portfolio"
            className={
              "hover:text-blue-500 select-none " +
              (currentPath == "/portfolio" ? "text-blue-500" : "")
            }
          >
            About Me
          </Link>
          <Link
            to="/portfolio/resume"
            className={
              "hover:text-blue-500 select-none " +
              (currentPath == "/portfolio/resume" ? "text-blue-500" : "")
            }
          >
            Resume
          </Link>
          <Link
            to="/portfolio/projects"
            className={
              "hover:text-blue-500 select-none " +
              (currentPath == "/portfolio/projects" ? "text-blue-500" : "")
            }
          >
            Projects
          </Link>
          <Link
            to="/portfolio/contact"
            className={
              "hover:text-blue-500 select-none " +
              (currentPath == "/portfolio/contact" ? "text-blue-500" : "")
            }
          >
            Contact
          </Link>
        </div>
        <div
          className={
            "lg:hidden grid grid-rows-3 gap-0.5 " +
            (moreOptionsButton ? "py-4" : "py-3")
          }
          onClick={() => {
            setmoreOptionsButton(!moreOptionsButton);
          }}
        >
          <div
            className={
              "border-2 transition-transform transition-colors duration-200 rounded-full h-0 w-5 " +
              (moreOptionsButton
                ? "-rotate-[315deg] border-black w-4"
                : "border-blue-500")
            }
          ></div>
          <div
            className={
              "border-2 transition-transform transition-colors duration-200 rounded-full h-0 w-10 " +
              (moreOptionsButton
                ? "-rotate-45 border-black w-8"
                : "border-blue-500")
            }
          ></div>
          <div
            className={
              "border-2 transition-transform transition-colors duration-200 rounded-full h-0 w-5 justify-self-end " +
              (moreOptionsButton
                ? "-rotate-[315deg] border-black w-4"
                : "border-blue-500")
            }
          ></div>
        </div>
      </div>
      <div
        className={
          "absolute z-10 w-full transition-transform duration-200 origin-top bg-white " +
          (moreOptionsButton ? "scale-y-100" : "scale-y-0")
        }
      >
        <div className="grid grid-rows-4 gap-14 py-14 justify-items-center bg-amber-900 bg-opacity-20">
          <Link
            to="/portfolio"
            onClick={() => {
              setmoreOptionsButton(!moreOptionsButton);
            }}
            className={
              "hover:text-blue-500 font-bold text-2xl select-none w-min whitespace-nowrap px-3 " +
              (currentPath == "/portfolio" ? "text-blue-500" : "")
            }
          >
            About Me
          </Link>
          <Link
            to="/portfolio/resume"
            onClick={() => {
              setmoreOptionsButton(!moreOptionsButton);
            }}
            className={
              "hover:text-blue-500 font-bold text-2xl select-none w-min px-3 " +
              (currentPath == "/portfolio/resume" ? "text-blue-500" : "")
            }
          >
            Resume
          </Link>
          <Link
            to="/portfolio/projects"
            onClick={() => {
              setmoreOptionsButton(!moreOptionsButton);
            }}
            className={
              "hover:text-blue-500 font-bold text-2xl select-none w-min px-3 " +
              (currentPath == "/portfolio/projects" ? "text-blue-500" : "")
            }
          >
            Projects
          </Link>
          <Link
            to="/portfolio/contact"
            onClick={() => {
              setmoreOptionsButton(!moreOptionsButton);
            }}
            className={
              "hover:text-blue-500 font-bold text-2xl select-none w-min px-3 " +
              (currentPath == "/portfolio/contact" ? "text-blue-500" : "")
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
