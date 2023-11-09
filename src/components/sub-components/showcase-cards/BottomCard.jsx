export default function BottomShowcase() {
    return (
      <>
        <div className="relative w-full h-[130px] bg-dark rounded-[20px] overflow-hidden group mb-8">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="image"
            className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 bg-black bg-opacity-50 backdrop-blur-md backdrop-filter">
            <h3 className="text-2xl">Global IT Web App</h3>
            <p>Full Stack Development</p>
            <a
              href="http://google.com"
              className="text-brandColor text-xl tracking-widest font-bebas border-0 mt-5 rounded-full flex items-center justify-center gap-2"
            >
              Visit Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </>
    );
  }
  