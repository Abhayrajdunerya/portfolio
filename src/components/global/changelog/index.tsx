import { BlurFade } from "@/components/ui/blur-fade";
import { cn, formatDate } from "@/lib/utils";

export type ChangelogData = {
  title: string;
  date: string;
  version?: string;
  tags?: string[];
  body: React.ComponentType;
};

type Props = {
  data: ChangelogData[];
};

export default function Changelog({ data }: Props) {
  const sortedChangelogs = data.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return (
    <div className="relative">
      {sortedChangelogs.map((changelog, idx) => {
        const MDX = changelog.body;
        const date = new Date(changelog.date);
        const formattedDate = formatDate(date);

        return (
          <BlurFade
            key={changelog.title}
            delay={0.25 * 2 + idx * 0.05}
            inView
            direction="up"
          >
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-y-6">
                <div className="md:w-48 shrink-0">
                  <div className="md:sticky md:top-8 pb-10">
                    <time className="text-sm font-medium text-muted-foreground block mb-3">
                      {formattedDate}
                    </time>

                    {changelog.version && (
                      <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-bold">
                        {changelog.version}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 md:pl-8 relative pb-10">
                  {/* Vertical timeline line */}
                  <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                  </div>

                  <div className="space-y-6">
                    <div className="relative z-10 flex flex-col gap-2">
                      <h2 className="text-2xl font-semibold tracking-tight text-balance">
                        {changelog.title}
                      </h2>

                      {/* Tags */}
                      {changelog.tags && changelog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {changelog.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className={cn(
                        "prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance",
                        "",
                      )}
                    >
                      <MDX />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
