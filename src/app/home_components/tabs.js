"use client";

import { useState, useEffect, useRef } from "react";
import Totop from "../home_components/scrollToTop";

const disabledItems = [];

const Tabs = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center px-6 pt-2 md:pt-12">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-secondary text-center text-4xl lg:text-6xl font-extrabold mt-12 pb-6 md:pb-12 tracking-wider">
            Gezinti Oluştur
          </h1>
          <p className="text-text-secondary w-full text-xs sm:text-sm md:text-md lg:text-base text-center pb-8 md:pb-16">
            Aşağıda gördüğünüz 3 çeşit Gezinti oluşturma seçeneğinden birini
            seçerek gezintinizi oluşturabilirsiniz. <br />
            (Popüler Gezinti seçeneği şimdilik aktif değildir.)
          </p>
        </div>

        <div className="rounded-t-xl flex justify-center items-end text-sm sm:text-base md:text-xl lg:text-2xl font-semibold md:font-bold">
          {items.map((item, index) => (
            <button
              ref={index === 1 ? firstBtnRef : null}
              className={`flex flex-col justify-center items-center outline-none p-1 md:p-6 w-1/3 gap-y-1 text-text-secondary text-center ${
                index === 2
                  ? "opacity-50 md:opacity-60 cursor-not-allowed flex"
                  : "opacity-80 md:opacity-90 cursor-pointer"
              }  ${
                selectedTab === index
                  ? "bg-neutral-400/10 backdrop-blur-xl opacity-100 border-b-6 border-secondary text-sm sm:text-base md:text-2xl lg:text-3xl rounded-t-xl drop-shadow-lg"
                  : "bg-secondary/20"
              } ${
                selectedTab !== index && index !== 2
                  ? "hover:bg-secondary/30"
                  : "hover:none"
              } `}
              key={index}
              onClick={function event() {
                if (index === 2) {
                  setSelectedTab(selectedTab);
                } else {
                  setSelectedTab(index);
                }
                window.scrollTo(0, 0);
              }}
            >
              <div
                className={`md:p-5 flex justify-center items-center md:mb-3  ${
                  selectedTab !== index ? "flex" : ""
                }`}
              >
                {item.icon}
              </div>
              {item.title} <br />
              Gezinti
              <div
                className={`w-4/5 md:w-full lg:w-1/2 rounded-sm sm:rounded-lg bg-gradient-to-tr from-accent to-secondary p-0.5 shadow-lg mt-1 mx-4 md:mt-4 ${
                  selectedTab !== index ? "hidden" : "flex"
                }`}
              >
                <div className="flex-1 tracking-wide text-text font-semibold text-md bg-text-secondary w-full py-1.5 md:py-3 rounded-sm sm:rounded-lg hover:bg-text-secondary/90 cursor-pointer">
                  Başla
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="bg-gradient-to-b from-text via-text/0 to-text/0 p-12 rounded-b-xl">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={index}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
