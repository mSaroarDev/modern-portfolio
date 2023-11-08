export default function HomeCompletedProjectsCard() {
  return (
    <>
      {/* <Link href={"/"}> */}
      <div className="w-full bg-dark p-8 rounded-[20px] hover:bg-brandColor/5 duration-300">
        <div className="flex flex-nowrap gap-10 items-center justify-start">
          <div className="experience">
            <h3 className="text-6xl text-brandColor font-bebas tracking-wider">1.5</h3>
            <p className="mt-5">
              Years of <br /> Experience
            </p>
          </div>
          <div className="projects">
            <h3 className="text-6xl text-brandColor font-bebas tracking-wider">50+</h3>
            <p className="mt-5">
              Projects <br /> Completed
            </p>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}
