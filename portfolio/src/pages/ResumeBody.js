import ReactImage from "../Images/React.png";
import LaravelImage from "../Images/Laravel.png";
import TailwindImage from "../Images/Tailwind.png";
import PostgresImage from "../Images/Postgres.png";
import ssiLogoImage from "../Images/ssi_logo.jpg";
import jQueryImage from "../Images/jQuery.png";
import Livewire from "../Images/Livewire.png";
import Alpine from "../Images/Alpine.png";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const ResumeBody = () => {
  const [initialTranslate, setinitialTranslate] = useState(false);

  useEffect(() => {
    setinitialTranslate(true);
  }, []);
  return (
    <>
      <div className="bg-amber-900 bg-opacity-20 py-16 flex justify-center">
        <div className="lg:w-1/2 max-lg:px-4">
          <div className="w-full flex justify-center">
            <div className="w-min gap-2 flex justify-between">
              <div className="h-6 w-6 mt-3 bg-blue-600"></div>
              <div className="text-4xl font-bold">Resume</div>
            </div>
          </div>
          <div className="flex justify-between w-full mt-16 px-2">
            <div className="lg:text-2xl text-lg pt-1 font-bold">Experience</div>
            <a
              href="/portfolio/resume/Nishant_resume.pdf"
              target="_blank"
              download
              className="select-none max-lg:text-sm border-2 whitespace-nowrap py-2  w-min px-5 text-center transition-colors duration-500 font-semibold rounded-full border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-black"
            >
              Download Resume
            </a>
          </div>

          <div
            className={
              "mt-16  py-14 px-12 bg-white lg:flex lg:justify-between lg:gap-4 transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="lg:w-1/2 grid max-lg:justify-items-center lg:grid-cols-1">
              <div className="text-blue-500 whitespace-nowrap font-bold text-xl">
                Aug,2023 - Present
              </div>
              <div className="whitespace-nowrap text-2xl max-lg:mt-4 font-thin">
                Associate Web Developer
              </div>
              <div className="mt-4 whitespace-nowrap text-lg font-thin grid justify-items-start">
                <div>
                  <div className="grid justify-items-center">
                    <img className="h-16 w-16" src={ssiLogoImage} />
                  </div>
                  <div>Smart Sight Innovations</div>
                </div>
              </div>

              <div className="whitespace-nowrap mt-2 text-lg font-thin">
                Thane, Maharashtra
              </div>
            </div>
            <div className="lg:w-1/2 max-lg:mt-4 flex items-center justify-center text-center">
              <div>
                Had an Hands-on project experience based on Laravel, Postgres,
                Jquery ,Laravel Livewire and Tailwind Css.
              </div>
            </div>
          </div>

          <div
            className={
              "mt-16  py-14 px-12 bg-white lg:flex lg:justify-between lg:gap-4 transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="lg:w-1/2 grid max-lg:justify-items-center lg:grid-cols-1">
              <div className="text-blue-500 whitespace-nowrap font-bold text-xl">
                Apr,2023 - Aug,2023
              </div>
              <div className="whitespace-nowrap text-2xl max-lg:mt-4 font-thin">
                Software Trainee
              </div>
              <div className="mt-4 whitespace-nowrap text-lg font-thin grid justify-items-start">
                <div>
                  <div className="grid justify-items-center">
                    <img className="h-16 w-16" src={ssiLogoImage} />
                  </div>
                  <div>Smart Sight Innovations</div>
                </div>
              </div>

              <div className="whitespace-nowrap mt-2 text-lg font-thin">
                Thane, Maharashtra
              </div>
            </div>
            <div className="lg:w-1/2 max-lg:mt-4 flex items-center justify-center text-center">
              <div>
                Learnt Basic Fundamentals of Php, Javascript , Html, Css,
                PostgresSql, Form Submit using Ajax, etc.
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="w-min gap-2 flex justify-between">
              <div className="h-6 w-6 mt-3 bg-blue-600"></div>
              <div className="text-4xl font-bold">Skill</div>
            </div>
          </div>

          <div
            className={
              "mt-10 py-20 px-28 bg-white transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="grid gap-28 max-lg:grid-cols-1 max-lg:gap-24 lg:grid-cols-2">
              <div className="hover:scale-125 p-4 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-cyan-500">
                <img className="" src={ReactImage} />
                <div className="text-center mt-4 text-xl font-semibold text-cyan-500">
                  React Js
                </div>
              </div>
              <div className="hover:scale-125 p-4 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-red-500">
                <img src={LaravelImage} />
                <div className="text-center mt-4 text-xl font-semibold text-red-500">
                  Laravel
                </div>
              </div>
              <div className="hover:scale-125 px-4 py-6 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-cyan-500">
                <img src={TailwindImage} />
                <div className="text-center mt-4 text-xl font-semibold text-cyan-500">
                  Tailwind Css
                </div>
              </div>
              <div className="hover:scale-150 px-4 py-6 scale-125 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-blue-900">
                <img src={PostgresImage} />
                <div className="text-center mt-4 text-xl font-semibold text-blue-900">
                  Postgres Sql
                </div>
              </div>
              <div className="hover:scale-150 px-4 py-6 scale-125 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-blue-800">
                <img src={jQueryImage} />
                <div className="text-center mt-4 text-xl font-semibold text-blue-800">
                  jQuery
                </div>
              </div>
              <div className="hover:scale-150 px-4 py-6 scale-125 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-[#f96da8]">
                <img src={Livewire} />
                <div className="text-center mt-4 text-xl font-semibold text-[#f96da8]">
                  Laravel Livewire
                </div>
              </div>
              <div className="hover:scale-150 px-4 py-6 scale-125 transition-transform duration-500 hover:border-4 hover:rounded-2xl hover:border-[#76c1d2]">
                <img src={Alpine} />
                <div className="text-center mt-4 text-xl font-semibold text-[#76c1d2]">
                  Alpine js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBody;
