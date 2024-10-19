import Image from "next/image";
import React from "react";
import logoSmall from "../../../../public/assets/images/logo-small.png";

type Props = {
  text: string;
};

const JobbiesMessage = ({ text }: Props) => {
  return (
    <div className="flex gap-3 items-end">
      <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#2C2C2C] flex justify-center items-center">
        <Image src={logoSmall} alt="small logo" width={30} />
      </div>
      <div className="bg-[#2c2c2c] max-w-[15rem] px-4 py-3 rounded-[20px] rounded-bl-none ">
        <p className="text-sm max-w-[15rem]">{text}</p>
      </div>
    </div>
  );
};

export default JobbiesMessage;
