"use client";

import Section from "@/components/global/wrapper/section";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { LightRays } from "@/components/ui/light-rays";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section
      id="hero"
      className={cn(
        "max-w-full! w-full relative overflow-hidden px-0 py-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0 p-0!",
        // "bg-linear-dark",
      )}
    >
      <div className="w-full wrapper py-16">
        <BlurFade delay={0.25} inView direction="up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            <AuroraText>Hello World</AuroraText> 👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView direction="up">
          <span className="text-xl tracking-tighter text-pretty sm:text-3xl xl:text-4xl/none">
            Nice to meet you
          </span>
        </BlurFade>
      </div>

      {/* ── Particles — ambient depth layer ─────────────────────── */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={55}
        staticity={40}
        ease={60}
        color="#d2bbff"
        refresh={false}
      />
      <LightRays className="opacity-50" blur={60} />
    </Section>
  );
}
