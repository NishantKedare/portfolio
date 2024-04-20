import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const ContactBody = () => {
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
              <div className="text-4xl whitespace-nowrap font-bold">
                Let's Talk
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-2">
            <div
              className={
                "mt-16  py-14 px-12 bg-white flex  items-center justify-center lg:gap-10 transition-all duration-700 " +
                (initialTranslate ? "translate-y-0" : "translate-y-full")
              }
            >
              <a
                href="https://www.linkedin.com/in/nishant-kedare-23b25b259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-12 w-12 hover:scale-150 transition-all duration-500"
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
            <div
              className={
                "mt-16  py-14 px-8 bg-white flex items-center justify-center transition-all duration-700 " +
                (initialTranslate ? "translate-y-0" : "translate-y-full")
              }
            >
              <div>
                <div>
                  <a href={`tel:7506228972`}>
                    <div className="flex justify-between gap-2 w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                        </svg>
                      </div>
                      <div>:7506228972</div>
                    </div>
                  </a>
                </div>
                <div className="mt-8">
                  <a href={`tel:7999395970`}>
                    <div className="flex justify-between gap-2 w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                        </svg>
                      </div>
                      <div>:7999395970</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={
                "mt-16  py-14 px-12 bg-white flex items-center justify-center lg:gap-10 transition-all duration-700 " +
                (initialTranslate ? "translate-y-0" : "translate-y-full")
              }
            >
              <a href={`mailto:kedarenishant11111@gmail.com`}>
                <svg
                  className="w-12 h-12 hover:scale-150 transition-all duration-500"
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
      </div>
    </>
  );
};

export default ContactBody;
