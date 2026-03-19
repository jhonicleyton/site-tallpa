import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import LeadCapture from "@/components/sections/LeadCapture";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <SocialProof />
      <LeadCapture />
    </main>
  );
}
