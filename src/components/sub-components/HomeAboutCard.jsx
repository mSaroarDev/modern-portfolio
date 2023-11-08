import Link from "next/link";
import Image from "next/image";
import logo from "public/logo.png";

export default function HomeAboutCard() {
  return (
    <>
      <Link href={"/pages/about"}>
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 duration-300 hover:bg-brandColor/5">
          <Image src={logo} height={150} width={250} alt="Logo" />
          <p className="mt-5 mb-3 text-slate-200">Want to know more about?</p>
          <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">
            About Me
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
