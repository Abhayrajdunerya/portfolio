"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type ContactUsFormData, contactUsFormSchema } from "./schema";

export default function ContactUsForm() {
  const form = useForm<ContactUsFormData>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactUsFormData) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-xl">
      <div className="grid grid-cols-2 gap-6">
        <Link href={""} className="col-span-1">
          <div className="whitespace-nowrap px-4 py-2 rounded-DEFAULT flex gap-2 items-center bg-secondary border text-secondary-foreground">
            <Mail size={16} /> abhayrajdunerya@gmail.com
          </div>
        </Link>
        <Link href={""} className="col-span-1">
          <div className="whitespace-nowrap px-4 py-2 rounded-DEFAULT flex gap-2 items-center bg-secondary border text-secondary-foreground">
            <Smartphone size={16} /> +917224820282
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-xl">
        <form id="contact-us-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-us-form-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="contact-us-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                    className="h-10 rounded-DEFAULT border-none py-2 px-3"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-us-form-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="contact-us-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    className="h-10 rounded-DEFAULT border-none py-2 px-3"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-us-form-message">
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="contact-us-form-message"
                    placeholder="Enter your message"
                    rows={6}
                    className="min-h-24 resize-none rounded-DEFAULT border-none py-2 px-3"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Field orientation="horizontal" className="flex-center">
          <Button
            type="submit"
            size={"lg"}
            form="contact-us-form"
            className={
              "gradient-bluish text-background h-10 global-14-semibold whitespace-nowrap rounded-DEFAULT px-4"
            }
          >
            Send Message
          </Button>
        </Field>
      </div>
    </div>
  );
}
