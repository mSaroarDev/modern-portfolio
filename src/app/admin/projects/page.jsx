import ProjectCard from "@/components/sub-components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-between mb-10">
      <div className="stats bg-semiDark mb-10 flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>

        <h1 className="textLg text-white">
          <span className="text-semiDark">{"-"}</span>Recent Projects
        </h1>
      </div>

      <Link className="btn bg-brandColor border-0" href={"/admin/projects/new"}>New Projects</Link>
      </div>

      <div className="flex flex-col gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
