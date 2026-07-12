import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

type Props = {
  skill: Skill;
};

export default function SkillCard({ skill: { icon, title } }: Props) {
  return (
    <Card
      className={cn(
        "rounded-DEFAULT aspect-square p-3! flex items-center justify-center bg-secondary",
        "transition-transform duration-300 ease-out hover:scale-105 hover:rotate-6"
      )}
    >
      <Image
        height={52}
        width={52}
        src={icon}
        alt={title}
        className="size-13"
      />
    </Card>
  );
}
