import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Lyra — AI Design System",
    description:
      "A generative design token engine that drafts full Figma-compatible token sets from a one-line brand brief. Built on GPT-4o and Style Dictionary.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8aEA7SueGfFtUUMKo2pH66qX1qNtDA76rSTRmwfR8Wi4BlCx-o5GwrkLzn__e78yTCrCmMzF5-WAzNq3pwkLQQjuOGGieFeIyO8TTR0yeZzGwW4-vxexT0ljWgjjNV9YMzcw_-AQFVBt9pdm83JE_C8J1pfY4nKrh1mZa_VGkJG5VLW_HMty-ADlVXMsOet2x3ynq50RawvzrD5Tgiui-4BalemXD_w6rQaB1HgNnp1nEx0o3Rq2CfDpaYt1SbyQ6OkZzeKSTK_3",
    category: "AI / ML",
    tags: ["Next.js", "OpenAI", "Style Dictionary", "TypeScript"],
    status: "Live",
    demo: "https://lyra.design",
    github: "https://github.com/you/lyra",
    year: "2024",
    // featured: true,
  },
  {
    title: "Meridian",
    description:
      "Real-time collaborative whiteboard with conflict-free CRDT sync, infinite canvas, and offline-first architecture.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8aEA7SueGfFtUUMKo2pH66qX1qNtDA76rSTRmwfR8Wi4BlCx-o5GwrkLzn__e78yTCrCmMzF5-WAzNq3pwkLQQjuOGGieFeIyO8TTR0yeZzGwW4-vxexT0ljWgjjNV9YMzcw_-AQFVBt9pdm83JE_C8J1pfY4nKrh1mZa_VGkJG5VLW_HMty-ADlVXMsOet2x3ynq50RawvzrD5Tgiui-4BalemXD_w6rQaB1HgNnp1nEx0o3Rq2CfDpaYt1SbyQ6OkZzeKSTK_3",
    category: "FULL STACK",
    tags: ["React", "Yjs", "WebSockets", "Rust"],
    status: "Live",
    demo: "https://meridian.app",
    github: "https://github.com/you/meridian",
    year: "2024",
  },
  {
    title: "Prism CLI",
    description:
      "Zero-config local LLM orchestration tool. Runs models via Ollama, manages context windows, and streams to any shell.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOlv_6dZX6tCFWcvgA5_ye2DAS7p_wPqXpRhdK3cZ5nsWZepeRYH4ug-xTL2ltYET8uayLltmlFI84SmJ6m4MF0U8shM64N17bAQsArqVs5TPlZuJDEFP-T1Qen2p5XpHcZmRCJXRWHFZ8Vf7s5ZAoFnqOwvUWqID1REqPhAz8SSarJ5coEsaCHRpIN5-p9Kj5FNWMoi5g0TlOvZAsGdDMQW95KyKf0TyJrROZl9I-lYHWIanxkKs7iJgdB25ZHLviFxn0R847L2Mf",
    category: "OPEN SOURCE",
    tags: ["Go", "Ollama", "gRPC", "CLI"],
    status: "In Progress",
    github: "https://github.com/you/prism-cli",
    year: "2025",
  },
  {
    title: "Vault",
    description:
      "End-to-end encrypted notes app. AES-256 client-side encryption, zero-knowledge server, biometric unlock on mobile.",
    // imgUrl: "/projects/vault.png",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh8aEA7SueGfFtUUMKo2pH66qX1qNtDA76rSTRmwfR8Wi4BlCx-o5GwrkLzn__e78yTCrCmMzF5-WAzNq3pwkLQQjuOGGieFeIyO8TTR0yeZzGwW4-vxexT0ljWgjjNV9YMzcw_-AQFVBt9pdm83JE_C8J1pfY4nKrh1mZa_VGkJG5VLW_HMty-ADlVXMsOet2x3ynq50RawvzrD5Tgiui-4BalemXD_w6rQaB1HgNnp1nEx0o3Rq2CfDpaYt1SbyQ6OkZzeKSTK_3",
    category: "MOBILE",
    tags: ["React Native", "Expo", "SQLite", "Web Crypto API"],
    status: "Live",
    demo: "https://getvault.app",
    github: "https://github.com/you/vault",
    year: "2023",
  },
];