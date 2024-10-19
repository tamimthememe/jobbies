import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/logoOriginal.png";

type Props = {};

const Footer = (props: Props) => {
  const pageLinks = ["About", "Pricing", "FAQs", "Support"];

  const legalLinks = ["Terms of Service", "Privacy Policy", "Licenses"];

  const Socials = ["Instagram", "Tiktok", "Meta"];
  return (
    <section className="flex flex-wrap justify-around max-md:justify-start max-md:px-5 border-t-2 py-10 gap-8 bg-gray-600">
      <div>
        <Image src={logo} alt="Logo" width={200} />
        <p className="text-[1rem] text-gray-400 mt-2">
          Get hired faster and better - All with Jobbies.
          <br />
          Copyright © 2024 - All rights reserved
        </p>
      </div>
      <div className="w-[10rem]">
        <h1 className="text-[1.5rem] text-gray-100 mb-2">Links</h1>
        {pageLinks.map((item, i) => (
          <a
            key={i}
            className="text-[1rem] block my-2 text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-500 "
          >
            {item}
          </a>
        ))}
      </div>
      <div className="w-[10rem]">
        <h1 className="text-[1.5rem] text-gray-100 mb-2">Legal</h1>
        {legalLinks.map((item, i) => (
          <a
            key={i}
            className="text-[1rem] block my-2 text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-500 "
          >
            {item}
          </a>
        ))}
      </div>
      <div className="w-[10rem]">
        <h1 className="text-[1.5rem] text-gray-100 mb-2">Socials</h1>
        {Socials.map((item, i) => (
          <a
            key={i}
            className="text-[1rem] block my-2 text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-500 "
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
