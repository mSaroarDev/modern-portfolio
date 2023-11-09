import Navbar from "@/components/sub-components/Navbar";
import LeftDetails from "@/components/sub-components/LeftDetails";
import HomeSkillCard from "@/components/sub-components/HomeSkillCard";
import HomeCompletedProjectsCard from "@/components/sub-components/HomeCompletedProjectsCard";
import HomeTestimonialCard from "@/components/sub-components/HomeTestimonialCard";
import Footer from "@/components/sub-components/Footer";
import BackToHome from "@/components/sub-components/BackToHome";
import EducationCard from "@/components/sub-components/EducationCard";
import AddressCard from "@/components/sub-components/AddressCard";
import OstadGraduateCard from "@/components/sub-components/OstadGraduate";
import EmailCard from "@/components/sub-components/EmailCard";
import PhoneContactCard from "@/components/sub-components/PhoneContactCard";
import SocialLinksCard from "@/components/sub-components/SocialLinksCard";
import ContactForm from "@/components/sub-components/ContactForm";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-12 px-5">
        <div className="grid grid-cols-12">
          <div className="hidden lg:block col-span-12 lg:col-span-3 bg-dark rounded-[20px] mb-5 lg:mb-0 h-fit">
            <LeftDetails />
          </div>

          <div className="col-span-12 lg:col-span-9 lg:ml-[30px] text-white">
            {/* top card */}
            <BackToHome />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                {/* left 1st card */}
                <EmailCard />

                {/* left 2nd card */}
                <PhoneContactCard />

                {/* showcase card */}
                <AddressCard />

                {/* left 3rd card
                <HomeCompletedProjectsCard /> */}
              </div>
              {/* right side */}
              <div className="col-span-12 lg:col-span-7">
                
                {/* SocialLinksCard */}
                <SocialLinksCard />

                

                {/* testimonial */}
                <ContactForm />

                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
