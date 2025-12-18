import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <FeaturedProjects />
      <AboutSection />
    </div>
  );
}
