

export default function LoginForm() {
  
  return (
    <>
      <form className="flex flex-col gap-2">
        <label className="text-white" htmlFor="email">Enter Email</label>
        <input
          type="email"
          // id="email"
          // name="email"
          // onChange={formik.handleChange}
          // value={formik.values.email}
          placeholder="example@email.com"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="text-white" htmlFor="password">Enter Password</label>
        <input
          type="password"
          // id="password"
          // name="password"
          // onChange={formik.handleChange}
          // value={formik.values.password}
          placeholder="******"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn bg-brandColor border-0 mt-2">
          Login
        </button>
      </form>
    </>
  );
}
