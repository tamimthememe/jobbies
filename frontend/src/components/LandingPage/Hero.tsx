import Image from "next/image";
import React from "react";
import pfp1 from "../../../public/assets/images/pfp-1.png";
import pfp2 from "../../../public/assets/images/pfp-2.png";
import heroMain from "../../../public/assets/images/hero-main.png";
import { Button } from "../ui/button";
import arrowDown from "../../../public/assets/images/arrowDown.png";
import bag from "../../../public/assets/images/bag.png";

const Hero = () => {
  return (
    <section className="w-full mx-auto mt-8">
      <div className="bg-green-300 pt-12 mx-20 rounded-lg dark:bg-opacity-0 relative max-md:mx-5 mb-6">
        <h1 className="text-center text-[3.5rem] max-md:text-[2rem] max-md:leading-[2.6rem] font-medium leading-[4rem] dark:text-gray-100 text-gray-100">
          Land Your Dream Job
          <br /> with{" "}
          <span className="dark:bg-green-300 bg-gray-100 text-green-300 dark:text-gray-100 rounded-full px-3">
            Jobbies<span className="text-pink">.</span>
          </span>
        </h1>
        <p className="text-center my-8 max-md:text-[0.8rem] mx-5 text-gray-200 dark:text-gray-300">
          Build your resume. Create your portfolio. Track your applications.{" "}
          <br />{" "}
          <span className="max-md:hidden block">
            Jobbies helps you organize and optimize your job search - all in one
            place.
          </span>
        </p>
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center gap-5">
            <div className="relative w-[5rem] h-12">
              <Image
                src={pfp1}
                alt="example pfp 1"
                width={50}
                className="absolute left-0 rounded-full"
              />
              <Image
                src={pfp2}
                alt="example pfp 2"
                width={50}
                className="absolute left-4 rounded-full"
              />
              <div className="dark:text-green-300 text-green-300 absolute left-8 border-2 dark:border-green-300 border-green-300  bg-gray-100 dark:bg-gray-600 p-3 rounded-full">
                <p>4.8</p>
              </div>
            </div>
            <div className="w-[2px] h-14 dark:bg-gray-700 bg-gray-500" />
            <Button className="dark:bg-green-300 bg-gray-100 hover:bg-green-200 text-white text-lg rounded-2xl py-6">
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative mt-10 h-[34rem] max-lg:h-[24rem] max-md:h-[26rem] max-sm:h-[15rem]">
          <div className="absolute w-full z-10">
            <Image
              src={heroMain}
              alt="Main Image"
              className="mx-auto max-sm:w-[20rem] max-md:w-[38rem] max-lg:w-[40rem]"
            />
          </div>
          <div className="absolute w-full">
            <div className="mx-auto bg-[#434343] w-[66rem] h-[25rem] opacity-50 rounded-3xl mt-32 max-sm:mt-6 max-sm:w-[22rem] max-sm:h-[12rem] max-md:w-[40rem]  max-sm:hidden max-md:h-[19rem] max-md:mt-8 max-lg:w-[42rem] max-lg:h-[20rem] max-lg:mt-10 max-xl:w-[55rem]">
              <div className="bg-gray-100 mx-auto -translate-y-16 w-[60rem] h-[27rem] opacity-10 rounded-3xl max-lg:hidden max-lg:w-[44rem] max-xl:w-[55rem]" />
            </div>
          </div>
        </div>
        <Image
          src={arrowDown}
          alt="Arrow Down Image"
          className="max-xl:hidden absolute top-24 left-10 dark:hidden"
        />
        <Image
          src={bag}
          alt="Bag Image"
          className="max-xl:hidden absolute top-20 right-10 dark:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
