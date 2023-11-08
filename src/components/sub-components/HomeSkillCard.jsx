import Link from "next/link";
import Image from "next/image";
import jsicon from "public/js.svg";
import reacticon from "public/react.svg";
import nextjsicon from "public/next-js.svg";

export default function HomeSkillCard() {
  return (
    <>
      <Link href={"/pages/skills"}>
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <div className="skill_icons flex items-center justify-around gap-3">
            <div className="skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={jsicon} height={40} width={40} alt="JavaScript" />
            </div>
            <div className="skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={reacticon} height={40} width={40} alt="JavaScript" />
            </div>
            <div className="text-white skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={nextjsicon} height={40} width={40} alt="JavaScript" />
            </div>
          </div>
          <p className="mt-7 mb-1 text-slate-200">Languages that i know</p>
          <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">
            Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </h1>
        </div>
      </Link>
    </>
  );
}
