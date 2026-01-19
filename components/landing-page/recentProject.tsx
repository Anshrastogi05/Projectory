import SectionHeader from "@/components/common/section-header";
import { CalendarIcon, RocketIcon } from "lucide-react";
import EmptyState from "@/components/common/empty-state";

export default function RecentlyProject() {
  const recentlyProject: Project[] = []; // Replace with real data
  type Project = {
  id: string;
  title: string;
};


  return (
    <section className="py-20 flex flex-col bg-muted/20">
      <div className=" wrapper py-20">
        <SectionHeader
          title="Recently Added Projects"
          Icon={RocketIcon}
          description="The most recently added real-world projects"
        />
        {recentlyProject.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyProject.map((project) => (
              <div key={project.id}>
                   {project.title}
                {/* Replace this div with <ProjectCard project={project} /> */}
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            message="No projects found."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
