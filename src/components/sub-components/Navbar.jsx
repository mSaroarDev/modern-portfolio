import Image from "next/image";
import Link from "next/link";
import image from "public/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md px-1 lg:px-10 bg-dark">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/pages/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/pages/portfolio"}>Portfolio</Link>
                </li>
                <li>
                  <Link href={"/pages/services"}>Services</Link>
                </li>
                {/* <li>
                  <a>Services</a>
                  <ul className="p-2">
                    <li>
                      <Link href={"/pages/services"}>Submenu 1</Link>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link href={"/pages/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <Link href={"/"}>
              <Image src={image} width={150} height={150} alt="logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/pages/about"}>About</Link>
              </li>
              <li>
                <Link href={"/pages/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link href={"/pages/services"}>Services</Link>
              </li>
              {/* <li>
                  <a>Services</a>
                  <ul className="p-2">
                    <li>
                      <Link href={"/pages/services"}>Submenu 1</Link>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
              <li>
                <Link href={"/pages/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              href={"/pages/login"}
              className="rounded-full text-white"
              title="Light Mode"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
