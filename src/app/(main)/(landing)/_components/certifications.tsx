import CertificateCard from "@/components/global/card/certificate-card";
import Section from "@/components/global/wrapper/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { CERTIFICATES } from "@/constants/certification";
import { cn } from "@/lib/utils";

export default function Certifications() {
  return (
    <Section
      heading="Certifications"
      subheading="A curated selection of my professional certifications, showcasing my commitment to continuous learning and expertise in the field."
      id="certifications"
      className={cn("relative")}
    >
      <div
        className={cn(
          "grid gap-6",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {CERTIFICATES.map((certificate, idx) => (
          <BlurFade key={certificate.title} delay={0.25 * 3 + idx * 0.05} inView direction="up">
            <CertificateCard
              certificate={certificate}
              key={certificate.title}
            />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
