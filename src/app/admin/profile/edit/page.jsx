export default function EditProfile() {
  return (
    <>
      <div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid bg-dark card rounded-box p-10">
              <h3 className="text-xl font-bold mb-10  text-white">Personal Information</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-white">Name</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="designation" className=" text-white">Designation</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="address" className=" text-white">Address</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid bg-dark card rounded-box p-10">
              <h3 className="text-xl font-bold mb-10  text-white">Contact Information</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-white">Whatsapp</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="designation" className=" text-white">Email</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid bg-dark card rounded-box p-10">
              <h3 className="text-xl font-bold mb-10  text-white">Projects Details</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-white">Facebook</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="designation" className=" text-white">Github</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="address" className=" text-white">Linkedin</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="address" className=" text-white">Instagram</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid bg-dark card rounded-box p-10">
              <h3 className="text-xl font-bold mb-10  text-white">Porject Information</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-white">Experience</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                <label htmlFor="designation" className=" text-white">Projects Completed</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
              </div>
            </div>
            <div className="text-right">
            <button type="submit" className="btn bg-brandColor border-0 w-fit mt-5">Update Profile</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
