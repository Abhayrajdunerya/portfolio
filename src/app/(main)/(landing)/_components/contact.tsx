import ContactUsForm from "@/components/forms/contact-us";
import Section from "@/components/global/wrapper/section";

export default function Contact() {
  return (
    <Section id="contact" heading="Contact Us" className="bg-linear-dark rounded-3xl mb-12">
      <div className="w-full flex-center">
        <ContactUsForm />
      </div>
    </Section>
  );
}
