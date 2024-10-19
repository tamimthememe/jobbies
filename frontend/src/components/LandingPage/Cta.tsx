import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import logoSmall from '../../../public/assets/images/logo-small.png'

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="my-20 max-md:mx-5">
      <h1 className="font-semibold max-md:text-left dark:text-green-100 text-green-300 text-[2.7rem] text-center leading-[3rem] mb-4">
        Build. Track. Showcase.<br />
        <span className="font-semibold dark:text-gray-200 text-gray-600 text-[2.7rem] text-center max-md:text-[2.3rem]">
          Your Career Journey made Simple
        </span>
      </h1>
      <p className="dark:text-gray-300 text-green-300 text-[1.2rem] text-center max-md:text-left">
        Don't waste time on creating resumes and portfolios from scratch.
        <br /> We&apos;ve got you...
      </p>
      <Button className="dark:bg-green-100 dark:hover:bg-green-300 bg-green-300 hover:bg-green-100 p-6 flex gap-10 items-center justify-center w-[20rem] mx-auto my-10">
        <Image src={logoSmall} alt="Jobbies small logo"  width="20"/>
        <p className="text-gray-100 text-[1.5rem]">Get Jobbies</p>
      </Button>
    </div>
  );
};

export default Cta;
