import Navbar from "@/components/sub-components/Navbar";
import LeftDetails from "@/components/sub-components/LeftDetails";
import Footer from "@/components/sub-components/Footer";
import BackToHome from "@/components/sub-components/BackToHome";
import ReactCard from "@/components/sub-components/skillcards/ReactCard";
import JavascriptCard from "@/components/sub-components/skillcards/Javascript";
import NextJSCard from "@/components/sub-components/skillcards/NextJS";
import ReduxCard from "@/components/sub-components/skillcards/Redux";
import DatabaseSKillCard from "@/components/sub-components/skillcards/Databases";
import FrontendCard from "@/components/sub-components/services/Frontend";
import BackendCard from "@/components/sub-components/services/Backend";
import FullStackCard from "@/components/sub-components/services/Fullstack";

export default function SkillsPage() {
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
                <FrontendCard />

                {/* left 2nd card */}
                <FullStackCard />


              </div>
              {/* right side */}
              <div className="col-span-12 lg:col-span-7">
                {/* showcase card */}
                <BackendCard />

                {/* programiing knoledgge */}
                <DatabaseSKillCard />
      
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
