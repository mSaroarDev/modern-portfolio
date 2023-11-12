import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="h-screen w-full">
      <div className="flex items-center justify-between p-5">
        <div>
          <div className="stats bg-semiDark mb-10 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <h1 className="textLg text-white">
              <span className="text-semiDark">{"-"}</span>My Profile
            </h1>
          </div>
        </div>
        <div>
          <Link
            href={"/admin/profile/edit"}
            className="btn bg-brandColor text-black border-0"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-dark rounded-[20px] p-8 text-white mb-[30px]">
            <h2 className="text-xl mb-8 font-bebas tracking-wider">Personal Details</h2>
            <div className="flex flex-col gap-2 ml-7">
              <p>Full Name: </p>
              <p>Designation: </p>
              <p>Address: </p>
            </div>
          </div>

          <div className="bg-dark rounded-[20px] p-8 text-white mb-[30px">
            <h2 className="text-xl mb-8 font-bebas tracking-wider">Social Details</h2>
            <div className="flex flex-col gap-2 ml-7">
              <p>Facebook: </p>
              <p>Github: </p>
              <p>Linkedin: </p>
              <p>Instagram: </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="bg-dark rounded-[20px] p-8 text-white mb-[30px]">
            <h2 className="text-xl mb-8 font-bebas tracking-wider">Contact Details</h2>
            <div className="flex flex-col gap-2 ml-7">
              <p>Whatsapp: </p>
              <p>Email: </p>
            </div>
          </div>

          <div className="bg-dark rounded-[20px] p-8 text-white mb-[30px">
            <h2 className="text-xl mb-8 font-bebas tracking-wider">Projects Details</h2>
            <div className="flex flex-col gap-2 ml-7">
              <p>Experience: </p>
              <p>Completed Projects: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
