import { Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/types";

type Props = {
  certificate: Certificate;
  className?: string;
};

export default function CertificateCard({
  certificate: { title, issuer, issuerLogo, issuedAt, validity, imgUrl },
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "bg-linear-dark shadow transition-transform duration-300 ease-out hover:scale-105 hover:shadow-primary-1",
        className,
      )}
    >
      <CardHeader className="flex items-center gap-4">
        <Image
          src={issuerLogo}
          alt={`${issuer} logo`}
          height={60}
          width={60}
          className=""
        />
        <div className="flex flex-col gap-0.5">
          <CardTitle className="text-card-foreground line-clamp-2 global-16-semibold">
            {title}
          </CardTitle>
          <p className="text-secondary-foreground text-caption">@{issuer}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div className="text-caption flex flex-col gap-1">
            <CardDescription>
              Issued: {" "}
              {issuedAt}
            </CardDescription>
            <CardDescription
              className={cn(
                validity ? "text-chart-5" : "text-chart-2",
              )}
            >
              {validity ? `Expires: ${validity}` : "No Expiry"}
            </CardDescription>
          </div>
          <Dialog>
            <DialogTrigger
              render={
                <Button
                  variant={"outline"}
                  className={"text-secondary-foreground self-end"}
                >
                  <Eye /> View
                </Button>
              }
            />
            <DialogContent className={"sm:max-w-xl"}>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <Image
                  src={imgUrl}
                  alt={title}
                  width={1024}
                  height={512}
                  className="rounded-xl"
                />
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
