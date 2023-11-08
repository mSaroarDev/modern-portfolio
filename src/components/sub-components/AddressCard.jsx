import Link from "next/link";
import Image from "next/image";
import showcase from "public/showcase.png";

export default function AddressCard() {
  return (
    <>
      {/* <Link href={"/"}> */}
      <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>

        <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest mt-5">
          Home Address
        </h1>

        <p className="mt-2 ml-5">
            Street Address: Bezura, Darusha <br />
            Post: Darusha <br />
            Paba, Rajshahi <br />
            Postal Code: 6210 <br />
            Bangladesh 
        </p>
      </div>
      {/* </Link> */}
    </>
  );
}
