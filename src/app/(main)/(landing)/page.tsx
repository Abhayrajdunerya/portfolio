import Certifications from "./_components/certifications";
import Contact from "./_components/contact";
import Education from "./_components/education";
import Experience from "./_components/experience";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skills from "./_components/skills";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Header */}

        {/* Primary landing section */}
        <main className="relative flex flex-col">
          {/* Hero section */}
          <Hero />

          {/* Skill section */}
          <Skills />

          {/* Project section */}
          <Projects />

          {/* Experience section */}
          <Experience />

          {/* Certifications section */}
          <Certifications />

          {/* Education section */}
          <Education />

          {/* Testimonial section */}
          <Testimonials />

          {/* Contact us section */}
          <Contact />
        </main>

        {/* Footer */}
      </div>
      {/* <Suspense>
        <SmoothCursor />
      </Suspense> */}
    </>
  )
}
