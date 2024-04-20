import { useEffect } from "react";
import { useState } from "react";
const ProjectBody = () => {
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
              <div className="text-4xl font-bold">Projects</div>
            </div>
          </div>
          <div
            className={
              "mt-16  py-14 pr-12 bg-white lg:flex lg:justify-between lg:gap-10 transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="lg:w-1/2 flex justify-between">
              <div className="border-8 border-blue-500 w-2 h-14"></div>
              <div className="w-full px-8">
                <div className="text-blue-500 whitespace-nowrap font-bold text-xl">
                  Diwan Auto Care
                </div>
                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Roles Performed:
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Integerating Clients ERP API with the CRM</li>
                  <li>Bug fixes related to workflow of the CRM</li>
                  <li>Created Modules for CRM</li>
                </ul>

                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Tech Stack -
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Laravel</li>
                  <li>Postgres Sql</li>
                  <li>Jquery</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 max-lg:mt-6 text-sm max-lg:pl-12">
              <div>
                Diwan Auto Care is a family-owned business that knows the
                meaning of value. For more than 40 years, we’ve met the needs of
                different generations with our traditions of honesty, expertise
                and quality – having you and your family, come to us for the
                life of your vehicle. Previously known as Tyre Best, Battery
                Best Sales-N-Service and Auto Care Centre have mergered in April
                2019 and become Diwan Auto Care LLP with more than 50 team
                members ready to serve you. We’ve served Thane west Side,
                meeting the Tyre, Battery and auto repair needs of customers
                from Thane & Bhiwandi as well as the surrounding areas. See our
                experienced team today!
              </div>
            </div>
          </div>

          <div
            className={
              "mt-16  py-14 pr-12 bg-white lg:flex lg:justify-between lg:gap-10 transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="lg:w-1/2 flex justify-between">
              <div className="border-8 border-blue-500 w-2 h-14"></div>
              <div className="w-full px-8">
                <div className="text-blue-500 font-bold text-xl">
                  Chatgpt PDF analyzer- A Web Application for analyzing the
                  uploaded PDF
                </div>
                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Roles Performed:
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Created Laravel Application</li>
                  <li>Integeration with Python API</li>
                </ul>

                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Tech Stack -
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Laravel</li>
                  <li>Python</li>
                  <li>Laravel Livewire</li>
                  <li>Tailwind Css</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 max-lg:mt-6 text-sm max-lg:pl-12">
              <div>
                Created Laravel application integrating Open AI package using
                Python for analyzing the PDF and answering the questions asked
                based on the PDF from the application.
              </div>
            </div>
          </div>

          <div
            className={
              "mt-16  py-14 pr-12 bg-white lg:flex lg:justify-between lg:gap-10 transition-all duration-700 " +
              (initialTranslate ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="lg:w-1/2 flex justify-between">
              <div className="border-8 border-blue-500 w-2 h-14"></div>
              <div className="w-full px-8">
                <div className="text-blue-500 font-bold text-xl">
                  Product Details QR Code Scanner - A Web Application to get the
                  details of a product using QR Code
                </div>
                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Roles Performed:
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Created Laravel Application</li>
                  <li>Integeration with Python API</li>
                </ul>

                <div className="whitespace-nowrap text-xl mt-4 max-lg:mt-4 font-thin">
                  Tech Stack -
                </div>
                <ul className="mt-1 pl-4 list-disc text-sm font-thin">
                  <li>Laravel</li>
                  <li>Alpine Js</li>
                  <li>Laravel Livewire</li>
                  <li>Tailwind Css</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 max-lg:mt-6 text-sm max-lg:pl-12">
              <div>
                Created Laravel application which generates a QR code which can
                be scanned through mobile devices to view details of a product
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBody;
