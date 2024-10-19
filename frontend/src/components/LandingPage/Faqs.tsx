'use client'
import React, { useState } from "react";
import { faqsData } from "../../../public/constants/constants";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {};

const Faqs = (props: Props) => {
    const [openTab, setOpenTab] = useState('buy')
  return (
    <section className="mx-10 max-md:mx-2 my-10">
      <p className="dark:text-green-100 text-center mb-2 text-green-300 font-semibold">FAQs</p>
      <h1 className="text-[3.2rem] font-semibold max-lg:text-[3rem] max-md:text-[2rem] text-center max-md:text-left mx-20 max-lg:mx-10 max-md:mx-2 mb-16">
        Still have some questions? We&apos;ve got you...
      </h1>
      {faqsData.map((item, i) => (
        <div key={i} className="w-[80rem] max-md:w-[24rem] max-lg:w-[45rem] border-t-2 dark:border-gray-200 border-[#999999] mx-auto mt-8  pt-3 " onClick={()=>setOpenTab(item.name)}>
          <div className="flex items-center w-full justify-between cursor-pointer">
            <p className="text-[2.2rem] max-md:text-[1.5rem] max-lg:text-[1.7rem] text-left ">
              {item.question}
            </p>
            {openTab === item.name ? <FaMinus className="text-[2rem]"/> : <FaPlus className="text-[2rem]" /> }
          </div>
          {openTab === item.name && (
            <div>
                <p className="my-5 dark:text-gray-500 text-green-300">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
       <p className="text-center mb-2 mt-14">if you still have queries, you can <span className="underline cursor-pointer dark:text-green-100 text-green-300">ask here</span></p>
    </section>
  );
};

export default Faqs;
