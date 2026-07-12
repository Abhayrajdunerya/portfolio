import SkillCard from "@/components/global/card/skill-card";
import Section from "@/components/global/wrapper/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { SKILLS } from "@/constants";

export default function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <div className="flex justify-center flex-wrap gap-6">
        {SKILLS.map((skill, idx) => (
          <BlurFade key={skill.title} delay={0.25 + idx * 0.05} inView direction="up">
            <SkillCard skill={skill} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
