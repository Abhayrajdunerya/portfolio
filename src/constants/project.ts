import type { Project } from "@/types";

export const PROJECTS: Project[] = [
    {
      id: 'nebula',
      title: 'Nebula Cloud Orchestrator',
      description: 'Automated multi-region deployment engine with real-time health monitoring and cost optimization analytics.',
      longDescription: 'Nebula resolves complex multi-cloud scaling bottlenecks. Built natively on server-side Next.js, it manages high-frequency deployments with safe multi-zone fallback capabilities, real-time node polling telemetry, and automatic server cost-reduction recommendations using an active scheduling algorithm.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh8aEA7SueGfFtUUMKo2pH66qX1qNtDA76rSTRmwfR8Wi4BlCx-o5GwrkLzn__e78yTCrCmMzF5-WAzNq3pwkLQQjuOGGieFeIyO8TTR0yeZzGwW4-vxexT0ljWgjjNV9YMzcw_-AQFVBt9pdm83JE_C8J1pfY4nKrh1mZa_VGkJG5VLW_HMty-ADlVXMsOet2x3ynq50RawvzrD5Tgiui-4BalemXD_w6rQaB1HgNnp1nEx0o3Rq2CfDpaYt1SbyQ6OkZzeKSTK_3',
      category: 'Cloud Engineering',
      tags: ['Next.js', 'TypeScript', 'AWS', 'Telemetry'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'lumina',
      title: 'Lumina Ledger',
      description: 'Immersive 3D transaction visualization platform designed for high-frequency trading surveillance.',
      longDescription: 'Lumina translates dense financial records into a clear spatial view. Utilizing Three.js WebGL rendering, users can trace high-speed transaction vectors in full 3D space, identify immediate volume spikes, and spot potential fraudulent vectors through automated clustering models.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOlv_6dZX6tCFWcvgA5_ye2DAS7p_wPqXpRhdK3cZ5nsWZepeRYH4ug-xTL2ltYET8uayLltmlFI84SmJ6m4MF0U8shM64N17bAQsArqVs5TPlZuJDEFP-T1Qen2p5XpHcZmRCJXRWHFZ8Vf7s5ZAoFnqOwvUWqID1REqPhAz8SSarJ5coEsaCHRpIN5-p9Kj5FNWMoi5g0TlOvZAsGdDMQW95KyKf0TyJrROZl9I-lYHWIanxkKs7iJgdB25ZHLviFxn0R847L2Mf',
      category: 'Visual Data',
      tags: ['Three.js', 'React', 'Tailwind', 'SciArt'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'syncra',
      title: 'Syncra Core',
      description: 'High-performance distributed database sync engine for cross-platform offline-first applications.',
      longDescription: 'Syncra is a lightweight backend engine resolving real-time synchronization collision. Crafted in Rust, it utilizes Conflict-Free Replicated Data Types (CRDTs) to sync complex user actions offline, committing them safely to a clustered PostgreSQL database once the signal returns.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcgenY9YZVg83nfs7-8_aZK3z8TaZ9K-9vFVE9OzDlG9EnJ_-L7qvm6fLDHSRWd9iVFZAHktGx-fX37iSSw356Y_bYr2JWcrIcPDnjPP_DIk6S7ysbLvD5TO5rCURImWpYtgcFK0cUtwnVnaRDHSwcwq4KtL-NclgybdERWBBaiRCaTQIXrqw2hYEKpqC69bVkX9xXt73WywEifWbKE3n-bUw1zCB4nYpsdcB1CQOwIbdEtIFsg3KOOXKbRkbflCRfWFYvU5D8XUv4',
      category: 'Core Systems',
      tags: ['Rust', 'PostgreSQL', 'Docker', 'CRDTs'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'aether',
      title: 'Aether API Gateway',
      description: 'An ultra-low latency API gateway designed for microservices architectures. Features native mTLS, rate limiting, and dynamic service discovery.',
      longDescription: 'Aether serves as the fast, secure border manager for scalable architectures. Implemented in Go, it features dynamic routing with latency averages below 1.2ms, native mutual TLS secure handshake protection, smart rate-limiting queues, and unified Kubernetes consul service lookup integrations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEIH5X4kEh18GhxiTkiiTLBpF9QNnr3PeksaeQPmzRqFl9cwtHwfDV_iQKRA8kQRk1lYXkrgSfr0z7BvBFDMzH0pknUMxRabF9JJbpMR_r7sSyY70twoIRq6XMCrzWpG7cmZrYaE3gPfQBp3SBXTEJ8ccJwvIMGKDv1-UKzSFyNFISYLIpI7oNIBwnTD7pIIlzwF2wiVQM2__3-QHjzkWuW3m4P3O2uoxhenXQxhMJdhFvKDxKHsgPSWYUlgIjV20VcDDCTYEAil3c',
      category: 'Bento Feature',
      tags: ['Go', 'gRPC', 'Kubernetes', 'mTLS'],
      caseStudyUrl: '#',
      sourceUrl: '#'
    }
];
