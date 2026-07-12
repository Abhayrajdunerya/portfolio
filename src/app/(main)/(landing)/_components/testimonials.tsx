import TestimonialCard from "@/components/global/card/testimonial-card";
import Section from "@/components/global/wrapper/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS } from "@/constants";

export default function Testimonials() {
  const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

  return (
    <Section id="testimonials" heading="Testimonials">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover>
          {firstRow.map((testimonial, idx) => (
            <BlurFade
              key={testimonial.author}
              delay={0.25 * 2 + idx * 0.05}
              inView
              direction="up"
            >
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
              />
            </BlurFade>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover>
          {secondRow.map((testimonial, idx) => (
            <BlurFade
              key={testimonial.author}
              delay={0.25 * 2 + idx * 0.05}
              inView
              direction="up"
            >
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
              />
            </BlurFade>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </Section>
  );
}
