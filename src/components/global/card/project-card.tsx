import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({
  project: {
    title,
    description,
    imgUrl,
    category,
    tags,
    status,
    demo,
    github,
    year,
  },
  className,
}: Props) {
  return (
    <div
      className={cn(
        "bg-elite-content-card-outline rounded-2xl p-0.5 flex-center",
        "transition-transform duration-300 ease-out hover:scale-105",
      )}
    >
      <Card
        className={cn(
          "bg-linear-dark rounded-2xl flex h-full w-full flex-col gap-5 bg-cover bg-center px-5 py-8",
          className,
        )}
      >
        <CardHeader className="w-full p-0 relative">
          <Badge variant={"secondary"} className={cn("absolute top-2 right-2")}>{status}</Badge>
          <Image
            src={imgUrl}
            alt={title}
            className={cn("object-cover rounded-xl aspect-4/3")}
            height={300}
            width={600}
          />
        </CardHeader>
        <CardContent className={cn("flex flex-col gap-3 p-0")}>
          <div className="flex items-center justify-between">
            <Badge className="" variant={"outline"}>
              {category}
            </Badge>
            <Badge className="" variant={"outline"}>
              {year}
            </Badge>
          </div>
          <h5 className="global-20-bold md:global-24-bold line-clamp-2 text-foreground">
            {title}
          </h5>
          <p className="global-18-regular line-clamp-2 text-light-300">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <Badge variant={"secondary"} key={tag} className="shadow">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Source code & Demo Links */}
          <div className="flex items-center gap-4 mt-2">
            {demo && (
              <Button
                variant={"link"}
                render={
                  <Link href={demo} target="_blank">
                    Live Demo <MoveUpRight size={16} />
                  </Link>
                }
                className={cn("hover:no-underline px-0 py-0")}
              />
            )}
            {github && (
              <>
                {demo && <Separator orientation="vertical" />}
                <Button
                  variant={"outline"}
                  render={
                    <Link href={github} target="_blank">
                      Source Code
                    </Link>
                  }
                />
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
