import Image, { StaticImageData } from "next/image";
import React from "react";
import freelancer from "../../../../public/assets/images/onboarding-imgs/freelancer.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  name: string;
  value: string;
  desc: string;
  image: StaticImageData;
  setUsertype: (user:string)=>void
  usertype: string;
  className: string
};

const Radio = ({ name, value, desc, image, usertype,setUsertype, className }: Props) => {


  return (
    <div>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        className="hidden"
      />
      <label
        htmlFor={value}
        onClick={()=>setUsertype(value)}
        className={`${usertype===value?"onboarding-btn-grad hover:scale-110":"bg-[#2C2C2C] hover:bg-gray-500"} rounded-lg w-[13.5rem] h-[16rem] flex items-center justify-center group cursor-pointer hover:scale-105 transition-all duration-300 ${className}`}
      >
        <div className="w-[12rem] h-[14.5rem] bg-[#1c1c1c] p-3 overflow-hidden rounded-lg">
          <h1 className="text-[1.8rem] mb-0">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </h1>
          <p className="text-gray-300 w-[9rem] text-[0.6rem] mt-0">{desc}</p>
          <Image
            src={image}
            alt={`${value} vector image`}
            className={`w-[80%] mx-auto translate-y-6 group-hover:-translate-y-0 transition-all duration-300 ease-in-out`}
          />
        </div>
      </label>
    </div>
  );
};

export default Radio;
