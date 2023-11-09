import Link from "next/link";
import Image from "next/image";
import fbicon from "public/facebook.svg";
import instagram from "public/instagram.svg";
import linkedin from "public/linkedin.svg";
import github from "public/github1.svg";

export default function SocialLinksCard() {
  return (
    <>
      {/* <Link href={"/pages/skills"}> */}
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <div className="skill_icons flex gap-3">
            <Link href={"http://www.facebook.com"}>
            <div className="skill__facebook h-14 w-14 bg-semiDark rounded-lg flex items-center justify-center">
            <Image src={fbicon} height={40} width={40} alt="JavaScript" />
            </div>
            </Link>

            <Link href={"http://www.instagram.com"}>
            <div className="skill__instagram h-14 w-14 bg-semiDark rounded-lg flex items-center justify-center">
            <Image src={instagram} height={40} width={40} alt="JavaScript" />
            </div>
            </Link>

            <Link href={"http://www.linkedin.com"}>
            <div className="skill__linkedin h-14 w-14 bg-semiDark rounded-lg flex items-center justify-center">
            <Image src={linkedin} height={40} width={40} alt="JavaScript" />
            </div>
            </Link>

            <Link href={"http://www.github.com"}>
            <div className="skill__github h-14 w-14 bg-semiDark rounded-lg flex items-center justify-center">
            <Image src={github} height={40} width={40} alt="JavaScript" />
            </div>
            </Link>

          </div>
          <p className="mt-7 mb-1 text-slate-200">My Social Platgorms</p>
          <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">
            Social Links
            {/* <svg
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
            </svg> */}
          </h1>
        </div>
      {/* </Link> */}
    </>
  );
}
