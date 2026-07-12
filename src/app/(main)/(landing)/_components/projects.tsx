import ProjectCard from "@/components/global/card/project-card";
import Section from "@/components/global/wrapper/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { PROJECTS } from "@/constants/project";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <div
        className={cn(
          "grid gap-5",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {PROJECTS.map((project, idx) => (
          <BlurFade key={project.title} delay={0.25 * 2 + idx * 0.05} inView direction="up">
            <ProjectCard project={project} key={project.title} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
