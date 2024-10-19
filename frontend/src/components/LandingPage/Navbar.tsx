import Image from "next/image";
import React, { useState } from "react";
import logoOriginal from "../../../public/assets/images/logoOriginal.png";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { currentUser, User } from "@clerk/nextjs/server";
import { menuItems } from "../../../public/constants/constants";
import Menu from "./Menu";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  const user: User | null = await currentUser();
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-9 h-9",
    },
  };

  return (
    <nav className="flex mx-auto my-4 items-center justify-between px-10 max-md:px-6 bg-gray-700 rounded-lg py-4 w-[90%]">
      <Image
        src={logoOriginal}
        alt="Jobbies Official Logo"
        className="max-md:w-32"
        width={180}
        height={180}
      />
      <div className="flex gap-10 items-center max-lg:hidden">
        {menuItems.map((item) => (
          <p className="text-small text-gray-100 hover:text-pink transition-all duration-500 cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="max-lg:hidden flex items-center gap-4">
        <Link
          href="/onboarding"
          className="bg-pink text-gray-100  hover:bg-[#D18BFA] px-3 py-1 rounded-lg"
        >
          {user ? "Dashboard" : "Sign in"}
        </Link>
        {user && <UserButton appearance={userButtonAppearance} />}
        <ModeToggle />
      </div>
      <Menu />
    </nav>
  );
};

export default Navbar;
