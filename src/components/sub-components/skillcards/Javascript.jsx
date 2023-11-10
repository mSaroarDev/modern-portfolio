import Image from "next/image";
import jsicon from "public/js.svg";

export default function JavascriptCard() {
  return (
    <>
      <div className="w-full bg-dark p-8 rounded-[20px] mb-8 duration-300 hover:bg-brandColor/5">
        <Image src={jsicon} height={70} width={70} alt="React" />

        <h1 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest mt-5">
          JavaScript
        </h1>

        <p className="mb-3 text-slate-200">Working Since, 2020</p>
      </div>
    </>
  );
}
