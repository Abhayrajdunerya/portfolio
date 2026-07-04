import { Layers, Palette, Terminal, Workflow } from "lucide-react";
import type { Skill } from "@/types";

export const SKILLS: Skill[] = [
  {
    title: "Next.js",
    description:
      "Architecting server-side rendered and static applications with optimized performance and SEO focus.",
    icon: Layers,
  },
  {
    title: "TypeScript",
    description:
      "Leveraging strong typing for robust, scalable, and maintainable codebase architectures.",
    icon: Terminal,
  },
  {
    title: "React",
    description:
      "Designing component-driven interfaces with advanced state management and efficient rendering cycles.",
    icon: Workflow,
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafting custom utility-first design systems that ensure aesthetic consistency and responsive agility.",
    icon: Palette,
  },
];
