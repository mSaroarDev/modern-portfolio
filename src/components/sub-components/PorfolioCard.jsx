import Image from "next/image";
import Link from "next/link";
import image from 'public/brand.jpg'

export default function PortfolioCard({data}) {
  return (
    <>
      <Link href={data.link}>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image src={image} width={200} height={200} alt="Image" className="object-cover" />
        </figure>
        <div className="card-body flex items-end justify-end">
          <h2 className="card-title">{data.title}</h2>
          {/* <p>{title}</p> */}
        </div>
      </div>
      </Link>
    </>
  );
}
