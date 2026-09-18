import { Assistant } from "@/components/sections/assistant";
import { AssessmentSection } from "@/components/sections/assessment";
import { Contact } from "@/components/sections/contact";
import { Credibility } from "@/components/sections/credibility";
import { Hero } from "@/components/sections/hero";
import { Offerings } from "@/components/sections/offerings";
import { Support } from "@/components/sections/support";
import { KnowledgeDemo } from "@/components/knowledge-demo";
import { hero } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offerings />
      <Assistant />
      <section id="example" className="scroll-mt-24 border-b border-border">
        <div className="container-page py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-bridge uppercase">
            Working example
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-balance sm:text-4xl">
            A scripted onboarding assistant for a fictional company.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Sample questions, source-backed answers, and one question the
            assistant should not answer. Open the full page if you want more
            room on a phone.
          </p>
          <div className="mt-8">
            <KnowledgeDemo />
          </div>
          <p className="mt-4 text-sm">
            <a href="/example" className="underline underline-offset-2">
              Open the labeled fictional demo
            </a>
            {" · "}
            <a href={hero.primary.href} className="underline underline-offset-2">
              {hero.primary.label}
            </a>
          </p>
        </div>
      </section>
      <AssessmentSection />
      <Credibility />
      <Support />
      <Contact />
    </>
  );
}
