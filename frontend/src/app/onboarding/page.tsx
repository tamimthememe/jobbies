"use client";
import React, { useEffect, useRef, useState } from "react";
import fullNameImage from "../../../public/assets/images/onboarding-imgs/full-name-main.jpg";
import pinkGrad from "../../../public/assets/images/Pink Gradient.png";
import greenGrad from "../../../public/assets/images/Green Gradient.png";
import logoMain from "../../../public/assets/images/logoOriginal.png";
import logoSmall from "../../../public/assets/images/logo-small.png";
import handEmoji from "../../../public/assets/images/onboarding-imgs/handEmoji.png";
import moneyEmoji from "../../../public/assets/images/onboarding-imgs/moneyEmoji.png";
import partyEmoji from "../../../public/assets/images/onboarding-imgs/partyEmoji.png";
import jobbiesNoti from "../../../public/assets/images/onboarding-imgs/JobbiesNoti.png";
import userNoti from "../../../public/assets/images/onboarding-imgs/userNoti.png";
import fullNameLight from "../../../public/assets/images/onboarding-imgs/full-name-main-light.png";
import userNotiLight from "../../../public/assets/images/onboarding-imgs/userNotiLight.png";
import jobbiesNotiLight from "../../../public/assets/images/onboarding-imgs/JobbiesNotiLight.jpg";
import logoDark from "../../../public/assets/images/onboarding-imgs/logoDark.png";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Usertype from "./_components/Usertype";
import JobbiesMessage from "./_components/JobbiesMessage";
import { useUser } from "@clerk/clerk-react";
import { currentUser } from "@clerk/nextjs/server";
import UserMessage from "./_components/UserMessage";

type Props = {};

const page = (props: Props) => {
  const inputRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("Syed Tamim AHmad Rizvi");
  const [animate, setAnimated] = useState(false); // State that controls the animation
  const hasMountedRef = useRef(false); // Tracks if component has mounted
  const [userType, setUserType] = useState("freelancer");
  const { user } = useUser();

  useGSAP(() => {
    gsap.to("#animate-element", {
      opacity: 1,
      duration: 4,
    });
    gsap.to("#animate-element", {
      x: 0,
      y: 0,
      ease: "power4.out",
      duration: 30,
    });
  }, [page]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

    tl.to("#chat", { x: 0, delay: 2 })
      .to("#message-cont", { y: 120 })
      .to("#message-cont", { y: 70, delay: 1 });
  }, [animate]);

  useEffect(() => {
    if (page == 1) {
      //@ts-ignore
      inputRef.current.focus();
      //@ts-ignore
      inputRef.current.select();
    }
  }, []);

  const renderAnimation = () => {
    gsap.to(["#chat", "#chat-cont", "#message-cont"], {
      height: "+=100",
      y: 0,
      delay: 1,
    });
  };

  const keepFocused = () => {
    //@ts-ignore
    inputRef.current.focus();
  };

  const renderComps = () => {
    if (page === 1) {
      return (
        <main className="mt-10 flex flex-col justify-center items-center relative">
          <Image
            src={fullNameImage}
            alt="Full name page - main image"
            width={400}
            id="animate-element"
            className="dark:block hidden z-20 scale-[0.9]"
          />
          <Image
            src={fullNameLight}
            alt="Full name page - main image"
            width={400}
            className="dark:hidden block z-20"
          />
          <h1 className="text-4xl max-md:text-2xl max-md:my-5">
            Get started with your full name
          </h1>

          <input
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
            className="text-7xl text-center my-4 dark:text-[#D39DF2] text-green-300 truncate dark:input-onboarding-dark input-onboarding-light w-2/3 max-md:w-full max-md:text-4xl dark:bg-[#1C1C1C] bg-[#E6E6E6]"
            onBlur={keepFocused}
          />
          <Button
            onClick={() => {
              setPage(2);
              setAnimated(true);
            }}
            className="onboarding-btn-grad mt-3 max-md:text-xl text-2xl py-6 px-8 rounded-full font-normal scale-100 hover:scale-105 transition-all duration-200 hover:-rotate-12 text-gray-100"
          >
            Get Started
          </Button>
          <p className="mt-4 w-[40em] max-md:w-full text-center text-gray-400 text-sm">
            By clicking this box, I acknowledge and agree to the terms and
            conditions on behalf of the Company identified above
          </p>
          <Image
            src={pinkGrad}
            alt="pink grad"
            width={400}
            className="absolute md:dark:block hidden -right-10 -top-20 z-10"
          />
          <Image
            src={greenGrad}
            alt="Green grad"
            width={400}
            className="absolute md:dark:block hidden -left-10 -top-20 z-0 "
          />
          <div
            id="animate-element"
            className="absolute opacity-0 bottom-14 left-28 dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[5em] h-[5em] flex items-center justify-center max-xl:hidden translate-x-[16rem] -translate-y-[6rem] scale-50 "
          >
            <Image src={handEmoji} alt="Hand Emoji" />
          </div>
          <div
            id="animate-element"
            className=" opacity-0 absolute translate-x-[5rem] translate-y-10 top-4 left-[22rem] dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[4em] h-[4em] flex items-center justify-center max-xl:hidden"
          >
            <Image src={moneyEmoji} alt="Money Emoji" />
          </div>
          <div
            id="animate-element"
            className="absolute opacity-0  hidden top-[12rem] left-[2rem] rounded-full md:dark:flex items-center justify-center max-xl:hidden translate-x-[10rem] -translate-y-8 scale-50"
          >
            <Image src={jobbiesNoti} width={300} alt="Jobbies Noti" />
          </div>
          <div
            id="animate-element"
            className="absolute opacity-0 dark:hidden top-[12rem] left-[2rem] rounded-full md:flex items-center justify-center max-xl:hidden translate-x-[30rem] -translate-y-20 scale-50  "
          >
            <Image src={jobbiesNotiLight} width={300} alt="Jobbies Noti" />
          </div>
          <div
            id="animate-element"
            className="opacity-0 -translate-x-[10rem] -translate-y-[3.5rem] scale-50 absolute bottom-[7rem] right-[10rem] dark:bg-[#414141] bg-[#CBCBCB] p-4 rounded-full w-[4em] h-[4em] flex items-center justify-center max-xl:hidden"
          >
            <Image src={partyEmoji} alt="Party Emoji" />
          </div>
          <div
            id="animate-element"
            className="opacity-0 scale-50 -translate-x-[10rem] absolute hidden md:  dark:flex top-[6rem] right-[2rem] rounded-full items-center justify-center max-xl:hidden"
          >
            <Image src={userNoti} width={300} alt="Money Emoji" />
          </div>
          <div
            id="animate-element"
            className="scale-50 opacity-0  -translate-x-[10rem] absolute dark:hidden flex top-[6rem] right-[2rem] rounded-full items-center justify-center max-xl:hidden"
          >
            <Image src={userNotiLight} width={300} alt="Money Emoji" />
          </div>
        </main>
      );
    } else {
      return (
        <div className="w-full justify-between flex items-center">
          {page === 2 ? (
            <Usertype
              setPage={setPage}
              usertype={userType}
              setUsertype={setUserType}
              renderAnimation={renderAnimation}
            />
          ) : (
            <main className="md:mx-5  ">
              <div className="md:mx-6 mt-12 h-[32rem]"></div>
            </main>
          )}
          <div
            id="chat"
            className="max-xl:hidden translate-x-[30rem] w-[25.5rem] h-[13.5rem] rounded-lg bg-[#2C2C2C] self-end flex justify-center items-center"
          >
            <div
              id="chat-cont"
              className="w-[23rem] h-[11rem] bg-[#1c1c1c] rounded-lg flex flex-col overflow-hidden self-end my-5"
            >
              <div
                className="h-full flex flex-col justify-end gap-3 p-5 translate-y-[11rem]"
                id="message-cont"
              >
                <JobbiesMessage text="Your full name?" />
                {user?.hasImage ? (
                  <div id="text-name" className="self-end">
                    <UserMessage text={name} image={user.imageUrl} />
                  </div>
                ) : (
                  <div id="text-question-name" className="self-end">
                    <UserMessage text={name} image={""} />
                  </div>
                )}
                <JobbiesMessage text="Join us as a?" />
                {user?.hasImage ? (
                  <div id="text-name" className="self-end">
                    <UserMessage text={userType} image={user.imageUrl} />
                  </div>
                ) : (
                  <div id="text-question-name" className="self-end">
                    <UserMessage
                      text={
                        userType.charAt(0).toUpperCase() + userType.slice(1)
                      }
                      image={""}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="max-md:p-6 p-10 h-[100vh] bg-[#E6E6E6] dark:bg-[#1c1c1c] lg:overflow-hidden">
      <nav className="flex justify-between items-center md:mx-5 z-10">
        <Image
          src={logoMain}
          alt="Jobbies Official Logo"
          className="dark:block hidden z-20"
          width={180}
          height={180}
        />
        <Image
          src={logoDark}
          alt="Jobbies Official Logo"
          width={180}
          height={180}
          className="block dark:hidden z-20"
        />
        <div className="px-8 py-2 cursor-pointer rounded-full border dark:border-gray-100 dark:bg-[#1c1c1c] border-green-300  max-md:px-4 dark:hover:border-[#cf8af7]  text-gray-100 bg-green-300 group hover:bg-[#E6E6E6] z-30 ">
          <p className="dark:group-hover:text-[#cf8af7] group-hover:text-green-300 ">
            Help
          </p>
        </div>
      </nav>
      <form id="animate-main">{renderComps()}</form>
    </section>
  );
};

export default page;
