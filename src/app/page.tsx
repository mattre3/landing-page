import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StackBuilder } from "@/components/sections/StackBuilder";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { ChaosToEcosystem } from "@/components/sections/ChaosToEcosystem";
import { TeamSection } from "@/components/sections/TeamSection";
import { QualifierQuiz } from "@/components/sections/QualifierQuiz";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { MobileStickyCta } from "@/components/sections/MobileStickyCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero />
        <ProblemSection />
        <StackBuilder />
        <ProcessTimeline />
        <FinancingSection />
        <ChaosToEcosystem />
        <TeamSection />
        <QualifierQuiz />
        <WhyUsSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
