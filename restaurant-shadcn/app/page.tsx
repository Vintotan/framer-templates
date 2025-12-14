import {
  Hero,
  MenuSection,
  AboutSection,
  ContactSection,
  CTASection,
  Footer,
} from "@/components/restaurant";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
