import React from "react";

function Roadmap({ toRoad }) {
  return (
    <div
      ref={toRoad}
      className="container  mx-auto w-full my-20 z-20 "
      styles={{ backgroundImage: `url(${"./imgs/man-v1.png"})` }}
    >
      <div className=" h-[80px]"></div>

      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* <img src="./imgs/man-v1.png" className="bg" alt="" /> */}

        <div className="mb-12 text-4xl md:text-6xl text-white text-center font-bold tracking-widest ">
          ROADMAP
        </div>
        {/* <button className=" font-bold w-[70%] md:w-[30%] my-12 py-4 bg-white text-black hover:text-white hover:bg-[#0291BE] border-radius rounded-xl rounded-br-sm  relative left-[50%] translate-x-[-50%]">
          LAUNCH ROADMAP
        </button> */}

        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-[50%]"
          //   style={{ left: "50%" }}
        ></div>
        {/* <!-- right timeline --> */}
        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">1</h1>
          </div>
          <div className="box1 order-1  rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">The Story</h3>
            <p className="text-sm italic leading-snug tracking-wide text-white text-opacity-100">
              The Sinners Club comes from an idea of a group of entrepreneurs
              and investors that loathe getting comfortable with repetitive
              activities and are in search of a thrilling life and profitable
              activities. This club is not just for people who know how to live
              their life but the ambitious ones who know how to invest their
              free time
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className=" box1 order-1  rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              {" "}
              Welcome to the Sinners Club:
            </h3>
            <p className="text-sm italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              The Sinners Club is for the people that hate having an ordinary
              life and enjoy top-notch things of life, in other words: for the
              bold. Being part of this exclusive club gives you access to the
              best features, such as real estate off-market deals, private
              investments and one of the first nightlife locations in the
              Metaverse which will include profit-sharing benefits.The community
              is the core of our project, so we want to build a solid community
              that believes and trusts our mission in the long-term. If you're
              here for the short-term, this is probably not the most suitable
              project for you
            </p>
          </div>
        </div>
        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">3</h1>
          </div>
          <div className=" box1 order-1  rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Rewards and Passive Income:
            </h3>
            <p className="text-sm italic leading-snug tracking-wide text-white text-opacity-100">
              Within our 5000 NFT Collection there will be 777 special and rare
              NFTs called THE DEADLY SINNERS. These exclusive NFTs will have
              special benefits, but the greatest benefit will be that the 50% of
              the profits of our club (gambling games, horse races, inside-club
              consumables profits and more) will be split between the holders of
              the 777 Deadly Sinners as PASSIVE INCOME. If you didn’t get one of
              the Deadly Sinners, the rest of the collection will benefit from
              the 20% of the profits. <br /> <br />
              Example: If our club makes $500,000 in profit each month: <br />
              <span className="pl-2">
                - $250,000 will go to the 777 deadly sinners, or $321 per NFT{" "}
              </span>{" "}
              <br />
              <span className="pl-2">
                - $100,000 will go to the standard sinners, or $23 per NFT{" "}
              </span>
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="box1 order-1 rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Nightlife development :{" "}
            </h3>
            <p className="text-sm italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              The nightlife is the main core of this project, simply because
              this will be the place in which Sinners all over the world will
              meet to chat, drink, and play betting games, but mainly to build a
              community.
              <br /> <br />
              Our club will consist of different areas in which there will be
              different activities, including: <br />
              - Gambling hall (poker,blackjack,roulette, etc.)
              <br />
              - Horse Racing Track
              <br />
              - Wheel of Fortune
              <br />
              - NightClub
              <br />
              - Buisness Lounge
              <br />
              - VIP areas (Deadly Sinners Holders)
              <br />
              - And much more to come
              <br />
              <br />
              <br />
              Our plan is buying a 3x3 parcel in the Sandbox or Decentraland
              metaverse. The community will decide which one to buy. We will
              show our business projections.
            </p>
          </div>
        </div>

        {/* 5,6 */}

        <div className="mb-8 flex sm:justify-between items-center w-full right-timeline">
          <div className="order-1  sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto font-semibold text-lg text-white ">5</h1>
          </div>
          <div className="box1 order-1  rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Charity/Donations:
            </h3>
            <p className="text-sm italic leading-snug tracking-wide text-white text-opacity-100">
              We will give a percentage of profits to holders with student debt
              and to those entrepreneurs who need that little boost in order to
              make things happen. In this way we will contribute to empower the
              leaders of tomorrow.
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex sm:justify-between sm:flex-row-reverse items-center w-full left-timeline ">
          <div className="order-1 sm:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full ml-[-20px] mr-4 sm:mx-0">
            <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
          </div>
          <div className="box1 order-1  rounded-lg shadow-xl w-[90%] sm:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Sold out spending:
            </h3>
            <p className="text-sm italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              -Buy land in the Sandbox/Decentraland for $100,000 and develop the
              core of the project <br /> -Most importantly, we will use the
              funds to help our holders in their entrepreneurial and education
              needs and reward the trust you have put into us and the project
              itself.
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}

        {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm italic leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}

        {/* <!-- left timeline --> */}
        {/* <div className="mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm italic font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Roadmap;
