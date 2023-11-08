import Link from "next/link";
import Image from "next/image";
import ostadlogo from 'public/ostad-logo.png';

export default function OstadGraduateCard() {
  return (
    <>
      <Link href={"/pages/skills"}>
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <div className="skill_icons flex gap-3">
            <div className="text-white skill__container rounded-lg flex">
              <Image src={ostadlogo} height={100} width={150} alt="JavaScript" />
            </div>
          </div>
          <p className="text-2xl text-slate-200 font-bebas tracking-widest mt-8">Programing Graduation</p>
          <h1 className="flex items-center justify-between gap-3">
            Ostad Ltd, 2023
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
