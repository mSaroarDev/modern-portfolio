import Link from "next/link";

export default function BackToHome() {
  return (
    <>
      <Link
        href={"/"}
        className="btn bg-dark w-fit h-auto text-white border-0 outline-none hover:bg-brandColor hover:text-black duration-300 mb-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        Back to Home
      </Link>
    </>
  );
}
