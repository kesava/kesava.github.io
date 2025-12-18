import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import FeaturedProjects from '@/components/FeaturedProjects';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <FeaturedProjects />
      <StatsSection />
    </div>
  );
}
