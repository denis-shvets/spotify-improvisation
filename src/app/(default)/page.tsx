import Blockquote from '@/features/home/Blockquote';
import Hero from '@/features/home/Hero';
import RecentProjects from '@/features/home/RecentProjects';

function RootPage() {
  return (
    <main className="pt-18">
      <Hero />
      <Blockquote />
      <RecentProjects />
    </main>
  );
}

export default RootPage;
