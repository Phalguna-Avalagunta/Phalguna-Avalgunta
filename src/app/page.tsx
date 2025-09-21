import Hero from '@/components/Hero';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortfolioShowcase />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
