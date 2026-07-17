import Image from "next/image";
import Changelog, { type ChangelogData } from "@/components/global/changelog";
import Section from "@/components/global/wrapper/section";
import { EDUCATION } from "@/constants";

export default function Education() {
  const changelogData: ChangelogData[] = EDUCATION.map((education) => ({
    date: education.fromDate,
    title: education.course,
    tags: [],
    body: () => (
      <div className="flex gap-6">
        <Image
          alt={education.institute}
          src={education.logo}
          height={100}
          width={100}
          className="size-20 rounded-DEFAULT object-cover object-center"
        />
        <div className="flex flex-col gap-1">
          <div className="text-foreground global-18-regular">
            {education.institute}
          </div>
          {education.description && (
            <p className="text-secondary-foreground global-16-regular">
              {education.description}
            </p>
          )}
          {education.score && (
            <p className="text-secondary-foreground global-16-regular">
              {education.score}
            </p>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <Section
      id="education"
      heading="Education"
      className="bg-linear-dark rounded-3xl"
    >
      <Changelog data={changelogData} />
    </Section>
  );
}
