import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import freelancer from "../../../../public/assets/images/onboarding-imgs/freelancer.png";
import jobSeeker from "../../../../public/assets/images/onboarding-imgs/jobSeeker.png";
import employer from "../../../../public/assets/images/onboarding-imgs/employer.png";
import student from "../../../../public/assets/images/onboarding-imgs/student.png";
import Image from "next/image";
import Radio from "./Radio";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  usertype: string;
  setUsertype: (user: string) => void;
  setPage: (page: number) => void;
  renderAnimation: () => void;
};

const Usertype = ({
  usertype,
  setUsertype,
  setPage,
  renderAnimation,
}: Props) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to(".animate-element", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to("#animate-text", {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power4.inOut",
    });

    gsap.to("#back", {
      x: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <main className="md:mx-5">
      <div className="md:mx-6 mt-12 xl:h-[32rem]">
        <div
          id="back"
          className="flex gap-2 items-center group cursor-pointer justify-start w-[5rem] translate-x-12"
          onClick={() => {
            setPage(1);
          }}
        >
          <FaArrowLeftLong
            className="w-7 text-gray-300 group-hover:text-pink"
            size={20}
          />
          <p className="text-md text-gray-300 group-hover:text-pink">Back</p>
        </div>
        <h1
          id="animate-text"
          className="opacity-0 md:text-6xl max-sm:text-3xl text-4xl mt-4 max-w-[50rem]"
        >
          Join Jobbies as a...
        </h1>
        <div className="flex flex-wrap my-8 md:gap-5 gap-6 md:justify-start justify-center ">
          <Radio
            name="usertype"
            value="freelancer"
            usertype={usertype}
            setUsertype={setUsertype}
            desc="Showcase your skills and connect with clients for projects."
            image={freelancer}
            className="animate-element translate-y-10 opacity-0"
          />
          <Radio
            name="usertype"
            value="job Seeker"
            setUsertype={setUsertype}
            usertype={usertype}
            desc="Build your resume, portfolio, apply to jobs, and find your next opportunity."
            image={jobSeeker}
            className="animate-element translate-y-10 opacity-0"
          />
          <Radio
            name="usertype"
            value="employer"
            setUsertype={setUsertype}
            usertype={usertype}
            desc="Post jobs, discover talent, and hire the perfect candidate."
            image={employer}
            className="animate-element translate-y-10 opacity-0"
          />
          <Radio
            name="usertype"
            value="student"
            setUsertype={setUsertype}
            usertype={usertype}
            desc="Create your first resume and explore entry-level roles or internships."
            image={student}
            className="animate-element translate-y-10 opacity-0"
          />
        </div>

        <Button
          id="animate-text"
          className="opacity-0 onboarding-btn-grad mt-3 mb-8 mx-auto  max-md:text-xl text-2xl py-6 px-8 rounded-full font-normal hover:scale-105 transition-all duration-200 hover:rotate-12 text-gray-100"
          onClick={(e) => {
            e.preventDefault();
            renderAnimation();
            setPage(3);
          }}
        >
          Continue
        </Button>
      </div>
    </main>
  );
};

export default Usertype;
