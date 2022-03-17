import React from "react";

function Main({ toHome }) {
  return (
    <>
      <div ref={toHome} className="h-[20px] sm:h-[80px]"></div>
      <div className="main_bg  p-4 w-full  sm:mb-0 sm:h-[80%] ">
        <div className=" mx-auto w-[90%] mt-20 sm:mt-0  sm:h-[80vh] ">
          <div className=" mt-4 md:mt-12 ">
            {/* <img className="w-[70%]" src="./imgs/text-v1.svg" alt="" /> */}
            <img
              className="sm:w-[50%] my-4 rounded-lg mx-auto box1 px-4 py-2"
              src="./imgs/main_logo.png"
              alt=""
            />
            {/* <div className="text-white text-5xl mb-4">
            THE PRIME APE
            <br /> PLANET
          </div> */}
            <div className="rounded-xl mx-auto text-white bg-gradient-to-r from-[black] to-[#121212] hover:from-[#121212] hover:to-[#0000009c] italic text-center   tracking-widest  w-[90%] sm:w-[50%] lg:w-[30%] p-4 font-bold text-lg ">
              <a href="" Target="_blank">
                Mint a Sinner
              </a>
            </div>
          </div>
          <div className=" mx-auto md:w-[40%] xl:w-[35%]">
            <img
              src="./imgs/main_nft.png"
              className="w-[100%]   h-[65%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
