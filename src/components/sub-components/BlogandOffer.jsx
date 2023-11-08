import Link from "next/link";

export default function BlogandOffer() {
  return (
    <>
      <div className="w-full rounded-[20px] mb-8">
        <div className="showcase___images flex gap-5">
          <Link className="w-1/2" href={"/pages/blogs"}>
            <div className="blog p-8  bg-brandColor rounded-[20px]">
              <p className="text-black text-base lg:text-md">Show our blogs</p>
              <h1 className="text-2xl text-black mt-2 font-bebas tracking-widest">
                Blogs
              </h1>
            </div>
          </Link>

          <Link className="w-1/2" href={"/pages/message"}>
            <div className="blog p-8 bg-dark rounded-[20px] hover:bg-brandColor/5 duration-300">
              <p className="text-white text-base lg:text-md">Have a project?</p>
              <h1 className="text-2xl text-white mt-2 font-bebas tracking-widest">
                Hire Me
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
