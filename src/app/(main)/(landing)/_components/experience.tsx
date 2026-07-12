import Changelog, { type ChangelogData } from "@/components/global/changelog";
import Section from "@/components/global/wrapper/section";
import { EXPERIENCE } from "@/constants";

export default function Experience() {
  const changelogData: ChangelogData[] = EXPERIENCE.map((experience) => ({
    date: experience.fromDate,
    title: experience.role,
    tags: [],
    body: () => (
      <div className="flex flex-col gap-1">
        <div className="text-foreground global-18-regular">{experience.company}</div>
        {experience.description && <p className="text-secondary-foreground global-16-regular">{experience.description}</p>}
      </div>
    ),
  }));

  return (
    <Section id="experience" heading="Experience" className="bg-linear-dark rounded-3xl">
      <Changelog data={changelogData} />
    </Section>
  );
}
