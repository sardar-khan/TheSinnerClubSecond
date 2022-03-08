import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import About1 from "./components/About1";
import Artist from "./components/Artist";
import Faq from "./components/Faq";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Roadmap from "./components/Roadmap";

function App() {
  const toRoad = useRef(null);
  const toFaq = useRef(null);
  const toTP = useRef(null);
  const toHome = useRef(null);

  const toRoadd = () => toRoad.current.scrollIntoView();
  const toFaqq = () => toFaq.current.scrollIntoView();
  const toTPP = () => toTP.current.scrollIntoView();
  const toHomee = () => toHome.current.scrollIntoView();
  return (
    <div className="app bg-[#103F47] w-full pb-5 ">
      {/* <img src="./imgs/bg-banner-v12.png" className="bg" alt="" /> */}
      {/* Nav */}
      <Nav toHomee={toHomee} toTPP={toTPP} toFaqq={toFaqq} toRoadd={toRoadd} />
      {/* Main */}
      <Main toHome={toHome} />
      {/* About */}
      <About1 />
      {/* <About /> */}
      <Roadmap toRoad={toRoad} />

      {/* Artist */}
      <Artist toTP={toTP} />
      {/* Roadmap */}
      {/* <Roadmap /> */}
      {/* Faq */}
      <Faq toFaq={toFaq} />
      <div className="w-[80%] text-white text-2xl font-bold tracking-widest mx-auto  text-center sm:text-left">
        THE SINNER
        <br />
        <span className="font-normal tracking-wide">CLUB</span>
      </div>
      <div className="mt-20 line my-2 w-full h-[1px] bg-gray-300 rounded-lg"></div>
      <div className="text:lg md:text-2xl  text-center text-white mb-4 font-light tracking-widest">
        ©COPYRIGHT-2022 THE SINNER CLUB. ALL RIGHTS RESERVED.
      </div>
      {/* <SimpleSlider /> */}
    </div>
  );
}

export default App;