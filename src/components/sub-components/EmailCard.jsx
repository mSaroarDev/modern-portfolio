import Link from "next/link";

export default function EmailCard() {
  return (
    <>
      {/* <Link href={"/pages/about/education"}> */}
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 duration-300 hover:bg-brandColor/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>

          <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest mt-5">
            Email
          </h1>

          <p className="mb-3 text-slate-200">msaroar.dev@gmail.com</p>
        </div>
      {/* </Link> */}
    </>
  );
}
