import Image from "next/image";
import Changelog, { type ChangelogData } from "@/components/global/changelog";
import Section from "@/components/global/wrapper/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EXPERIENCE } from "@/constants";

export default function Experience() {
  const changelogData: ChangelogData[] = EXPERIENCE.map((experience) => ({
    date: experience.fromDate,
    title: experience.role,
    tags: [],
    body: () => (
      <div className="flex gap-6">
        <Image
          alt={experience.company}
          src={experience.logo}
          height={100}
          width={100}
          className="size-20 rounded-DEFAULT object-cover object-center"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-foreground global-18-regular">
              {experience.company}
            </div>
            {experience.description && (
              <p className="text-secondary-foreground global-16-regular">
                {experience.description}
              </p>
            )}
          </div>
          {(experience.offerLetter || experience.certificate) && (
            <div className="flex items-center gap-4">
              {experience.offerLetter && (
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button
                        variant={"outline"}
                        className={"text-secondary-foreground"}
                      >
                        Offer Letter
                      </Button>
                    }
                  />
                  <DialogContent className={"sm:max-w-xl"}>
                    <DialogHeader>
                      <DialogTitle>Offer Letter</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <Image
                        src={experience.offerLetter}
                        alt={`Offer Letter at ${experience.company}`}
                        width={1024}
                        height={512}
                        className="rounded-xl"
                      />
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              )}
              {experience.certificate && (
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button
                        variant={"outline"}
                        className={"text-secondary-foreground"}
                      >
                        Certificate
                      </Button>
                    }
                  />
                  <DialogContent className={"sm:max-w-xl"}>
                    <DialogHeader>
                      <DialogTitle>Certificate</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <Image
                        src={experience.certificate}
                        alt={`Certificate at ${experience.company}`}
                        width={1024}
                        height={512}
                        className="rounded-xl"
                      />
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <Section
      id="experience"
      heading="Experience"
      className="bg-linear-dark rounded-3xl"
    >
      <Changelog data={changelogData} />
    </Section>
  );
}
