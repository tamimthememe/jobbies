import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {
  data: {
    name: string;
    oldPrice: number;
    newPrice: number;
    features: string[];
  };
};

const PricingCard = (props: Props) => {
  const { data } = props;
  return (
    <div
      className={` p-10 dark:bg-[#232323] bg-green-300 w-[28rem] rounded-lg h-[40rem] flex flex-col justify-between relative  ${
        data.name === "All-in" &&
        "border-4 dark:border-green-100 border-gray-600"
      } mb-14`}
    >
      {data.name === "All-in" && (
        <div className="absolute top-[-1rem] inset-0 mx-auto w-[4.8rem]">
          <p className="dark:text-gray-600 text-gray-100 dark:bg-green-100 bg-gray-600 py-1 px-2 rounded-full">
            Popular
          </p>
        </div>
      )}
      <div>
        <p className="mb-5 dark:text-gray-100 text-gray-100 font-semibold">
          {data.name}
        </p>
        <div className="flex gap-4 items-center mb-8">
          <p className="text-[2rem] line-through dark:text-gray-500 text-gray-200">
            ${data.oldPrice}
          </p>
          <p className="text-[4rem] dark:text-gray-100 text-gray-200">
            ${data.newPrice}
          </p>
        </div>
        <p className="mb-4 dark:text-gray-600 text-gray-100">
          In this package, you will get:
        </p>
        {data.features.map((item) => (
          <div className="flex gap-4 items-center ml-5">
            <FaCheck className="dark:text-green-100 text-gray-100" />
            <p className="my-2 dark:text-gray-100 text-gray-100">{item}</p>
          </div>
        ))}
      </div>
      <div>
        <Button className="w-full py-6 dark:bg-green-100 bg-gray-600 dark:text-white text-gray-100 hover:dark:bg-green-200 hover:bg-gray-100 hover:text-gray-600 ">
          Get Jobbies
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
