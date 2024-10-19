"use client";

import React, { useState } from "react";
import { featureOptions } from "@/../public/constants/constants";
import { FaArrowDown, FaCheck } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("Resumes");

  return (
    <section className="my-14 max-md:my-0">
      <div className="mx-28 max-md:mx-16 max-sm:mx-8">
        <p className="dark:text-green-100 text-green-300">
          Job-Centric Application =&gt; &#40;Made Faster&#41;
        </p>
        <h1 className="text-[3.2rem] max-lg:text-[3rem] max-md:text-[2.5rem] font-semibold">
          Job hunting does not have to be that hard...
        </h1>
        <div className="flex mx-10 max-lg:mx-0 my-14 items-center justify-around max-md:hidden">
          {featureOptions.map((feature) => (
            <div
              className={`flex flex-col gap-3 items-center cursor-pointer ${activeFeature!==feature.name && "hover:opacity-50"} transition-all duration-500 `}
              onClick={() => setActiveFeature(feature.name)}
            >
              {activeFeature === feature.name
                ? feature.activeIcon
                : feature.icon}
              <p
                className={`text-xl  ${
                  activeFeature === feature.name && "color: dark:text-green-100 text-green-300"
                }`}
              >
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="dark:bg-[#000000] bg-gray-600 my-10">
        <div className="mx-[15%] max-md:mx-8 pt-10">
          <div className="flex justify-between">
            <p className="text-3xl dark:text-gray-100 text-gray-200">{activeFeature}</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden" asChild>
                <Button variant="outline" size="icon" className="w-32 text-gray-100">
                  <div className="flex items-center justify-between gap-2 w-full mx-4">
                    <p className="w-20 overflow-hidden">{activeFeature}</p>
                    <FaArrowDown />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-600 text-gray-100">
                <DropdownMenuItem onClick={() => setActiveFeature("Resumes")}>
                  Resumes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveFeature("Portfolio")}>
                  Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setActiveFeature("Application Tracker")}
                >
                  Application Tracker
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveFeature("Style")}>
                  Style
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <div className="pb-10 max-md:mx-2 mx-[15%] mt-10">
            {featureOptions.map((feature) => {
              if (feature.name !== activeFeature) return;
              return feature.description.map((text, index) => (
                <>
                  {index <= feature.description.length - 3 ? (
                    <div className="flex gap-5 ml-10 my-2 items-center dark:text-gray-400 text-gray-200">
                      <FaCheck />
                      <p className="text-lg max-md:text-[1rem]">{text}</p>
                    </div>
                  ) : (
                    <div className="flex gap-5 ml-10 my-2 items-center">
                      <FaCheck className="text-green-100" />
                      <p className="text-lg max-md:text-[1rem] text-green-100">{text}</p>
                    </div>
                  )}
                </>
              ));
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
