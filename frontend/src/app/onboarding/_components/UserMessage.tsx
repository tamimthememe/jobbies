import Image from "next/image";
import React from "react";

type Props = {
  text: string;
  image: string | null;
};

const UserMessage = ({ text, image }: Props) => {
  return (
    <div className="flex gap-3 items-end self-end">
      <div className="bg-[#2c2c2c] max-w-[15rem] px-4 py-3 rounded-[20px] rounded-br-none ">
        <p className="text-sm max-w-[15rem]">{text}</p>
      </div>
      {image ? (
        <Image
          src={image}
          alt="User Image"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#2C2C2C] flex justify-center items-center">
          <p className="text-3xl">{text.charAt(0).toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default UserMessage;
