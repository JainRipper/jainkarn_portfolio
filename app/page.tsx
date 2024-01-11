import AboutSection from "@/components/AboutSection"
import ServiceSection from "@/components/ServiceSection"
import SkillSection from "@/components/SkillSection"
import HeroSection from "@/components/HeroSection"
import PortfolioSection from "@/components/PortfolioSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      {/* <AboutSection /> */}
      <ServiceSection />
      <SkillSection />
      <PortfolioSection />
    </main>
  )
}
