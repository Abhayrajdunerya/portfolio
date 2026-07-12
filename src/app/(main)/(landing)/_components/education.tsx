import Changelog, { type ChangelogData } from "@/components/global/changelog";
import Section from "@/components/global/wrapper/section";
import { EDUCATION } from "@/constants";

export default function Education() {
  const changelogData: ChangelogData[] = EDUCATION.map((education) => ({
    date: education.fromDate,
    title: education.course,
    tags: [],
    body: () => (
      <div>
        <div className="">{education.institute}</div>
        {education.description && <p>{education.description}</p>}
      </div>
    ),
  }));

  return (
    <Section id="education" heading="Education" className="bg-linear-dark rounded-3xl">
      <Changelog data={changelogData} />
    </Section>
  );
}
