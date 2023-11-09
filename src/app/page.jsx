import Navbar from "@/components/sub-components/Navbar";
import Image from "next/image";
import LeftDetails from "@/components/sub-components/LeftDetails";
import TopCard1 from "@/components/sub-components/Topcard_1";
import HomeAboutCard from "@/components/sub-components/HomeAboutCard";
import HomeSkillCard from "@/components/sub-components/HomeSkillCard";
import HomeShowcaseCard from "@/components/sub-components/ShowcaseCard";
import HomeCompletedProjectsCard from "@/components/sub-components/HomeCompletedProjectsCard";
import BlogandOffer from "@/components/sub-components/BlogandOffer";
import HomeTestimonialCard from "@/components/sub-components/HomeTestimonialCard";
import Footer from "@/components/sub-components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-12 px-5">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3 bg-dark rounded-[20px] mb-5 lg:mb-0 h-fit">
            <LeftDetails />
          </div>
          <div className="col-span-12 lg:col-span-9 lg:ml-[30px] text-white">
            {/* top card */}
            <TopCard1 />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                {/* left 1st card */}
                <HomeAboutCard />

                {/* left 2nd card */}
                <HomeSkillCard />

                {/* left 3rd card */}
                <HomeCompletedProjectsCard />
              </div>
              {/* right side */}
              <div className="col-span-12 lg:col-span-7">
                {/* showcase card */}
                <HomeShowcaseCard des="My Projects" linkText="See Projects" />

                {/* blog and offer */}
                <BlogandOffer />

                {/* testimonial */}
                <HomeTestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
