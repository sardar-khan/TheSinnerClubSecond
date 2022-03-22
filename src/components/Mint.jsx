// import "./App.css";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

function Mint() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(false);

  const [account, setAccount] = useState("");
  const [show, setShow] = useState(true);
  const transaction = async () => {
    console.log("in");

    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = signer.sendTransaction({
        to: account,
        value: ethers.utils.parseEther("0.09"),
      });
      // console.log(addr)
      console.log(tx);

      //   let params = [
      //     {
      //       from: account[0],
      //       to: "0xDd5eB059128Eb4E8956B482eB09A196ee5333BD9",
      //       gas: Number(21000).toString(16),
      //       gasPrice: Number(2500000).toString(16),
      //       value: Number(1000000000000000000).toString(16),
      //       //   value: Number(100000).toString(16),
      //       //   value: ethers.utils.parseEther(0.2).toString(16),
      //       //   value: "0x9184e72a",
      //     },
      //   ];
      //   let result = await window.ethereum.request({
      //     method: "eth_sendTransaction",
      //     params,
      //   });
      //   console.log(result);
    } else {
      connect();
    }
  };
  const connect = async () => {
    if (window.ethereum) {
      //   alert("detected");
      setHasMetaMask(true);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length) {
          setIsConnected(true);
          setAccount(accounts[0]);
          // console.log(accounts);
        }
      } catch (e) {
        alert("Error COnnecting...");
      }
    } else {
      console.log("install Metamast extension to continue");
      setHasMetaMask(false);
    }
  };
  useEffect(async () => {
    connect();
    // if (window.ethereum) {
    //   //   alert("detected");

    //   try {
    //     const accounts = await window.ethereum.request({
    //       method: "eth_requestAccounts",
    //     });
    //     if (accounts.length) {
    //       setIsConnected(true);
    //       // setAccount(accounts);
    //     }
    //   } catch (e) {
    //     alert("Error COnnecting...");
    //   }
    // } else {
    //   console.log("install Metamast extension to continue");
    // }
    //   const provider = new ethers.providers.Web3Provider(window.ethereum);
    //   await provider.send("eth_requestAccounts", []);
    //   setIsConnected(true);
  }, []);
  if (window.ethereum) {
    // setHasMetaMask(true);

    window.ethereum.on("accountsChanged", (accounts) => {
      // If user has locked/logout fromMMetaMask, this resets the accounts array to empty
      if (!accounts.length) {
        setIsConnected(false);
        // logic to handle what happens once MetaMask is locked
      }
    });
  }

  return (
    <div className="Mint bg-black py-4  px-8 h-full md:h-screen  w-[100%]">
      <div
        className={` nav transition duration-300 ease-in-out bg-black bg-opacity-40 py-3 fixed w-full ${
          !show && "hidden"
        } `}
      >
        <div className="flex  md:w-[90%]  lg:w-[80%] mx-auto text-white items-center tracking-wide text-[0.7rem] md:text-base ">
          <div className="font-bold tracking-widest mx-auto  text-center sm:mx-0 sm:text-left">
            {/* THE SINNERS <br />
          <span className="font-normal tracking-wide mx-auto">Club</span> */}
            <Link to="/">
              <img
                src="./imgs/main_logo.png"
                className="h-[50px] pt-2 w-[80%] sm:w-[70%] md:w-[80%] "
                alt=""
              />
            </Link>
          </div>
          {/* <div className=" hidden sm:inline-block hover:text-[#0291BE] ml-auto mr-6 underline">
          ABOUT US
        </div> */}

          <div className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden ml-auto sm:inline-block hover:text-[#0291BE]  mr-6">
            <Link to="/"> HOME</Link>
          </div>

          {/* <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  sm:inline-block hover:text-[#0291BE]  mr-6">
            <Link to="/#roadmap"> ROADMAP</Link>
          </div>
          <div className="active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            TEAM PRESENTATION
          </div>
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            FAQ
          </div> */}
          <div
            className=" button  rounded-2xl py-2 mr-16 px-4 border-white border-2 bg-black text-white cursor-pointer"
            onClick={isConnected ? null : connect}
          >
            {hasMetaMask ? (
              isConnected ? (
                "Connected"
              ) : (
                "Connect"
              )
            ) : (
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
              >
                Install MetaMask
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex sm:w-[90%] mx-auto justify-between items-center">
        <Link to="/">
          <img
            src="./imgs/main_logo.png"
            className=" h-[50px] cursor-pointer pt-2 w-[70%] sm:w-[50%] md:w-[190%]"
            alt=""
          />
        </Link>
        <Link to="/">
          {" "}
          <div className=" active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden ml-auto sm:inline-block hover:text-[#0291BE]  mr-6">
            HOME
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden  sm:inline-block hover:text-[#0291BE]  mr-6">
            ROADMAP
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl min-w-[120px] md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            TEAM PRESENTATION
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div className="active:text-xl md:text-xs lg:text-lg active:text-rose-200 cursor-pointer hidden sm:inline-block hover:text-[#0291BE]  mr-6">
            FAQ
          </div>
        </Link>

        <div
          className=" button  rounded-2xl py-2 px-4 border-white border-2 bg-black text-white cursor-pointer"
          onClick={isConnected ? null : connect}
        >
          {isConnected ? "Connected" : "Connect"}
        </div>
      </div> */}

      <div className="md:flex mt-20 mx-auto w-[100%] py-20">
        <Tilt>
          <div className="md:pl-36  pt-2">
            <img
              src="./imgs/main_nft.gif"
              className="w-[60%] md:w-[80%] md:h-[100%] min-h-[350px] min-w-[300px] mx-auto "
              alt=""
            />
          </div>
        </Tilt>
        <div className=" w-[90%] md:w-[80%] mx-auto lg:pl-28 lg:pr-40 lg:py-12">
          <img
            src="./imgs/main_logo.png"
            className=" mx-auto h-[60px] w-[100%] "
            alt=""
          />
          <div
            className={`text-center mx-auto text-2xl lg:text-3xl tracking-widest text-white pb-4 italic ${
              isConnected ? "hidden " : "block "
            }`}
          >
            <br /> Waiting for connection with Metamask <br /> Any Problems?
            Refresh the page & open Metamask{" "}
          </div>
          <button
            className="button tracking-widest text-white px-12 py-4 border-2 w-[100%] font-bold italic mt-4"
            onClick={isConnected ? transaction : null}
          >
            {isConnected ? "Mint" : "Waiting.."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mint;
