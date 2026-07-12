import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/constants/assets";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial: { author, imgUrl, linkedIn, quote, designation },
}: Props) {
  return (
    <figure
      className={cn(
        "relative group flex flex-col gap-5 rounded-xl p-4 shadow transition-all duration-1000 ease-out",
        "bg-secondary md:max-w-sm max-w-64 h-full max-h-96 hover:shadow-primary-1"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full size-12 hover:border-primary hover:border-2 transition-all duration-1000 ease-out"
          width="100"
          height="100"
          alt={author}
          src={imgUrl}
        />
        <div className="">
          <Link href={linkedIn} target="_blank">
            <div className="flex items-center gap-1">
              <figcaption className="global-16-semibold text-foreground">
                {author}
              </figcaption>
              <Image
                src={ASSETS.ICONS.VERIFIED}
                height={16}
                width={16}
                alt="verified"
              />
            </div>
          </Link>
          <p className="global-16-regular text-secondary-foreground">
            {designation}
          </p>
        </div>
      </div>
      <blockquote className="flex-wrap text-[16px] text-foreground leading-6 text-light-100">
        {quote}
      </blockquote>
    </figure>
  );
}
