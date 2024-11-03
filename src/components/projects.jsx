import { ProjectCard } from "./project-card";
import { Section } from "./section";

export function Projects() {
  return (
    <Section title="projects 🚀">
      <div className="grid sm:grid-cols-2 gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
}
