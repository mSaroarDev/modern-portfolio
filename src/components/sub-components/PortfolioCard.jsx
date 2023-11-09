import Image from "next/image";
import imagebrand from "public/brand.jpg";

const PortfolioCard = ({ props }) => {
  const { title, link, image } = props;

  return (
    <>
      <div className="p-card relative w-full rounded-[30px]">
        <a href="#">
          <Image
            src={imagebrand}
            width={384}
            height={300}
            alt="Image"
            className="block w-full h-auto rounded-[30px]"
          />
        </a>
        <div className="p-5 absolute top-0 left-0 w-full h-full bg-transparent text-white opacity-0 hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-80 rounded-[30px]"></div>
          <div className="flex flex-col items-center justify-end h-full">
            <a href="#" className="relative">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-center z-50">
                {title}
              </h5>
            </a>
            <p className="mb-3 text-sm font-normal text-center z-50">{link}</p>
            <button
              type="button"
              className="z-50 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Visit Site <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
