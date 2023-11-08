"use client";
import Navbar from "@/components/sub-components/Navbar";
import LeftDetails from "@/components/sub-components/LeftDetails";
import Footer from "@/components/sub-components/Footer";
import BackToHome from "@/components/sub-components/BackToHome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
              {/* timeline starts */}
              <div className="col-span-12">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2023"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Graduated from
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Ostad Limited
                    </h4>
                    <p>
                      Graduated as a React JS, Next JS Developer
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2022 - Now"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Pharmacy
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Atish Dipankar University of Science & Technology
                    </h4>
                    <p>
                      Department of Pharmacy
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2016 - 2020"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Graduated as 
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Registered Diploma Pharmacist
                    </h4>
                    <p>
                      Institute of Health Techonology, Rajshahi, Bangladesh
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2016 - 2017"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Higher Secondary
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Darusha College
                    </h4>
                    <p>
                      Science
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2013 - 2015"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Secondary
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Darusha High School
                    </h4>
                    <p>
                      Science
                    </p>
                  </VerticalTimelineElement>
                  
                  {/* <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    // icon={<StarIcon />}
                  /> */}
                </VerticalTimeline>
              </div>
              {/* timeline ends */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
