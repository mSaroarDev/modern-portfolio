import brandimage from "public/brand.jpg";
import Image from "next/image";

export default function ServiceCard({ icon, title, short_des }) {
  return (
    <>
      <div className="card w-[250px] bg-dark shadow-xl">
        <div className="h-24 w-24 bg-semiDark rounded-xl overflow-hidden flex items-start justify-start p-2 mt-10 ml-4">
          {icon}
        </div>

        <div className="card-body">
          <h2 className="card-title mb-1">{title}</h2>
          <p>{short_des}</p>
          {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
        </div>
      </div>
    </>
  );
}
