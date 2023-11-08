import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";

export default function Footer() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-[20px] bg-dark p-8">
        <Link href={"/"}>
        <Image src={logo} height={200} width={200} alt="Logo" />
        </Link>
        <p className="text-white mt-2">Copyright To TeamSaroar © 2023-24</p>
      </div>
    </>
  );
}
