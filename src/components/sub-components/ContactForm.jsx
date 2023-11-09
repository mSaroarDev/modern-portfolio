"use client";
import Image from "next/image";

export default function ContactForm() {
  // alert
  return (
    <>
      <div className="form w-full bg-dark shadow-md p-7 rounded-[20px]">
        <div className="section__header">
          <h2 className="text-2xl font-bold my-5">Contact Us</h2>
        </div>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full bg-semiDark"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-semiDark"
          />
          <textarea
            id="massage"
            name="massage"
            className="textarea textarea-bordered resize-none bg-semiDark"
            placeholder="Message"
          ></textarea>
          <button className="btn bg-brandColor outline-none border-0" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
