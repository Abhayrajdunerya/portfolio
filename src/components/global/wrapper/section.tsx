import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  heading?: string;
  subheading?: string;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  heading,
  subheading,
  className,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn("flex flex-col gap-10 wrapper py-16", className)}
    >
      {heading || subheading ? (
        <div className="text-center flex flex-col gap-4">
          {heading && (
            <BlurFade delay={0.25} inView direction="up">
              <h2 className="text-section-heading-lg">{heading}</h2>
            </BlurFade>
          )}
          {subheading && (
            <BlurFade delay={0.25 * 2} inView direction="up">
              <p className="text-lg text-muted-foreground">{subheading}</p>
            </BlurFade>
          )}
        </div>
      ) : null}
      <BlurFade delay={0.25 * (subheading ? 3 : 2)} inView direction="up">
        {children}
      </BlurFade>
    </section>
  );
}
