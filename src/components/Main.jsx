import React from "react";

function Main({ toHome }) {
  return (
    <div
      ref={toHome}
      className="main p-4 w-full mb-12 sm:mb-0 sm:h-screen pt-24"
    >
      <div className=" mx-auto w-[90%]   md:flex h-[100%] ">
        <div className="flex-[0.75] ">
          <img
            src="./imgs/main_nft.png"
            className="w-[100%] max-w-[500px] md:mt-20  h-[65%] md:h-[75%]"
            alt=""
          />
        </div>
        <div className="flex-[1.25] mt-4 md:mt-0 ">
          {/* <img className="w-[70%]" src="./imgs/text-v1.svg" alt="" /> */}
          <img
            className="w-[80%] my-4 rounded-lg mx-auto"
            src="./imgs/logo1.png"
            alt=""
          />
          {/* <div className="text-white text-5xl mb-4">
            THE PRIME APE
            <br /> PLANET
          </div> */}
          <button className="text-white bg-gradient-to-r from-[#0291BE] to-[#59CBFA] hover:from-[#59CBFA] hover:to-[#0291BE]   md:ml-32 px-8 py-2 md:px-12 md:py-4 tracking-widest md:text-sm text-[0.7rem] font-bold ">
            BUY YOUR SINNERS CLUB NFT'S ON OPENSEA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
