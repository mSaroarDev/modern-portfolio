import fbimage from "public/fb.svg";
import githubimage from "public/github.svg";
import linkedimage from "public/linked.svg";
import Image from "next/image";
import papermail from "public/papermail.svg";
import download from "public/download.svg";

export default function LeftDetails() {
  return (
    <>
      <div className="p-8 flex flex-col gap-2 items-center justify-start text-white w-full h-fit">
        <Image
          className="hero-img vert-move"
          src="/my_image_prof.png"
          width={350}
          height={350}
          alt="MyImage"
        />
        <p className="mt-4 text-slate-200">Hello, I am</p>
        <h1 className="font-bold text-[22px] uppercase">Saroar Jahan</h1>
        <p>Web Developer</p>
        <div className="mt-10">
          <div>msaroar.dev@gmail.com</div>
          <div>+88017 98 456 380</div>
        </div>
        <div className="social___icons flex items-center justify-center gap-3 mt-5">
          <div className="w-10 h-10 bg-semiDark rounded-md flex items-center justify-center cursor-pointer hover:bg-brandColor/10 duration-300">
            <Image src={fbimage} height={18} width={18} alt="fb" />
          </div>
          <div className="w-10 h-10 bg-semiDark rounded-md flex items-center justify-center cursor-pointer hover:bg-brandColor/10 duration-300">
            <Image src={githubimage} height={18} width={18} alt="fb" />
          </div>
          <div className="w-10 h-10 bg-semiDark rounded-md flex items-center justify-center cursor-pointer hover:bg-brandColor/10 duration-300">
            <Image src={linkedimage} height={18} width={18} alt="fb" />
          </div>
        </div>
        <div className="contact___button mt-5 text-center flex flex-col gap-3 lg:gap-0">
          <button className="btn bg-brandColor rounded-full px-10 outline-none border-0 my-2 flex items-center justify-center gap-2">
            <Image src={papermail} height={25} width={25} alt="Send" />
            Contact Now
          </button>
          <button className="btn bg-semiDark text-white hover:bg-dark rounded-full px-10 outline-none border-0 my-2">
            <Image src={download} height={20} width={20} alt="Send" />
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
