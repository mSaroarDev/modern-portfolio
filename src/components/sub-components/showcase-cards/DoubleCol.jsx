import Link from "next/link";

export default function DoubleCard() {
  return (
    <>
      <div className="w-full rounded-[20px] mb-8">
        <div className="showcase___images flex gap-5">
          <Link className="w-1/2" href={"/pages/blogs"}>
            <div className="blog p-8 h-[120px] bg-brandColor rounded-[20px]">
              <p className="text-black text-base lg:text-md">Global IT Website</p>
              <a
              href="http://google.com"
              className="text-black tracking-widest font-bebas border-0 mt-5 rounded-full flex gap-2"
            >
              Visit Website
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
            </a>
            </div>
          </Link>

          <Link className="w-1/2" href={"/pages/message"}>
            <div className="blog p-8 h-[120px] bg-dark rounded-[20px] hover:bg-brandColor/5 duration-300">
              <p className="text-white text-base lg:text-md">Global IT Website</p>
              <a
              href="http://google.com"
              className="text-brandColor tracking-widest font-bebas border-0 mt-5 rounded-full flex gap-2"
            >
              Visit Website
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
            </a>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}