import Link from "next/link";
import Image from "next/image";
import mongodb from "public/mongodb.svg";
import mysql from "public/mysql.svg";
import postgresql from "public/postgresql.svg";

export default function DatabaseSKillCard() {
  return (
    <>
        <div className="w-full bg-dark p-8 rounded-[20px] mb-8 hover:bg-brandColor/5 duration-300">
          <div className="skill_icons flex items-center justify-around gap-3">
            <div className="skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={mongodb} height={40} width={40} alt="JavaScript" />
            </div>
            <div className="skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={mysql} height={40} width={40} alt="JavaScript" />
            </div>
            <div className="text-white skill__container h-20 w-20 bg-semiDark rounded-lg flex items-center justify-center">
              <Image src={postgresql} height={40} width={40} alt="JavaScript" />
            </div>
          </div>
          <h1 className="mt-7 text-2xl flex items-center justify-between gap-3 font-bebas tracking-widest">
            Databases
            
          </h1>
          <p className="mb-1 text-slate-200">MongoDB, MySql and PostgreSQL</p>
        </div>
    </>
  );
}
