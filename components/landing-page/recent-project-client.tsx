'use client';

import SectionHeader from "@/components/common/section-header";
import { CalendarIcon, RocketIcon } from "lucide-react";
import EmptyState from "@/components/common/empty-state";
import type { Project } from "@/lib/products/product-select";
import ProjectCard from "@/components/products/product-card";

type RecentProjectClientProps = {
  recentlyProject: Project[];
};

export default function RecentProjectClient({
  recentlyProject,
}: RecentProjectClientProps) {
  return (
    <section className="py-20 flex flex-col bg-muted/20">
      <div className="wrapper py-20">
        <SectionHeader
          title="Recently Added Projects"
          Icon={RocketIcon}
          description="The most recently added real-world projects"
        />

        {recentlyProject.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyProject.map((project) => (
              <ProjectCard key={project.id} product={project} />
            ))}
          </div>
        ) : (
          <EmptyState message="No projects found." icon={CalendarIcon} />
        )}
      </div>
    </section>
  );
}
