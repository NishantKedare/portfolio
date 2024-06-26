import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setCurrentYear(currentYear);
  }, []);

  return (
    <>
      <div className="lg:flex lg:justify-between lg:p-8 py-8">
        <div className="max-lg:hidden">
          <div>
            © {" " + currentYear + " "} by Nishant Kedare. All Rights Reserved
          </div>
          <div>Built in React and Tailwind Css</div>
        </div>
        <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 gap-8 max-lg:pr-12">
          <div>
            <div className="text-sm font-semibold text-center">Call</div>
            <div className="text-center text-xs mt-2 grid grid-cols-1 gap-1">
              <div>
                <a href={`tel:7506228972`}>7506228972</a>
              </div>
              <div>
                <a href={`tel:7999395970`}>7999395970</a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-center">Write</div>
            <div className="text-center text-xs mt-4">
              <a href={`mailto:kedarenishant11111@gmail.com`}>
                kedarenishant11111@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-center">Follow</div>
            <div className="text-center text-xs mt-4 flex justify-center">
              <a
                href="https://www.linkedin.com/in/nishant-kedare-23b25b259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
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
            </div>
          </div>
        </div>
        <div className="lg:hidden text-center mt-12">
          <div>
            © {" " + currentYear + " "} by Nishant Kedare. All Rights Reserved
          </div>
          <div>Built in React and Tailwind Css</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
