import Link from "next/link";
import Image from "next/image";
import reduxicon from "public/redux.svg";

export default function ReduxCard() {
  return (
    <>
      <div className="w-full bg-dark p-8 rounded-[20px] mb-8 duration-300 hover:bg-brandColor/5">
        <Image src={reduxicon} height={70} width={70} alt="React" />

        <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest mt-5">
          Redux
        </h1>

        <p className="mb-3 text-slate-200">Working Since, 2022</p>
      </div>
    </>
  );
}
