import Link from "next/link";
import Image from "next/image";
import showcase from "public/showcase.png";

export default function HomeShowcaseCard() {
  return (
    <>
      <Link href={"/"}>
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <div className="showcase___images flex items-center justify-center gap-5">
            <div className="image__1 overflow-hidden w-[180px] h-auto rounded-lg">
              <Image
                className="hover:scale-110 duration-300"
                src={showcase}
                height={90}
                width={180}
                alt="showcase1"
              />
            </div>

            <div className="image__1 overflow-hidden w-[180px] h-auto rounded-lg">
              <Image
                className="hover:scale-110 duration-300"
                src={showcase}
                height={90}
                width={180}
                alt="showcase1"
              />
            </div>
          </div>
          <p className="mt-10 mb-1">My Project Showcase Summery</p>
          <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">
            See Projects
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
