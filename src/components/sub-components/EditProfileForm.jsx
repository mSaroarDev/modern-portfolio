"use client";
import { useFormik } from "formik";

export default function EditProfileForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      designation: "",
      email: "",
      whatsapp: "",
      facebook: "",
      github: "",
      linkedin: "",
      instagram: "",
      experience: "",
      completed: "",
      bio: "",
    },

    onSubmit: async (values) => {
        console.log(values)
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid bg-dark card rounded-box p-10">
            <h3 className="text-xl mb-10 font-bebas tracking-wider text-white">
              Personal Information
            </h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className=" text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="designation" className=" text-white">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="address" className=" text-white">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="grid bg-dark card rounded-box p-10">
            <h3 className="text-xl mb-10 font-bebas tracking-wider text-white">
              Contact Information
            </h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className=" text-white">
                Whatsapp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formik.values.whatsapp}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="designation" className=" text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="grid bg-dark card rounded-box p-10">
            <h3 className="text-xl mb-10 font-bebas tracking-wider text-white">
              Social Links
            </h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className=" text-white">
                Facebook
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                value={formik.values.facebook}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="designation" className=" text-white">
                Github
              </label>
              <input
                type="text"
                id="github"
                name="github"
                value={formik.values.github}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="address" className=" text-white">
                Linkedin
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="address" className=" text-white">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formik.values.instagram}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="grid bg-dark card rounded-box p-10">
            <h3 className="text-xl mb-10 font-bebas tracking-wider text-white">
              Experiences
            </h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className=" text-white">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formik.values.experience}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
              <label htmlFor="designation" className=" text-white">
                Projects Completed
              </label>
              <input
                type="text"
                id="completed"
                name="completed"
                value={formik.values.completed}
                onChange={formik.handleChange}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="btn bg-brandColor border-0 w-fit mt-5"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
