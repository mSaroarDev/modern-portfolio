export default function PostNewProject() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-dark rounded-[20px] p-8">
        <h2 className="text-2xl font-bebas text-white tracking-wider mb-5">
          Add new projects details
        </h2>
        <form className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Project Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="name" className="text-white">
            Project Details
          </label>
          <textarea className="textarea textarea-bordered max-w-lg resize-none" placeholder="Short Description"></textarea>
          <label htmlFor="name" className="text-white">
            Github Link
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="name" className="text-white">
            Live Demo Link
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
          <label htmlFor="image">Project Image for Showcase</label>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          <div className="text-left mt-3">
            <button className="btn bg-brandColor border-0 w-fit">Add to List</button>
          </div>
        </form>
      </div>
    </div>
  );
}
