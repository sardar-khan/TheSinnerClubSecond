import React, { useEffect, useState } from "react";

function Nav({ toHomee, toTPP, toRoadd, toFaqq }) {
  // nav Hide/show
  const [show, setShow] = useState(true);
  // const controlNavbar = () => {
  //   if (window.scrollY > 700) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <div
      className={` nav transition duration-300 ease-in-out bg-black bg-opacity-40 py-3 fixed w-full ${
        !show && "hidden"
      } `}
    >
      <div className="flex w-[80%] mx-auto text-white items-center tracking-wide text-[0.7rem] md:text-base ">
        <div className="font-bold tracking-widest mx-auto  text-center sm:mx-0 sm:text-left">
          {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
          <img
            src="./imgs/logo1.png"
            className="h-[60px] pt-2 w-[80%] sm:w-[70%] md:w-[70%] mx-auto"
            alt=""
          />
        </div>
        {/* <div className=" hidden sm:inline-block hover:text-[#0291BE] ml-auto mr-6 underline">
          ABOUT US
        </div> */}

        <div
          onClick={toHomee}
          className=" active:text-xl active:text-rose-200 cursor-pointer hidden ml-auto sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          HOME
        </div>
        <div
          onClick={toRoadd}
          className="active:text-xl active:text-rose-200 cursor-pointer hidden  sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          ROADMAP
        </div>
        <div
          onClick={toFaqq}
          className="active:text-xl active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          FAQ
        </div>
        <div
          onClick={toTPP}
          className="active:text-xl active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6"
        >
          TEAM PRESENTAION
        </div>
      </div>
    </div>
  );
}

export default Nav;
