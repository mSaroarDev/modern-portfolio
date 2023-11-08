import Link from "next/link";

export default function HomeTestimonialCard() {
  return (
    <>
      <Link href={"/pages/testimonials"}>
        <div className="w-full bg-dark testimonialBg p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <p className="mt-10 mb-1">What says my clients</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">Testimonials</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
}
