import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

const UserHome = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%'
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
    }else{
      gsap.to(panelRef.current,{
      height:'0%'
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
    }
  },[panelOpen])
  return (
    <div className="h-screen relative">
      <img
        className="w-13 mb-8 absolute left-5 top-5"
        src="https://cdn.brandfetch.io/ididNbiiOd/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562044439"
        alt="User Login"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/Uber-Car-Animation-Android/master/assets/how-to-add-uber-car-animation-in-android-app-gif.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
        <h5 
        ref={panelCloseRef}
        onClick={()=>{
          setPanelOpen(false)
        }}
        className='absolute opacity-0 top-3 right-3 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form 
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[50%] left-10 bg-gray-600 rounded-full"></div>
            <input
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              value={pickUp}
              onChange={(e)=>{
                setPickUp(e.target.value)
              }}
              onClick={()=>{
                setPanelOpen(true)
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              onClick={()=>{
                setPanelOpen(true)
              }}
              placeholder="Enter a destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="opacity-0 bg-red-400 h-0"></div>
      </div>
    </div>
  );
};

export default UserHome;
